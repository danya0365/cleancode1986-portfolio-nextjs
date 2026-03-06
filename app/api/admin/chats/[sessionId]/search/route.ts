import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ error: "Search query 'q' is required" }, { status: 400 });
    }

    const chatRepo = new TursoChatRepository();
    const messages = await chatRepo.searchMessages(sessionId, query);
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error(`Admin chat search error for session:`, error);
    return NextResponse.json({ error: "Failed to search messages" }, { status: 500 });
  }
}
