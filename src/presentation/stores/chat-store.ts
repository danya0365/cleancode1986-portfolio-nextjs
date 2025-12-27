/**
 * Chat Store - Zustand store for AI Chat functionality
 */

import { create } from "zustand";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

interface ChatActions {
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  setError: (error: string | null) => void;
}

type ChatStore = ChatState & ChatActions;

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useChatStore = create<ChatStore>((set, get) => ({
  // State
  messages: [],
  isOpen: false,
  isLoading: false,
  error: null,

  // Actions
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: generateId(),
          timestamp: new Date(),
        },
      ],
    })),

  clearMessages: () => set({ messages: [] }),
  setError: (error) => set({ error }),

  sendMessage: async (content: string) => {
    const { addMessage } = get();

    // Add user message
    addMessage({ role: "user", content });
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      addMessage({ role: "assistant", content: data.response });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "เกิดข้อผิดพลาด กรุณาลองใหม่";
      set({ error: errorMessage });
      addMessage({
        role: "assistant",
        content: "ขออภัยครับ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งครับ",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
