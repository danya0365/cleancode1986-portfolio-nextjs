import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const chatRepo = new TursoChatRepository();
    
    // Fetch latest messages to find unseen Admin/Assistant ones
    const messages = await chatRepo.getMessagesBySession(sessionId, 100);
    
    const unreadIds = messages
      .filter((m) => m.role !== "user" && m.status !== "read")
      .map((m) => m.id);
      
    if (unreadIds.length > 0) {
      await chatRepo.updateMessageStatus(unreadIds, "read");
    }

    return NextResponse.json({ success: true, updatedCount: unreadIds.length });
  } catch (error) {
    console.error("[Read API Error]", error);
    return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 });
  }
}
