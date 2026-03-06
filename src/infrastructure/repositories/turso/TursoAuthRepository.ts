import { Client } from "@libsql/client";
import { v4 as uuidv4 } from "uuid";
import { IAuthRepository, UserData } from "../../../application/repositories/IAuthRepository";
import { getTursoDatabase } from "../../database/turso";

export class TursoAuthRepository implements IAuthRepository {
  private db: Client;

  constructor() {
    this.db = getTursoDatabase();
  }

  private mapRowToUser(row: Record<string, unknown>): UserData {
    return {
      id: row.id as string,
      username: row.username as string,
      passwordHash: row.password_hash as string,
      role: row.role as "admin",
      createdAt: new Date((row.created_at as string) + "Z"),
    };
  }

  async getUserByUsername(username: string): Promise<UserData | null> {
    const result = await this.db.execute({
      sql: `SELECT * FROM users WHERE username = ?`,
      args: [username],
    });

    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  async getUserById(id: string): Promise<UserData | null> {
    const result = await this.db.execute({
      sql: `SELECT * FROM users WHERE id = ?`,
      args: [id],
    });

    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  async createMagicLink(userId: string, expiresAtMs: number): Promise<string> {
    const tokenId = uuidv4();
    const tokenSecret = uuidv4(); // standard random UUID for the secret URL token
    
    // Store as ISO string in SQLite
    const expiresAtIso = new Date(expiresAtMs).toISOString();

    await this.db.execute({
      sql: `INSERT INTO magic_links (id, token, user_id, expires_at, is_used) VALUES (?, ?, ?, ?, ?)`,
      args: [tokenId, tokenSecret, userId, expiresAtIso, 0],
    });

    return tokenSecret;
  }

  async getOrCreateMagicLink(userId: string, expiresAtMs: number): Promise<string> {
    const nowIso = new Date().toISOString();

    // 1. Garbage Collection: Auto-cleanup used or expired links
    try {
      await this.db.execute({
        sql: `DELETE FROM magic_links WHERE is_used = 1 OR expires_at < ?`,
        args: [nowIso],
      });
    } catch (e) {
      console.error("[TursoAuthRepository] Failed to cleanup magic links", e);
    }

    // 2. Try to find an existing active token for this user
    try {
      const result = await this.db.execute({
        sql: `SELECT token FROM magic_links WHERE user_id = ? AND is_used = 0 AND expires_at > ? LIMIT 1`,
        args: [userId, nowIso],
      });

      if (result.rows.length > 0) {
        return result.rows[0].token as string;
      }
    } catch (e) {
      console.error("[TursoAuthRepository] Failed to search for existing magic link", e);
    }

    // 3. Fallback: Create a new one
    return this.createMagicLink(userId, expiresAtMs);
  }

  async consumeMagicLink(token: string): Promise<UserData | null> {
    // 1. Fetch the token and join with user
    const result = await this.db.execute({
      sql: `
        SELECT m.id as link_id, m.is_used, m.expires_at, u.* 
        FROM magic_links m
        JOIN users u ON u.id = m.user_id
        WHERE m.token = ?
      `,
      args: [token],
    });

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    const isUsed = row.is_used as number;
    const expiresAt = new Date((row.expires_at as string) + "Z");

    // 2. Check validity
    if (isUsed === 1) return null;
    if (Date.now() > expiresAt.getTime()) return null;

    // 3. Mark as used
    await this.db.execute({
      sql: `UPDATE magic_links SET is_used = 1 WHERE id = ?`,
      args: [row.link_id as string],
    });

    // 4. Return user
    return this.mapRowToUser(row);
  }
}
