import { NextRequest, NextResponse } from "next/server";
import { ChatMessageType } from "../types";
import { IPluginNotificationService } from "./line-adapter";
import { IPluginChatRepository } from "./turso-adapter";

export { LineMessagingAdapter } from "./line-adapter";
export type { IPluginNotificationService } from "./line-adapter";
export { TursoAdapter } from "./turso-adapter";
export type { IPluginChatRepository } from "./turso-adapter";

export interface CreateChatAPIOptions {
  repository: IPluginChatRepository;
  notifier?: IPluginNotificationService;
  aiHandler?: (message: string, history: ChatMessageType[]) => Promise<string | null>;
}

export function createChatAPI(options: CreateChatAPIOptions) {
  const { repository, notifier, aiHandler } = options;

  async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Handle /api/chat/sync
    if (pathname.endsWith("/sync")) {
      const sessionId = url.searchParams.get("sessionId");
      if (!sessionId) return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });

      const lastMessageAt = url.searchParams.get("lastMessageAt") || undefined;
      const before = url.searchParams.get("before") || undefined;

      try {
        const messages = await repository.syncMessages(sessionId, lastMessageAt, before);
        return NextResponse.json({ messages });
      } catch (error) {
        console.error("Plugin API sync error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
      }
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  async function POST(req: NextRequest) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Handle /api/chat/init
    if (pathname.endsWith("/init")) {
      try {
        const { name, phone } = await req.json();
        if (!name || !phone) return NextResponse.json({ error: "Missing details" }, { status: 400 });

        const sessionData = await repository.initSession(name, phone);
        return NextResponse.json(sessionData);
      } catch (error) {
        console.error("Plugin API init error:", error);
        return NextResponse.json({ error: "Initialization failed" }, { status: 500 });
      }
    }

    // Handle /api/chat/[sessionId]/read
    if (pathname.match(/\/chat\/([a-zA-Z0-9-]+)\/read$/)) {
       const sessionId = pathname.split('/').slice(-2)[0];
       try {
         await repository.markAsRead(sessionId);
         return NextResponse.json({ success: true });
       } catch (error) {
         return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 });
       }
    }

    // Handle standard /api/chat
    try {
      const { message, sessionId, messageId } = await req.json();
      if (!sessionId || !message) {
        return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
      }

      // 1. Save User Message
      await repository.saveMessage(sessionId, {
        id: messageId || crypto.randomUUID(),
        role: "user",
        content: message,
        status: "sent"
      });

      let aiResponse: string | null = null;

      // 2. Call AI logic if provided
      if (aiHandler) {
        const history = await repository.syncMessages(sessionId);
        aiResponse = await aiHandler(message, history);
        
        if (aiResponse) {
          await repository.saveMessage(sessionId, {
             id: crypto.randomUUID(),
             role: "assistant",
             content: aiResponse,
             status: "sent",
             isDraft: false // Simplification: plugin assumes auto-reply for now, could be extended
          });
        }
      }

      // 3. Notify Admin
      if (notifier) {
         // Optionally fetch customer info to enrich notification, skipped for brevity in generic plugin
         await notifier.notifyAdmin(message, sessionId);
      }

      return NextResponse.json({ 
        ack: !aiResponse, 
        response: aiResponse 
      });

    } catch (error) {
       console.error("Plugin API message loop error:", error);
       return NextResponse.json({ error: "Message processing failed" }, { status: 500 });
    }
  }

  return { GET, POST };
}
