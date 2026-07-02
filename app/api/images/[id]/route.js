import { neon } from "@neondatabase/serverless";

// Cache images for 1 year in the browser / CDN
const CACHE = "public, max-age=31536000, immutable";

export async function GET(request, { params }) {
  const id = Number(params.id);
  if (!id || isNaN(id)) {
    return new Response("Not found", { status: 404 });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return new Response("Database not configured", { status: 503 });
  }

  try {
    const sql = neon(databaseUrl);
    const rows = await sql`
      SELECT mime_type, data FROM product_images WHERE id = ${id} LIMIT 1
    `;

    if (!rows.length) {
      return new Response("Image not found", { status: 404 });
    }

    const { mime_type, data } = rows[0];

    // neon returns bytea as a Buffer or Uint8Array
    const buffer =
      data instanceof Buffer
        ? data
        : Buffer.isBuffer(data)
        ? data
        : Buffer.from(Object.values(data));

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": mime_type || "image/jpeg",
        "Cache-Control": CACHE,
        "Content-Length": String(buffer.byteLength),
      },
    });
  } catch (err) {
    console.error("Image serve error:", err.message);
    return new Response("Server error", { status: 500 });
  }
}
