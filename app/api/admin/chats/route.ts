import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chatRepo = new TursoChatRepository();
    const sessions = await chatRepo.getAllSessionsWithLatestMessage();
    
    return NextResponse.json({ sessions });
  } catch (error) {
    console.error("Admin chats list error:", error);
    return NextResponse.json({ error: "Failed to load chats" }, { status: 500 });
  }
}
