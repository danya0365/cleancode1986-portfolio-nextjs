/**
 * Seed Orchestrator
 * Runs seed scripts based on CLI flags
 *
 * Usage:
 *   yarn db:seed           → starter
 *   yarn db:seed:starter   → starter
 *   yarn db:seed:mock      → starter + mock chat history
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { seedMock } from "./seeds/mock.seed";
import { seedStarter } from "./seeds/starter.seed";
import { getTursoDatabase, runMigrations } from "./turso";

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const mode = args[0] || "starter";

  const db = getTursoDatabase();

  console.log(`🌱 Clean Code 1986 — Database Seed`);
  console.log(`   Mode: ${mode}`);
  console.log("═".repeat(40));

  console.log("  ⏳ Enforcing Database Schema (Migrations)...");
  await runMigrations(db);

  // Always run starter seed
  await seedStarter(db);

  // Conditionally run mock seed
  if (mode === "mock") {
    const count = parseInt(args[1] || "50", 10);
    await seedMock(db, count);
  }

  // Close the client correctly
  db.close();

  console.log("═".repeat(40));
  console.log("🌱 Seed complete!");
}

main().catch((err) => {
  console.error("Seed Error:", err);
  process.exit(1);
});
