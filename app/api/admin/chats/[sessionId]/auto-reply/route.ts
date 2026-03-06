import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
     const { sessionId } = await params;
     const { autoReply } = await request.json();

     if (typeof autoReply !== "boolean") {
       return NextResponse.json({ error: "autoReply boolean is required" }, { status: 400 });
     }

     const chatRepo = new TursoChatRepository();
     await chatRepo.toggleAutoReply(sessionId, autoReply);

     return NextResponse.json({ success: true, autoReply });
  } catch (error) {
    console.error(`Toggle Auto Reply error:`, error);
    return NextResponse.json({ error: "Failed to toggle Auto Reply" }, { status: 500 });
  }
}
