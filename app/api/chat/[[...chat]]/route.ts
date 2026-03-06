import { createChatAPI, LineMessagingAdapter, TursoAdapter } from "@cleancode1986/ai-chat-bubble/server";

export const { GET, POST } = createChatAPI({
  repository: new TursoAdapter(process.env.TURSO_DATABASE_URL, process.env.TURSO_AUTH_TOKEN),
  notifier: new LineMessagingAdapter(
    process.env.LINE_CHANNEL_ACCESS_TOKEN,
    process.env.LINE_ADMIN_USER_ID,
    process.env.NEXT_PUBLIC_APP_URL || "https://ai.cleancode1986.com"
  ),
  aiHandler: async (_message: string, _history: unknown[]) => {
      // Proxy the request to the existing AI logic (previously in this file)
      // Since this is generic, we can implement custom AI routes here, 
      // but for now, we'll keep a mock or basic implementation until we re-wire OpenAI
      return "Hello! I am the new Plugin Architecture Assistant.";
  }
});
