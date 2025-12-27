"use client";

/**
 * AI Chat Bubble Component
 * Floating chat bubble that appears on all pages
 */

import { useChatStore } from "@/src/presentation/stores/chat-store";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./ChatMessage";

export function AIChatBubble() {
  const {
    messages,
    isOpen,
    isLoading,
    toggleChat,
    sendMessage,
  } = useChatStore();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput("");
    await sendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="ai-chat">
      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat__window">
          {/* Header */}
          <div className="ai-chat__header">
            <div className="ai-chat__header-info">
              <div className="ai-chat__header-avatar">
                <Bot className="ai-chat__header-icon" />
              </div>
              <div className="ai-chat__header-text">
                <h3 className="ai-chat__header-title">Clean Assistant</h3>
                <span className="ai-chat__header-status">
                  เลขาส่วนตัวของคุณ
                </span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="ai-chat__close-btn"
              aria-label="ปิดแชท"
            >
              <X className="ai-chat__close-icon" />
            </button>
          </div>

          {/* Messages */}
          <div className="ai-chat__messages">
            {messages.length === 0 ? (
              <div className="ai-chat__welcome">
                <div className="ai-chat__welcome-avatar">
                  <Bot className="ai-chat__welcome-icon" />
                </div>
                <h4 className="ai-chat__welcome-title">สวัสดีครับ! 👋</h4>
                <p className="ai-chat__welcome-text">
                  ผม Clean Assistant เลขาส่วนตัวของ Clean Code 1986 ครับ
                  <br />
                  ยินดีช่วยเหลือเรื่องบริการ โปรเจค หรือข้อมูลอื่นๆ ครับ
                </p>
                <div className="ai-chat__suggestions">
                  <button
                    onClick={() => sendMessage("มีบริการอะไรบ้าง?")}
                    className="ai-chat__suggestion-btn"
                  >
                    🛠️ ดูบริการ
                  </button>
                  <button
                    onClick={() => sendMessage("ดูผลงานล่าสุด")}
                    className="ai-chat__suggestion-btn"
                  >
                    📁 ดูผลงาน
                  </button>
                  <button
                    onClick={() => sendMessage("ติดต่อได้อย่างไร?")}
                    className="ai-chat__suggestion-btn"
                  >
                    📞 ติดต่อเรา
                  </button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="ai-chat__loading">
                    <Loader2 className="ai-chat__loading-icon" />
                    <span>กำลังพิมพ์...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="ai-chat__form">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="พิมพ์ข้อความ..."
              className="ai-chat__input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ai-chat__send-btn"
              disabled={!input.trim() || isLoading}
              aria-label="ส่งข้อความ"
            >
              <Send className="ai-chat__send-icon" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`ai-chat__bubble ${isOpen ? "ai-chat__bubble--open" : ""}`}
        aria-label={isOpen ? "ปิดแชท" : "เปิดแชท"}
      >
        {isOpen ? (
          <X className="ai-chat__bubble-icon" />
        ) : (
          <MessageCircle className="ai-chat__bubble-icon" />
        )}
      </button>
    </div>
  );
}
