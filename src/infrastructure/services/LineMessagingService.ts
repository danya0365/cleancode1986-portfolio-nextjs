import { SITE } from "@/src/data/master/site";
import * as line from "@line/bot-sdk";
import { TursoAuthRepository } from "../repositories/turso/TursoAuthRepository";

export class LineMessagingService {
  private client: line.messagingApi.MessagingApiClient | null = null;
  private adminUserId: string | null = null;

  constructor() {
    const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const adminUserId = process.env.LINE_ADMIN_USER_ID;

    if (channelAccessToken) {
      this.client = new line.messagingApi.MessagingApiClient({
        channelAccessToken,
      });
    }

    if (adminUserId) {
      this.adminUserId = adminUserId;
    }
  }

  public isConfigured(): boolean {
    return this.client !== null && this.adminUserId !== null;
  }

  /**
   * Send a notification to the configured Admin LINE account
   */
  public async notifyAdmin(sessionId: string, message: string): Promise<void> {
    if (!this.isConfigured()) {
      console.warn("[LINE Service] Not configured. Missing Access Token or Admin ID.");
      return;
    }

    const shortId = sessionId.slice(0, 4).toUpperCase();

    // Generate a 14-day magic link for the default admin
    let token = "";
    try {
      const authRepo = new TursoAuthRepository();
      const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 14; // 14 days
      token = await authRepo.getOrCreateMagicLink("usr-admin-001", expiresAt);
    } catch (e) {
      console.error("[LINE Service] Failed to generate magic link:", e);
    }

    try {
      await this.client!.pushMessage({
        to: this.adminUserId!,
        messages: [
          {
            type: "text",
            text: `[💬 ลูกค้าใหม่]\nรหัสห้อง: ${shortId}\nข้อความ: ${message}\n\n👉 คลิกเพื่อตอบกลับ:\n${SITE.baseUrl}/admin/login?token=${token}&sessionId=${sessionId}`,
          },
        ],
      });
    } catch (error) {
      console.error("[LINE Service] Failed to notify admin:", error);
    }
  }

  /**
   * Push a generic system message to the Admin
   */
  public async pushMessageToAdmin(text: string): Promise<void> {
    if (!this.isConfigured()) return;
    try {
      await this.client!.pushMessage({
        to: this.adminUserId!,
        messages: [{ type: "text", text }],
      });
    } catch (error) {
      console.error("[LINE Service] Failed to push message:", error);
    }
  }

  /**
   * Helper to validate webhook signatures
   */
  public validateSignature(body: string, signature: string): boolean {
    const secret = process.env.LINE_CHANNEL_SECRET;
    if (!secret) return false;
    return line.validateSignature(body, secret, signature);
  }
}
