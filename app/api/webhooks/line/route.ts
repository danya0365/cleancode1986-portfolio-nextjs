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

        // Parse Session ID & Message
        let sessionId = "";
        let adminContent = "";

        // 1. Check for specific session short ID command (e.g. !8a36 สวัสดีครับ)
        const specificMatch = replyText.match(/^!([A-Za-z0-9_-]{4,8})\s+([\s\S]+)$/i);
        
        // 2. Check for "reply to latest" command (e.g. ตอบ สวัสดี, > สวัสดี, . สวัสดี)
        const latestMatch = replyText.match(/^(ตอบ|>|\.|!)\s+([\s\S]+)$/i);

        if (specificMatch) {
           const shortId = specificMatch[1];
           adminContent = specificMatch[2];
           
           const session = await chatRepo.getSessionByShortId(shortId);
           if (session) {
             sessionId = session.id;
           } else {
             await lineService.pushMessageToAdmin(`❌ ไม่พบแชทที่ขึ้นต้นด้วยรหัส "${shortId}" หรือแชทถูกปิดไปแล้ว`);
             continue;
           }
        } else if (latestMatch) {
           adminContent = latestMatch[2];
           
           const session = await chatRepo.getLatestActiveSession();
           if (session) {
             sessionId = session.id;
           } else {
             await lineService.pushMessageToAdmin(`❌ ไม่มีแชทใดที่กำลัง Active อยู่ในขณะนี้`);
             continue;
           }
        } else {
           console.log("[LINE Webhook] Received message without recognized reply format:", replyText);
           continue; 
        }

        // Save Admin reply to DB
        await chatRepo.addMessage(sessionId, "admin", adminContent);
        console.log(`[LINE Webhook] Saved admin reply for session ${sessionId.slice(0, 8)}`);
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
