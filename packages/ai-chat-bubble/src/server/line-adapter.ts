// import { messagingApi } from "@line/bot-sdk";

export interface IPluginNotificationService {
  notifyAdmin(message: string, sessionId?: string, customerName?: string): Promise<void>;
}

export class LineMessagingAdapter implements IPluginNotificationService {
  // private client: messagingApi.MessagingApiClient;
  private adminUserId: string;
  private appDomain: string;

  constructor(
    channelAccessToken?: string,
    adminUserId?: string,
    appDomain?: string
  ) {
    const token = channelAccessToken || process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const admin = adminUserId || process.env.LINE_ADMIN_USER_ID;
    const domain = appDomain || process.env.NEXT_PUBLIC_APP_URL || "https://example.com";

    if (!token || !admin) {
      throw new Error("LineMessagingAdapter requires LINE_CHANNEL_ACCESS_TOKEN and LINE_ADMIN_USER_ID");
    }

    // this.client = new messagingApi.MessagingApiClient({ channelAccessToken: token });
    this.adminUserId = admin;
    this.appDomain = domain;
  }

  private generateAdminLink(sessionId: string): string {
    return `${this.appDomain}/admin/chat?sessionId=${sessionId}`;
  }

  async notifyAdmin(
    message: string,
    sessionId?: string,
    customerName?: string
  ): Promise<void> {
    try {
      let text = "[New Chat Message]\n\n";

      if (customerName) {
        text += `From: ${customerName}\n`;
      }
      text += `"${message}"`;

      if (sessionId) {
        text += `\n\n💬 คลิกเพื่อตอบกลับ 👉 ${this.generateAdminLink(sessionId)}`;
      }

      // await this.client.pushMessage({
      //   to: this.adminUserId,
      //   messages: [{ type: "text", text }],
      // });
      console.log("LINE Notification Mock sent successfully");
    } catch (error) {
      console.error("Failed to push LINE message to admin:", error);
    }
  }
}
