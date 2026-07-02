import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { promises as fs } from "fs";
import path from "path";

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

function checkAdminAuth(request) {
  const authHeader = (request.headers.get("x-admin-token") || "").trim();
  const raw = (process.env.ADMIN_TOKEN || "smartlib-admin-2024").trim();
  const adminToken = raw.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
  return authHeader === adminToken;
}

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureImagesTable(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS product_images (
      id        BIGSERIAL PRIMARY KEY,
      filename  TEXT        NOT NULL,
      mime_type TEXT        NOT NULL,
      data      BYTEA       NOT NULL,
      size      INTEGER     NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export async function POST(request) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only JPG, PNG and WebP images are allowed." },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  if (buffer.byteLength > MAX_SIZE_MB * 1024 * 1024) {
    return NextResponse.json(
      { error: `File too large. Maximum size is ${MAX_SIZE_MB}MB.` },
      { status: 400 }
    );
  }

  const filename = sanitizeFilename(file.name) || `image-${Date.now()}.jpg`;

  // ── PRIMARY: store in Neon DB (survives every redeployment) ──────────────
  const databaseUrl = process.env.DATABASE_URL;
  if (databaseUrl) {
    try {
      const sql = neon(databaseUrl);
      await ensureImagesTable(sql);

      // Pass buffer directly — @neondatabase/serverless serialises Buffer as bytea
      const rows = await sql`
        INSERT INTO product_images (filename, mime_type, data, size)
        VALUES (${filename}, ${file.type}, ${buffer}, ${buffer.byteLength})
        RETURNING id
      `;

      return NextResponse.json(
        { path: `api/images/${rows[0].id}` },
        { status: 201 }
      );
    } catch (err) {
      console.error("DB image upload failed, falling back to filesystem:", err.message);
    }
  }

  // ── FALLBACK: local filesystem (dev only – not persistent on Vercel) ─────
  const UPLOAD_DIR = path.join(process.cwd(), "public", "assets", "img", "shop");
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const ext = path.extname(file.name) || ".jpg";
  const base = sanitizeFilename(path.basename(file.name, ext));
  const uniqueName = `${base}-${Date.now()}${ext}`;
  await fs.writeFile(path.join(UPLOAD_DIR, uniqueName), buffer);
  return NextResponse.json(
    { path: `assets/img/shop/${uniqueName}` },
    { status: 201 }
  );
}
