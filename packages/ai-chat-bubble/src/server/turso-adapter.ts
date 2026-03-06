import { Client, createClient } from "@libsql/client/web";
import { ChatMessageType } from "../types";

export interface IPluginChatRepository {
  initSession(name: string, phone: string): Promise<{ sessionId: string, history: ChatMessageType[], customerAuth?: any }>;
  saveMessage(sessionId: string, message: Omit<ChatMessageType, "timestamp">): Promise<void>;
  syncMessages(sessionId: string, lastMessageAt?: string, before?: string): Promise<ChatMessageType[]>;
  markAsRead(sessionId: string): Promise<void>;
}

export class TursoAdapter implements IPluginChatRepository {
  private client: Client;

  constructor(url?: string, authToken?: string) {
    const dbUrl = url || process.env.TURSO_DATABASE_URL;
    const dbToken = authToken || process.env.TURSO_AUTH_TOKEN;

    if (!dbUrl || !dbToken) {
      throw new Error("TursoAdapter requires TURSO_DATABASE_URL and TURSO_AUTH_TOKEN");
    }

    this.client = createClient({
      url: dbUrl,
      authToken: dbToken,
    });
  }

  async initSession(name: string, phone: string): Promise<{ sessionId: string, history: ChatMessageType[], customerAuth?: any }> {
    // 1. Find existing session by phone
    const sessionRes = await this.client.execute({
      sql: `SELECT id, customer_name, customer_phone FROM chat_sessions WHERE customer_phone = ? ORDER BY created_at DESC LIMIT 1`,
      args: [phone],
    });

    let sessionId: string;
    let customerAuth = { name, phone };

    if (sessionRes.rows.length > 0) {
      sessionId = String(sessionRes.rows[0].id);
      customerAuth = { 
         name: String(sessionRes.rows[0].customer_name), 
         phone: String(sessionRes.rows[0].customer_phone) 
      };
    } else {
      // 2. Create new session
      sessionId = crypto.randomUUID();
      await this.client.execute({
        sql: `INSERT INTO chat_sessions (id, status, customer_name, customer_phone) VALUES (?, 'new', ?, ?)`,
        args: [sessionId, name, phone],
      });
    }

    // 3. Fetch latest 50 messages
    const history = await this.syncMessages(sessionId, undefined, new Date(Date.now() + 10000).toISOString());
    return { sessionId, history, customerAuth };
  }

  async saveMessage(sessionId: string, message: Omit<ChatMessageType, "timestamp">): Promise<void> {
    await this.client.execute({
      sql: `
        INSERT INTO chat_messages (id, session_id, role, content, status, is_draft)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      args: [
        message.id,
        sessionId,
        message.role,
        message.content,
        message.status || 'sent',
        message.isDraft ? 1 : 0
      ],
    });

    // Automatically update session updated_at
    await this.client.execute({
      sql: `UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      args: [sessionId],
    });
  }

  async syncMessages(sessionId: string, lastMessageAt?: string, before?: string): Promise<ChatMessageType[]> {
    let sql = `
      SELECT id, role, content, status, is_draft, created_at 
      FROM chat_messages 
      WHERE session_id = ? 
      AND is_draft = 0
    `;
    const args: any[] = [sessionId];

    if (lastMessageAt) {
      sql += ` AND created_at > ?`;
      args.push(lastMessageAt);
    } else if (before) {
      sql += ` AND created_at < ?`;
      args.push(before);
    }

    sql += ` ORDER BY created_at ${before ? 'DESC' : 'ASC'} LIMIT 50`;

    const res = await this.client.execute({ sql, args });
    
    // If we paginated backwards, reverse to preserve chronological order in payload
    const rows = before ? [...res.rows].reverse() : res.rows;
    
    // Automatically mark admin messages as delivered when synced
    const unreadAdminMessageIds = rows
        .filter(r => r.role !== 'user' && r.status === 'sent')
        .map(r => String(r.id));
        
    if (unreadAdminMessageIds.length > 0) {
       const placeholders = unreadAdminMessageIds.map(() => '?').join(',');
       await this.client.execute({
          sql: `UPDATE chat_messages SET status = 'delivered' WHERE id IN (${placeholders})`,
          args: unreadAdminMessageIds
       });
    }

    return rows.map(r => ({
      id: String(r.id),
      role: r.role as any,
      content: String(r.content),
      status: String(r.status) as any,
      isDraft: Boolean(r.is_draft),
      timestamp: String(r.created_at)
    }));
  }

  async markAsRead(sessionId: string): Promise<void> {
    await this.client.execute({
      sql: `UPDATE chat_messages SET status = 'read' WHERE session_id = ? AND role != 'user' AND status != 'read'`,
      args: [sessionId],
    });
  }
}
