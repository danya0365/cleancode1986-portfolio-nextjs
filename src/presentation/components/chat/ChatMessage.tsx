"use client";

/**
 * Chat Message Component
 */

import { ChatMessage as ChatMessageType } from "@/src/presentation/stores/chat-store";
import { Bot, ShieldCheck, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";
  const isAdmin = message.role === "admin";
  const isBotOrAdmin = isAssistant || isAdmin;

  return (
    <div
      className={`chat-message ${isBotOrAdmin ? "chat-message--assistant" : "chat-message--user"} ${
        isAdmin ? "border-l-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" : ""
      }`}
    >
      <div className="chat-message__avatar">
        {isAdmin ? (
          <ShieldCheck className="chat-message__icon text-indigo-500" />
        ) : isAssistant ? (
          <Bot className="chat-message__icon" />
        ) : (
          <User className="chat-message__icon" />
        )}
      </div>
      <div className="chat-message__content">
        {isAdmin && <span className="text-xs font-bold text-indigo-500 mb-1 block">CEO | Human Staff</span>}
        <p className="chat-message__text">{message.content}</p>
        <span className="chat-message__time">
          {new Date(message.timestamp).toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
