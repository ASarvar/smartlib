import { promises as fs } from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

const DATA_DIR = path.join(process.cwd(), "data");
const FILES = {
  en: path.join(DATA_DIR, "product-details.json"),
  ru: path.join(DATA_DIR, "product-details-ru.json"),
  uz: path.join(DATA_DIR, "product-details-uz.json"),
};

const SUPPORTED_LANGS = ["en", "ru", "uz"];

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
}

async function ensureSchema(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS products_localized (
      product_id INTEGER NOT NULL,
      lang TEXT NOT NULL,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (product_id, lang)
    )
  `;
}

async function readJsonFile(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return {};
  }
}

async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function normalizeProduct(data, id) {
  return { ...data, id: Number(id) };
}

async function seedDbFromJson(sql) {
  const countRows = await sql`SELECT COUNT(*)::int AS count FROM products_localized`;
  const count = countRows?.[0]?.count || 0;
  if (count > 0) return;

  const [enData, ruData, uzData] = await Promise.all([
    readJsonFile(FILES.en),
    readJsonFile(FILES.ru),
    readJsonFile(FILES.uz),
  ]);

  const allIds = Array.from(
    new Set([
      ...Object.keys(enData),
      ...Object.keys(ruData),
      ...Object.keys(uzData),
    ])
  );

  for (const rawId of allIds) {
    const id = Number(rawId);
    for (const lang of SUPPORTED_LANGS) {
      const source = lang === "en" ? enData : lang === "ru" ? ruData : uzData;
      const product = source[rawId];
      if (!product) continue;

      await sql`
        INSERT INTO products_localized (product_id, lang, data, updated_at)
        VALUES (${id}, ${lang}, ${JSON.stringify(normalizeProduct(product, id))}::jsonb, NOW())
        ON CONFLICT (product_id, lang)
        DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
      `;
    }
  }
}

export async function getProductsByLang(lang = "en") {
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
  const sql = getSqlClient();

  if (sql) {
    await ensureSchema(sql);
    await seedDbFromJson(sql);

    const rows = await sql`
      SELECT product_id, data
      FROM products_localized
      WHERE lang = ${safeLang}
      ORDER BY product_id ASC
    `;

    const result = {};
    for (const row of rows) {
      result[String(row.product_id)] = normalizeProduct(row.data || {}, row.product_id);
    }
    return result;
  }

  return readJsonFile(FILES[safeLang]);
}

export async function getProductById(id) {
  const productId = Number(id);
  const sql = getSqlClient();

  if (sql) {
    await ensureSchema(sql);
    await seedDbFromJson(sql);

    const rows = await sql`
      SELECT lang, data
      FROM products_localized
      WHERE product_id = ${productId}
    `;

    if (!rows.length) return null;

    const result = {};
    for (const row of rows) {
      result[row.lang] = normalizeProduct(row.data || {}, productId);
    }
    return result;
  }

  const [enData, ruData, uzData] = await Promise.all([
    readJsonFile(FILES.en),
    readJsonFile(FILES.ru),
    readJsonFile(FILES.uz),
  ]);

  if (!enData[String(productId)]) return null;

  return {
    en: normalizeProduct(enData[String(productId)] || {}, productId),
    ru: normalizeProduct(ruData[String(productId)] || {}, productId),
    uz: normalizeProduct(uzData[String(productId)] || {}, productId),
  };
}

export async function createProduct(payload) {
  const { en, ru, uz } = payload;
  const sql = getSqlClient();

  if (sql) {
    await ensureSchema(sql);
    await seedDbFromJson(sql);

    const nextRows = await sql`SELECT COALESCE(MAX(product_id), 0) + 1 AS next_id FROM products_localized`;
    const newId = Number(nextRows?.[0]?.next_id || 1);

    const records = {
      en: normalizeProduct(en, newId),
      ru: normalizeProduct(ru, newId),
      uz: normalizeProduct(uz, newId),
    };

    for (const lang of SUPPORTED_LANGS) {
      await sql`
        INSERT INTO products_localized (product_id, lang, data, updated_at)
        VALUES (${newId}, ${lang}, ${JSON.stringify(records[lang])}::jsonb, NOW())
      `;
    }

    return { id: newId, product: records.en };
  }

  const enData = await readJsonFile(FILES.en);
  const existingIds = Object.keys(enData).map(Number);
  const newId = existingIds.length ? Math.max(...existingIds) + 1 : 1;

  const enProduct = normalizeProduct(en, newId);
  const ruProduct = normalizeProduct(ru, newId);
  const uzProduct = normalizeProduct(uz, newId);

  enData[String(newId)] = enProduct;
  const ruData = await readJsonFile(FILES.ru);
  ruData[String(newId)] = ruProduct;
  const uzData = await readJsonFile(FILES.uz);
  uzData[String(newId)] = uzProduct;

  await Promise.all([
    writeJsonFile(FILES.en, enData),
    writeJsonFile(FILES.ru, ruData),
    writeJsonFile(FILES.uz, uzData),
  ]);

  return { id: newId, product: enProduct };
}

export async function updateProduct(id, payload) {
  const productId = Number(id);
  const { en, ru, uz } = payload;
  const sql = getSqlClient();

  if (sql) {
    await ensureSchema(sql);
    await seedDbFromJson(sql);

    const existing = await sql`
      SELECT 1 FROM products_localized WHERE product_id = ${productId} LIMIT 1
    `;
    if (!existing.length) return null;

    const records = {
      en: normalizeProduct(en, productId),
      ru: normalizeProduct(ru, productId),
      uz: normalizeProduct(uz, productId),
    };

    for (const lang of SUPPORTED_LANGS) {
      await sql`
        INSERT INTO products_localized (product_id, lang, data, updated_at)
        VALUES (${productId}, ${lang}, ${JSON.stringify(records[lang])}::jsonb, NOW())
        ON CONFLICT (product_id, lang)
        DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
      `;
    }

    return { id: productId, product: records.en };
  }

  const [enData, ruData, uzData] = await Promise.all([
    readJsonFile(FILES.en),
    readJsonFile(FILES.ru),
    readJsonFile(FILES.uz),
  ]);

  if (!enData[String(productId)]) return null;

  enData[String(productId)] = normalizeProduct(en, productId);
  ruData[String(productId)] = normalizeProduct(ru, productId);
  uzData[String(productId)] = normalizeProduct(uz, productId);

  await Promise.all([
    writeJsonFile(FILES.en, enData),
    writeJsonFile(FILES.ru, ruData),
    writeJsonFile(FILES.uz, uzData),
  ]);

  return { id: productId, product: enData[String(productId)] };
}

export async function deleteProduct(id) {
  const productId = Number(id);
  const sql = getSqlClient();

  if (sql) {
    await ensureSchema(sql);
    await seedDbFromJson(sql);
    await sql`DELETE FROM products_localized WHERE product_id = ${productId}`;
    return true;
  }

  const [enData, ruData, uzData] = await Promise.all([
    readJsonFile(FILES.en),
    readJsonFile(FILES.ru),
    readJsonFile(FILES.uz),
  ]);

  if (!enData[String(productId)]) return false;

  delete enData[String(productId)];
  delete ruData[String(productId)];
  delete uzData[String(productId)];

  await Promise.all([
    writeJsonFile(FILES.en, enData),
    writeJsonFile(FILES.ru, ruData),
    writeJsonFile(FILES.uz, uzData),
  ]);

  return true;
}
