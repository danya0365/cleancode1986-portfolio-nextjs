import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

interface InitRequest {
  name: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    const { name, phone }: InitRequest = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone are required" },
        { status: 400 }
      );
    }

    const chatRepo = new TursoChatRepository();

    // 1. Check if an active session already exists for this phone number
    const existingSession = await chatRepo.getLatestSessionByPhone(phone);

    if (existingSession) {
      // Restore previous session (limit early history to 50 for performance)
      const history = await chatRepo.getMessagesBySession(existingSession.id, 50);
      
      return NextResponse.json({
        sessionId: existingSession.id,
        restored: true,
        history: history.map((msg) => ({
          id: msg.id,
          role: msg.role === "admin" ? "assistant" : msg.role, // Map Admin to Assistant for UI
          content: msg.content,
        })),
        customerAuth: {
          name: existingSession.customerName || name,
          phone: existingSession.customerPhone || phone,
        }
      });
    }

    // 2. Create a new session if none exists
    const newSessionId = uuidv4();
    await chatRepo.createSession(newSessionId, name, phone);

    return NextResponse.json({
      sessionId: newSessionId,
      restored: false,
      history: [],
      customerAuth: {
        name,
        phone,
      }
    });

  } catch (error) {
    console.error("Error in /api/chat/init:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
