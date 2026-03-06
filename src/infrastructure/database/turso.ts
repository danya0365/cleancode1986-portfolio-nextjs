import { Client, createClient } from "@libsql/client";
import fs from "fs";
import path from "path";

let tursoClient: Client | null = null;
let migrationsRun = false;

const DB_DIR = path.join(process.cwd(), "data");

/**
 * Get the singleton Turso (libsql) database instance.
 */
export function getTursoDatabase(): Client {
  if (tursoClient) return tursoClient;

  const url = process.env.TURSO_DATABASE_URL || "file:data/chat.db";
  const authToken = process.env.TURSO_AUTH_TOKEN;

  // Ensure data/ directory exists ONLY for local files
  if (url.startsWith("file:")) {
    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }
    } catch (error) {
      console.warn("[Turso] Could not create local DB directory. Ignored if on Vercel.", error);
    }
  }

  tursoClient = createClient({
    url,
    authToken,
  });

  return tursoClient;
}

/**
 * Ensure database schema is created via @libsql/client
 */
export async function runMigrations(db: Client): Promise<void> {
  if (migrationsRun) return;

  await db.executeMultiple(`
    -- Chat Sessions
    CREATE TABLE IF NOT EXISTS chat_sessions (
      id TEXT PRIMARY KEY,
      customer_name TEXT,
      customer_phone TEXT,
      status TEXT DEFAULT 'new', -- new, active, follow_up, resolved, spam
      auto_reply INTEGER DEFAULT 1, -- 1 = ON, 0 = OFF
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Chat Messages
    CREATE TABLE IF NOT EXISTS chat_messages (
      id            TEXT PRIMARY KEY,
      session_id    TEXT NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
      role          TEXT NOT NULL CHECK(role IN ('user', 'assistant', 'admin')),
      content       TEXT NOT NULL,
      status        TEXT DEFAULT 'sent', -- sent, delivered, read
      is_draft      INTEGER DEFAULT 0, -- 1 = true, 0 = false (AI Suggestions)
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Indexes
    CREATE INDEX IF NOT EXISTS idx_chat_sessions_status ON chat_sessions(status);
    CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
    CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at);

    -- Users (Admin)
    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      username      TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role          TEXT NOT NULL DEFAULT 'admin',
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Magic Links (NextAuth)
    CREATE TABLE IF NOT EXISTS magic_links (
      id            TEXT PRIMARY KEY,
      token         TEXT NOT NULL UNIQUE,
      user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at    TEXT NOT NULL,
      is_used       INTEGER NOT NULL DEFAULT 0,
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  migrationsRun = true;
}
