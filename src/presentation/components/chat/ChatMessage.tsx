"use client";

/**
 * Chat Message Component
 */

import { ChatMessage as ChatMessageType } from "@/src/presentation/stores/chat-store";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`chat-message ${isAssistant ? "chat-message--assistant" : "chat-message--user"}`}
    >
      <div className="chat-message__avatar">
        {isAssistant ? (
          <Bot className="chat-message__icon" />
        ) : (
          <User className="chat-message__icon" />
        )}
      </div>
      <div className="chat-message__content">
        <p className="chat-message__text">{message.content}</p>
        <span className="chat-message__time">
          {message.timestamp.toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
