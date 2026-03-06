import {
    ChatMessageData,
    ChatSessionData,
    IChatRepository,
} from "@/src/application/repositories/IChatRepository";
import { randomUUID } from "crypto";
import { getTursoDatabase } from "../../database/turso";

export class TursoChatRepository implements IChatRepository {
  private db = getTursoDatabase();

  async createSession(sessionId: string): Promise<void> {
    await this.db.execute({
      sql: `INSERT OR IGNORE INTO chat_sessions (id, status) VALUES (?, 'active')`,
      args: [sessionId],
    });
  }

  async getSession(sessionId: string): Promise<ChatSessionData | null> {
    const result = await this.db.execute({
      sql: `SELECT id, status, created_at, updated_at FROM chat_sessions WHERE id = ?`,
      args: [sessionId],
    });

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    return {
      id: row.id as string,
      status: row.status as "active" | "closed",
      createdAt: new Date(row.created_at as string + "Z"),
      updatedAt: new Date(row.updated_at as string + "Z"),
    };
  }

  async addMessage(
    sessionId: string,
    role: "user" | "assistant" | "admin",
    content: string
  ): Promise<ChatMessageData> {
    const id = randomUUID();
    
    // Using SQLite CURRENT_TIMESTAMP which defaults to UTC
    await this.db.execute({
      sql: `INSERT INTO chat_messages (id, session_id, role, content) VALUES (?, ?, ?, ?)`,
      args: [id, sessionId, role, content],
    });

    // Fetch the newly inserted record to get proper timestamp
    const result = await this.db.execute({
        sql: `SELECT created_at FROM chat_messages WHERE id = ?`,
        args: [id]
    });

    return {
      id,
      sessionId,
      role,
      content,
      createdAt: new Date(result.rows[0].created_at as string + "Z"),
    };
  }

  async getMessagesBySession(sessionId: string): Promise<ChatMessageData[]> {
    const result = await this.db.execute({
      sql: `SELECT id, session_id, role, content, created_at 
            FROM chat_messages 
            WHERE session_id = ? 
            ORDER BY created_at ASC`,
      args: [sessionId],
    });

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as "user" | "assistant" | "admin",
      content: row.content as string,
      createdAt: new Date(row.created_at as string + "Z"),
    }));
  }
}
