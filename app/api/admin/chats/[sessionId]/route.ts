import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const chatRepo = new TursoChatRepository();
    
    const searchParams = request.nextUrl.searchParams;
    const lastMessageAt = searchParams.get("lastMessageAt");
    const beforeDate = searchParams.get("before");

    let messages;

    if (lastMessageAt) {
      messages = await chatRepo.getNewMessages(sessionId, new Date(lastMessageAt));
    } else if (beforeDate) {
      messages = await chatRepo.getMessagesBySession(sessionId, 50, new Date(beforeDate));
    } else {
      messages = await chatRepo.getMessagesBySession(sessionId, 50);
    }
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error(`Admin chat messages error for session:`, error);
    return NextResponse.json({ error: "Failed to load messages" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
     const { sessionId } = await params;
     const { message } = await request.json();

     if (!message) {
       return NextResponse.json({ error: "Message is required" }, { status: 400 });
     }

     const chatRepo = new TursoChatRepository();
     
     // Automatic Handover: Turn off auto-reply when admin replies
     await chatRepo.toggleAutoReply(sessionId, false);
     
     // Save admin reply to database
     const newMessage = await chatRepo.addMessage(sessionId, "admin", message);

     return NextResponse.json({ message: newMessage });
  } catch (error) {
    console.error(`Admin chat reply error for session:`, error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
