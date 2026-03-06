import { Client } from "@libsql/client";

export async function seedMock(db: Client, count: number = 50): Promise<void> {
  console.log(`  ➡️  Running Mock Seed (generating ${count} messages)...`);

  const mockSessionId = "test-session-mock-001";

  try {
    // 1. Ensure the session exists
    await db.execute({
      sql: `INSERT OR IGNORE INTO chat_sessions (id, status) VALUES (?, ?)`,
      args: [mockSessionId, "active"],
    });

    // 2. Generate messages
    for (let i = 0; i < count; i++) {
        const id = `msg-mock-${Date.now()}-${i}`;
        
        // Alternate roles
        let role = "user";
        let content = "ผู้ใช้ถามคำถามทดสอบ " + i;

        if (i % 3 === 1) {
            role = "assistant";
            content = "บอทกำลังตอบคำถามที่ " + i;
        } else if (i % 3 === 2) {
            role = "admin";
            content = "แอดมิน (CEO) ตอบคำถามที่ " + i + " จาก LINE ครับ";
        }

        // Generate a slightly staggered past timestamp
        const pastDate = new Date(Date.now() - (count - i) * 60000); // minus minutes
        const dateString = pastDate.toISOString().replace('T', ' ').substring(0, 19);

        await db.execute({
            sql: `INSERT INTO chat_messages (id, session_id, role, content, created_at) VALUES (?, ?, ?, ?, ?)`,
            args: [id, mockSessionId, role, content, dateString],
        });
    }

    console.log(`  ✅  Mock Seed applied (${count} messages created for session ${mockSessionId}).`);

  } catch (error) {
    console.error("  ❌  Mock Seed failed:", error);
    throw error;
  }
}
