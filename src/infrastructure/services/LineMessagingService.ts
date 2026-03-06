import * as line from "@line/bot-sdk";

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

    try {
      await this.client!.pushMessage({
        to: this.adminUserId!,
        messages: [
          {
            type: "text",
            text: `[💬 New Web Chat]\nSession: ${sessionId.slice(0, 8)}...\nUser: ${message}`,
          },
        ],
      });
    } catch (error) {
      console.error("[LINE Service] Failed to notify admin:", error);
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
