import { NextResponse } from "next/server";
import { createProduct, getProductsByLang } from "@/lib/products-store";

function checkAdminAuth(request) {
  const authHeader = (request.headers.get("x-admin-token") || "").trim();
  const raw = (process.env.ADMIN_TOKEN || "smartlib-admin-2024").trim();
  // Strip surrounding quotes that some env parsers may leave in
  const adminToken = raw.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
  return authHeader === adminToken;
}

// GET /api/admin/products — list all products (EN data)
export async function GET(request) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getProductsByLang("en");
  return NextResponse.json(data);
}

// POST /api/admin/products — create a new product
export async function POST(request) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { en, ru, uz } = body;

  if (!en || !ru || !uz) {
    return NextResponse.json(
      { error: "All three language versions (en, ru, uz) are required." },
      { status: 400 }
    );
  }

  const created = await createProduct({ en, ru, uz });
  return NextResponse.json(created, { status: 201 });
}
