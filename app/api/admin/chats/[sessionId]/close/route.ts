import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
     const { sessionId } = await params;

     const chatRepo = new TursoChatRepository();
     await chatRepo.updateSessionStatus(sessionId, "resolved");

     return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Admin chat close error for session:`, error);
    return NextResponse.json({ error: "Failed to close session" }, { status: 500 });
  }
}
