import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { LineMessagingService } from "@/src/infrastructure/services/LineMessagingService";
import { TextEventMessage, WebhookEvent } from "@line/bot-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-line-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const lineService = new LineMessagingService();
    
    // Verify signature
    if (!lineService.validateSignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const events: WebhookEvent[] = body.events;

    const chatRepo = new TursoChatRepository();

    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const textMessage = event.message as TextEventMessage;
        const replyText = textMessage.text;

        // Parse Session ID: We expect the admin to reply with the Session ID prefix
        // e.g. "Reply to test-session: Hello there!"
        // For simplicity in Option 3, if the admin is replying, they could quote the message or we can do a command:
        // "!reply <sessionId> <message>" 
        // Let's implement a simple parsing: if message starts with "!r sessionId", treat it as reply.
        
        let sessionId = "";
        let adminContent = replyText;

        const match = replyText.match(/^!r\s+([A-Za-z0-9_-]+)\s+([\s\S]+)$/i);
        
        if (match) {
           sessionId = match[1];
           adminContent = match[2];
        } else {
           // If we don't have a specific session ID command, we might fallback to the latest active session.
           // However, for exactly targeting the user, the !r command is safer. 
           // In a real production system, quoting the user's message and extracting the ID from it is better,
           // but requires maintaining mappings. We'll stick to the !r command for now.
           console.log("[LINE Webhook] Received message without explicit session ID routing:", replyText);
           continue; 
        }

        // Save Admin reply to DB
        await chatRepo.addMessage(sessionId, "admin", adminContent);
        console.log(`[LINE Webhook] Saved admin reply for session ${sessionId}`);
      }
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("[LINE Webhook Error]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
