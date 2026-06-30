import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products-store";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get("lang") || "en").toLowerCase();
  const product = await getProductById(params.id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const selected = product[lang] || product.en;
  return NextResponse.json(selected);
}
