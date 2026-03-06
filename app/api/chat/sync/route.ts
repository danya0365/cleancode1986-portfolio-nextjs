import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/chat/sync?sessionId=xxx
 * Allows the web frontend to poll for new messages in a session.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session limit required" },
        { status: 400 }
      );
    }

    const chatRepo = new TursoChatRepository();
    const session = await chatRepo.getSession(sessionId);
    
    if (!session) {
      return NextResponse.json({ messages: [] });
    }

    const lastMessageAt = searchParams.get("lastMessageAt");
    const beforeDate = searchParams.get("before");

    let messages;

    if (lastMessageAt) {
      // Optimized Polling: Only fetch strictly new messages
      messages = await chatRepo.getNewMessages(sessionId, new Date(lastMessageAt), true);
    } else if (beforeDate) {
      // Infinite Scroll: Fetch older messages (e.g. limit 50)
      messages = await chatRepo.getMessagesBySession(sessionId, 50, new Date(beforeDate), true);
    } else {
      // Default: Initial load (latest 50)
      messages = await chatRepo.getMessagesBySession(sessionId, 50, undefined, true);
    }

    // Automatically mark non-user 'sent' messages as 'delivered' to the browser
    const undeliveredMessageIds = messages
      .filter((m) => m.role !== "user" && m.status === "sent")
      .map((m) => m.id);

    if (undeliveredMessageIds.length > 0) {
      await chatRepo.updateMessageStatus(undeliveredMessageIds, "delivered");
      
      // Update the payload so the frontend gets the correct state immediately
      messages = messages.map((m) => {
        if (undeliveredMessageIds.includes(m.id)) {
          return { ...m, status: "delivered" };
        }
        return m;
      });
    }

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("[Sync API Error]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
