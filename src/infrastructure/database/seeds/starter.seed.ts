import { Client } from "@libsql/client";
import bcrypt from "bcryptjs";

export async function seedStarter(db: Client): Promise<void> {
  console.log("  ➡️  Running Starter Seed...");

  // Actually, for the chat system, we might not need strict starter data 
  // like admin users, since the admin is authenticated via LINE.
  // We'll just create one default test session to ensure the tables work.

  const testSessionId = "test-session-starter-001";

  try {
    // 1. Create a test session
    await db.execute({
      sql: `INSERT OR IGNORE INTO chat_sessions (id, status) VALUES (?, ?)`,
      args: [testSessionId, "active"],
    });

    // 2. Insert a welcome message
    await db.execute({
      sql: `INSERT OR IGNORE INTO chat_messages (id, session_id, role, content) VALUES (?, ?, ?, ?)`,
      args: [
        "msg-starter-001",
        testSessionId,
        "assistant",
        "สวัสดีครับ (จาก Starter Seed)",
      ],
    });
    
    // 3. Create default admin
    const defaultAdminId = "usr-admin-001";
    const passwordHash = await bcrypt.hash("admin1234", 10);
    await db.execute({
      sql: `INSERT OR IGNORE INTO users (id, username, password_hash, role) VALUES (?, ?, ?, ?)`,
      args: [defaultAdminId, "admin", passwordHash, "admin"],
    });

    console.log("  ✅  Starter Seed applied (test session and default admin created).");
  } catch (error) {
    console.error("  ❌  Starter Seed failed:", error);
    throw error;
  }
}
