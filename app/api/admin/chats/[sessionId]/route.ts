import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const chatRepo = new TursoChatRepository();
    
    // Fetch all messages for the selected session
    const messages = await chatRepo.getMessagesBySession(sessionId);
    
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
     
     // Save admin reply to database
     const newMessage = await chatRepo.addMessage(sessionId, "admin", message);

     return NextResponse.json({ message: newMessage });
  } catch (error) {
    console.error(`Admin chat reply error for session:`, error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
