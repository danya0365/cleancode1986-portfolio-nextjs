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

    const messages = await chatRepo.getMessagesBySession(sessionId);

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("[Sync API Error]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
