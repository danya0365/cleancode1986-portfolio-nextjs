/**
 * Hard Reset Script
 * Drops all tables and re-runs migrations.
 * WARN: All data will be lost.
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { getTursoDatabase, runMigrations } from "./turso";

async function main() {
  console.log("🧨 Clean Code 1986 — DB Reset");
  console.log("═".repeat(40));

  const db = getTursoDatabase();

  console.log("⏳ Dropping all tables...");
  await db.executeMultiple(`
    DROP TABLE IF EXISTS chat_messages;
    DROP TABLE IF EXISTS chat_sessions;
  `);

  console.log("🗑 Tables dropped.");

  console.log("🔄 Re-running migrations...");
  await runMigrations(db);

  db.close();

  console.log("✅ Database reset successfully!");
  console.log("═".repeat(40));
}

main().catch((err) => {
  console.error("❌ Reset Error:", err);
  process.exit(1);
});
