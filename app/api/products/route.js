import { NextResponse } from "next/server";
import { getProductsByLang } from "@/lib/products-store";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get("lang") || "en").toLowerCase();

  const products = await getProductsByLang(lang);
  return NextResponse.json(products);
}
