import { readFileSync, existsSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const envCandidates = [".env.local", ".env.development.local", ".env"];
let databaseUrl = "";

for (const p of envCandidates) {
  if (!existsSync(p)) continue;
  const content = readFileSync(p, "utf8");
  const match = content.match(/^DATABASE_URL=(.*)$/m);
  if (match?.[1]) {
    databaseUrl = match[1].trim().replace(/^\"|\"$/g, "").replace(/^'|'$/g, "");
    break;
  }
}

if (!databaseUrl) {
  console.log("DATABASE_URL_NOT_FOUND");
  process.exit(0);
}

try {
  const sql = neon(databaseUrl);
  const ping = await sql`SELECT current_database() AS db, current_user AS role`;
  const table = await sql`SELECT to_regclass('public.products_localized') AS table_name`;
  const count = await sql`SELECT COUNT(*)::int AS total FROM products_localized`.catch(() => [{ total: -1 }]);

  console.log(`DB_OK ${ping[0].db} as ${ping[0].role}`);
  console.log(`TABLE ${table[0].table_name ?? "MISSING"}`);
  if (count[0].total >= 0) {
    console.log(`ROWS ${count[0].total}`);
  } else {
    console.log("ROWS table_not_queryable_yet");
  }
} catch (error) {
  console.log("DB_ERROR", error?.message || String(error));
  process.exit(1);
}
