import {
  ChatMessageData,
  ChatSessionData,
  IChatRepository,
} from "@/src/application/repositories/IChatRepository";
import { randomUUID } from "crypto";
import { getTursoDatabase } from "../../database/turso";

export class TursoChatRepository implements IChatRepository {
  private db = getTursoDatabase();

  async createSession(id: string, customerName?: string, customerPhone?: string): Promise<void> {
    await this.db.execute({
      sql: `INSERT INTO chat_sessions (id, customer_name, customer_phone, status, created_at, updated_at)
            VALUES (?, ?, ?, 'active', datetime('now'), datetime('now'))`,
      args: [id, customerName || null, customerPhone || null],
    });
  }

  async getLatestSessionByPhone(phone: string): Promise<ChatSessionData | null> {
    const result = await this.db.execute({
      sql: `SELECT id, customer_name, customer_phone, status, created_at, updated_at FROM chat_sessions 
            WHERE customer_phone = ? AND status = 'active'
            ORDER BY created_at DESC LIMIT 1`,
      args: [phone],
    });

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    return {
      id: row.id as string,
      customerName: row.customer_name as string | undefined,
      customerPhone: row.customer_phone as string | undefined,
      status: row.status as "active" | "closed",
      createdAt: new Date((row.created_at as string) + "Z"),
      updatedAt: new Date((row.updated_at as string) + "Z"),
    };
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

  async getAllSessionsWithLatestMessage(): Promise<(ChatSessionData & { latestMessage?: ChatMessageData })[]> {
    // Left join chat_sessions with the most recent message from chat_messages
    const result = await this.db.execute(`
      SELECT 
        s.id as session_id,
        s.customer_name as session_customer_name,
        s.customer_phone as session_customer_phone,
        s.status as session_status,
        s.created_at as session_created_at,
        s.updated_at as session_updated_at,
        m.id as message_id,
        m.role as message_role,
        m.content as message_content,
        m.created_at as message_created_at
      FROM chat_sessions s
      LEFT JOIN chat_messages m ON m.id = (
          SELECT id FROM chat_messages m2 
          WHERE m2.session_id = s.id 
          ORDER BY m2.created_at DESC LIMIT 1
      )
      WHERE s.status = 'active'
      ORDER BY s.updated_at DESC
    `);

    return result.rows.map((row) => {
      const session: ChatSessionData & { latestMessage?: ChatMessageData } = {
        id: row.session_id as string,
        customerName: row.session_customer_name as string | undefined,
        customerPhone: row.session_customer_phone as string | undefined,
        status: row.session_status as "active" | "closed",
        createdAt: new Date(row.session_created_at as string + "Z"),
        updatedAt: new Date(row.session_updated_at as string + "Z"),
      };

      if (row.message_id) {
        session.latestMessage = {
          id: row.message_id as string,
          sessionId: session.id,
          role: row.message_role as "user" | "assistant" | "admin",
          content: row.message_content as string,
          createdAt: new Date(row.message_created_at as string + "Z"),
        };
      }

      return session;
    });
  }

  async updateSessionStatus(sessionId: string, status: "active" | "closed"): Promise<void> {
    await this.db.execute({
      sql: `UPDATE chat_sessions SET status = ?, updated_at = (datetime('now')) WHERE id = ?`,
      args: [status, sessionId],
    });
  }

  async getSessionByShortId(shortId: string): Promise<ChatSessionData | null> {
    const result = await this.db.execute({
      sql: `SELECT id, status, created_at, updated_at FROM chat_sessions 
            WHERE id LIKE ? AND status = 'active'
            ORDER BY updated_at DESC LIMIT 1`,
      args: [`${shortId}%`],
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

  async getLatestActiveSession(): Promise<ChatSessionData | null> {
    const result = await this.db.execute(`
      SELECT id, status, created_at, updated_at FROM chat_sessions 
      WHERE status = 'active' 
      ORDER BY updated_at DESC LIMIT 1
    `);

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
    content: string,
    idOverride?: string
  ): Promise<ChatMessageData> {
    const id = idOverride || randomUUID();
    
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

  async getMessagesBySession(sessionId: string, limit?: number, beforeDate?: Date): Promise<ChatMessageData[]> {
    let sql = `SELECT id, session_id, role, content, created_at 
               FROM chat_messages 
               WHERE session_id = ? `;
    const args: (string | number)[] = [sessionId];

    if (beforeDate) {
      sql += ` AND created_at < ? `;
      // Convert Date object to SQLite UTC timestamp format YYYY-MM-DD HH:MM:SS
      args.push(beforeDate.toISOString().replace('T', ' ').replace('Z', ''));
    }

    sql += ` ORDER BY created_at DESC `;
    
    if (limit) {
      sql += ` LIMIT ?`;
      args.push(limit);
    }

    const result = await this.db.execute({ sql, args });

    // We ordered by DESC to get the latest messages correctly (especially with LIMIT), 
    // but the UI expects them in chronological (ASC) order (oldest to newest locally).
    return result.rows.reverse().map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as "user" | "assistant" | "admin",
      content: row.content as string,
      createdAt: new Date(row.created_at as string + "Z"),
    }));
  }

  async getNewMessages(sessionId: string, afterDate: Date): Promise<ChatMessageData[]> {
    const result = await this.db.execute({
      sql: `SELECT id, session_id, role, content, created_at 
            FROM chat_messages 
            WHERE session_id = ? AND created_at > ?
            ORDER BY created_at ASC`,
      args: [sessionId, afterDate.toISOString().replace('T', ' ').replace('Z', '')],
    });

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as "user" | "assistant" | "admin",
      content: row.content as string,
      createdAt: new Date(row.created_at as string + "Z"),
    }));
  }

  async searchMessages(sessionId: string, keyword: string): Promise<ChatMessageData[]> {
    const searchTerm = `%${keyword}%`;
    const result = await this.db.execute({
      sql: `SELECT id, session_id, role, content, created_at 
            FROM chat_messages 
            WHERE session_id = ? AND content LIKE ?
            ORDER BY created_at ASC`,
      args: [sessionId, searchTerm],
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
