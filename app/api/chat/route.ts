/**
 * Chat API Route
 * Handles chat messages and returns AI responses
 */

import { getKnowledgePrompt, getSimpleResponse } from "@/src/data/knowledge";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Try simple keyword-based response first
    const simpleResponse = getSimpleResponse(message);
    if (simpleResponse) {
      return NextResponse.json({ response: simpleResponse });
    }

    // Check if we have an AI API key configured
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const googleApiKey = process.env.GOOGLE_AI_API_KEY;

    if (openaiApiKey) {
      // Use OpenAI
      const response = await callOpenAI(message, openaiApiKey);
      return NextResponse.json({ response });
    } else if (googleApiKey) {
      // Use Google AI
      const response = await callGoogleAI(message, googleApiKey);
      return NextResponse.json({ response });
    }

    // Fallback: generate a generic helpful response
    const fallbackResponse = generateFallbackResponse(message);
    return NextResponse.json({ response: fallbackResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
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

  // More comprehensive fallback responses
  if (/ขอบคุณ|thank/i.test(lowerMessage)) {
    return "ยินดีครับ! หากมีคำถามเพิ่มเติม สามารถถามได้เลยครับ 😊";
  }

  if (/bye|ลา|บ๊ายบาย/i.test(lowerMessage)) {
    return "ลาก่อนครับ! หากต้องการความช่วยเหลือ กลับมาได้เสมอครับ 👋";
  }

  if (/ช่วย|help/i.test(lowerMessage)) {
    return "ผมช่วยได้หลายเรื่องครับ เช่น:\n• ข้อมูลบริการของเรา\n• ดูผลงานที่ผ่านมา\n• ข้อมูลติดต่อ\n• ราคาและแพ็คเกจ\n\nลองถามมาได้เลยครับ!";
  }

  // Default response
  return `ขอบคุณสำหรับคำถามครับ ผมเข้าใจว่าคุณต้องการทราบเกี่ยวกับ "${message.slice(0, 50)}..." 

สำหรับคำถามนี้ แนะนำให้ติดต่อทีมงานโดยตรงที่:
📧 contact@cleancode1986.com
📞 +66 81 234 5678

หรือกรอกฟอร์มที่หน้า Contact ครับ`;
}
