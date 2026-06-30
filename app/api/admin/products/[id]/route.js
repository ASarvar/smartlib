import { NextResponse } from "next/server";
import { deleteProduct, getProductById, updateProduct } from "@/lib/products-store";

function checkAdminAuth(request) {
  const authHeader = (request.headers.get("x-admin-token") || "").trim();
  const raw = (process.env.ADMIN_TOKEN || "smartlib-admin-2024").trim();
  const adminToken = raw.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
  return authHeader === adminToken;
}

// GET /api/admin/products/[id] — get one product (all languages)
export async function GET(request, { params }) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const product = await getProductById(params.id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// PUT /api/admin/products/[id] — update a product
export async function PUT(request, { params }) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = params;
  const body = await request.json();
  const { en, ru, uz } = body;

  if (!en || !ru || !uz) {
    return NextResponse.json(
      { error: "All three language versions (en, ru, uz) are required." },
      { status: 400 }
    );
  }

  const updated = await updateProduct(id, { en, ru, uz });
  if (!updated) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

// DELETE /api/admin/products/[id] — delete a product
export async function DELETE(request, { params }) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const deleted = await deleteProduct(params.id);
  if (!deleted) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
