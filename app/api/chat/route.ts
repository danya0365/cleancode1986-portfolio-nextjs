import { getKnowledgePrompt, getSimpleResponse } from "@/src/data/knowledge";
import { TursoChatRepository } from "@/src/infrastructure/repositories/turso/TursoChatRepository";
import { LineMessagingService } from "@/src/infrastructure/services/LineMessagingService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, messageId } = await request.json();

    if (!message || typeof message !== "string" || !sessionId) {
      return NextResponse.json(
        { error: "Message and sessionId are required" },
        { status: 400 }
      );
    }

    const chatRepo = new TursoChatRepository();
    const lineService = new LineMessagingService();

    // Ensure session exists
    const existingSession = await chatRepo.getSession(sessionId);
    if (!existingSession) {
      await chatRepo.createSession(sessionId);
    }

    // Save user message
    await chatRepo.addMessage(sessionId, "user", message, messageId);

    // Notify Admin via LINE
    await lineService.notifyAdmin(sessionId, message);

    // Ensure we have the session state to check for autoReply config
    const session = await chatRepo.getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    // Try simple keyword-based response first
    const simpleResponse = getSimpleResponse(message);
    if (simpleResponse) {
      if (session.autoReply) {
        const responseMsg = await chatRepo.addMessage(sessionId, "assistant", simpleResponse, undefined, false);
        return NextResponse.json({ response: simpleResponse, responseId: responseMsg.id });
      } else {
        await chatRepo.addMessage(sessionId, "assistant", simpleResponse, undefined, true);
        return NextResponse.json({ ack: true });
      }
    }

    // Check if we have an AI API key configured
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const googleApiKey = process.env.GOOGLE_AI_API_KEY;

    let aiResponseText = "";

    if (openaiApiKey) {
      // Use OpenAI
      aiResponseText = await callOpenAI(message, openaiApiKey);
    } else if (googleApiKey) {
      // Use Google AI
      aiResponseText = await callGoogleAI(message, googleApiKey);
    } else {
      // Fallback
      aiResponseText = generateFallbackResponse(message);
    }

    // Save AI response to database
    if (session.autoReply) {
      const aiMessage = await chatRepo.addMessage(sessionId, "assistant", aiResponseText, undefined, false);
      return NextResponse.json({ response: aiResponseText, responseId: aiMessage.id });
    } else {
      // AI Draft Suggestions Mode (Handover)
      await chatRepo.addMessage(sessionId, "assistant", aiResponseText, undefined, true);
      // Return empty response so frontend doesn't show it to the customer
      return NextResponse.json({ ack: true });
    }
  } catch (error) {
    console.error("Chat API error:", error);
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to process message: " + errMessage },
      { status: 500 }
    );
  }
}

async function callOpenAI(message: string, apiKey: string): Promise<string> {
  const knowledgePrompt = getKnowledgePrompt();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: knowledgePrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error("OpenAI API error");
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "ขออภัยครับ ไม่สามารถตอบได้";
}

async function callGoogleAI(message: string, apiKey: string): Promise<string> {
  const knowledgePrompt = getKnowledgePrompt();

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${knowledgePrompt}\n\nผู้ใช้ถาม: ${message}`,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Google AI API error");
  }

  const data = await response.json();
  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "ขออภัยครับ ไม่สามารถตอบได้"
  );
}

function generateFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (/ขอบคุณ|thank/i.test(lowerMessage)) {
    return "ยินดีครับ! แอดมินจะรีบตรวจสอบและตอบกลับให้เร็วที่สุดครับ";
  }

  if (/bye|ลาก่อน|บ๊ายบาย|ไปแล้วนะ/i.test(lowerMessage)) {
    return "ขอบคุณที่ติดต่อมาครับ แอดมินจะรีบตอบกลับโดยเร็วที่สุด";
  }

  return "ได้รับข้อความแล้วครับ แอดมินจะรีบตรวจสอบและตอบกลับให้เร็วที่สุดครับ ⚡";
}
