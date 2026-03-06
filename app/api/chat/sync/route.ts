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
      messages = await chatRepo.getNewMessages(sessionId, new Date(lastMessageAt));
    } else if (beforeDate) {
      // Infinite Scroll: Fetch older messages (e.g. limit 50)
      messages = await chatRepo.getMessagesBySession(sessionId, 50, new Date(beforeDate));
    } else {
      // Default: Initial load (latest 50)
      messages = await chatRepo.getMessagesBySession(sessionId, 50);
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
