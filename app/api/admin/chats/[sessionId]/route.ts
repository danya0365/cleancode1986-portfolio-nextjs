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
    
    // Auto-mark customer messages as read
    const unreadMessageIds = messages
      .filter((m) => m.role === "user" && m.status !== "read")
      .map((m) => m.id);

    if (unreadMessageIds.length > 0) {
      await chatRepo.updateMessageStatus(unreadMessageIds, "read");
      messages = messages.map((m) => {
        if (unreadMessageIds.includes(m.id)) {
          return { ...m, status: "read" };
        }
        return m;
      });
    }

    // Auto-update session status to active if it's currently new
    const session = await chatRepo.getSession(sessionId);
    if (session && session.status === "new") {
       await chatRepo.updateSessionStatus(sessionId, "active");
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
