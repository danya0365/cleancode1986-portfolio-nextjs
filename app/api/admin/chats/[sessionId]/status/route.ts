import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const { status } = await request.json();

    if (!["new", "active", "follow_up", "resolved", "spam"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const chatRepo = new TursoChatRepository();
    await chatRepo.updateSessionStatus(sessionId, status as "new" | "active" | "follow_up" | "resolved" | "spam");

    return NextResponse.json({ success: true, status });
  } catch (error) {
    console.error("[Status API Error]", error);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
