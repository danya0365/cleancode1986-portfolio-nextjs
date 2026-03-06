/**
 * Chat Store - Zustand store for AI Chat functionality
 */

import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "admin";
  content: string;
  timestamp: Date;
}

interface ChatState {
  sessionId: string;
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
  setMessages: (messages: ChatMessage[]) => void;
  sendMessage: (content: string) => Promise<void>;
  syncMessages: () => Promise<void>;
  clearMessages: () => void;
  setError: (error: string | null) => void;

}

type ChatStore = ChatState & ChatActions;

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      // State
      sessionId: uuidv4(),
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

  setMessages: (messages) => set({ messages }),

  clearMessages: () => set({ messages: [] }),
  setError: (error) => set({ error }),

  sendMessage: async (content: string) => {
    const { addMessage, sessionId } = get();

    // Add user message immediately
    addMessage({ role: "user", content });
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, sessionId }),
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
        content: "ขออภัยครับ เกิดข้อผิดพลาด ไม่สามารถส่งข้อความได้",
      });
    } finally {
      set({ isLoading: false });
    }
  },

  syncMessages: async () => {
    const { sessionId, messages, setMessages } = get();
    try {
      const response = await fetch(`/api/chat/sync?sessionId=${sessionId}`);
      if (!response.ok) return;

      const data = await response.json();
      if (data.messages && data.messages.length > 0) {
        // Only update if the number of messages actually changed 
        // (this is a simplified check. A deeper equality check is better in prod, 
        // but checking length prevents unnecessary re-renders)
        if (data.messages.length !== messages.length) {
          const formattedMessages = data.messages.map((m: Omit<ChatMessage, "timestamp"> & { createdAt: string }) => ({
             id: m.id,
             role: m.role,
             content: m.content,
             timestamp: new Date(m.createdAt),
          }));
          setMessages(formattedMessages);
        }
      }
    } catch (error) {
      console.error("Failed to sync chat messages", error);
    }
  },
    }),
    {
      name: "cleancode-chat-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        sessionId: state.sessionId, 
        messages: state.messages 
      }), // only persist sessionId and history
    }
  )
);
