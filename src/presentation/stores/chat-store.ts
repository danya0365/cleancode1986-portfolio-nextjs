import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system" | "admin";
  content: string;
  timestamp: Date;
}

export interface CustomerInfo {
  name: string;
  phone: string;
}

interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  sessionId: string | null;
  customerInfo: CustomerInfo | null;
  error: string | null;
  hasMoreHistory: boolean;
}

interface ChatActions {
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  setSessionId: (id: string | null) => void;
  setCustomerInfo: (info: CustomerInfo | null) => void;
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => void;
  setMessages: (messages: ChatMessage[]) => void;
  clearHistory: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  
  // Async actions
  registerCustomer: (name: string, phone: string) => Promise<boolean>;
  sendMessage: (content: string) => Promise<void>;
  syncMessages: () => Promise<void>;
  loadMoreHistory: () => Promise<void>;
}

type ChatStore = ChatState & ChatActions;

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      // State
      isOpen: false,
      messages: [],
      isLoading: false,
      sessionId: null,
      customerInfo: null,
      error: null,
      hasMoreHistory: false,

      // Actions
      toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
      openChat: () => set({ isOpen: true }),
      closeChat: () => set({ isOpen: false }),
      setSessionId: (id) => set({ sessionId: id }),
      setCustomerInfo: (info) => set({ customerInfo: info }),
      setMessages: (messages) => set({ messages }),
      clearHistory: () => set({ messages: [], sessionId: null, customerInfo: null, error: null, hasMoreHistory: false }),
      setError: (error) => set({ error }),
      setLoading: (loading) => set({ isLoading: loading }),

      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              ...message,
              id: uuidv4(),
              timestamp: new Date(),
            },
          ],
        })),

      registerCustomer: async (name, phone) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch("/api/chat/init", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone }),
          });
          
          if (!res.ok) throw new Error("Registration failed");
          
          const data = await res.json();
          const parsedMessages = (data.history || []).map((m: Record<string, unknown>) => ({
              id: (m.id as string) || uuidv4(),
              role: m.role as "user" | "assistant" | "system" | "admin",
              content: m.content as string,
              timestamp: new Date()
          }));
          
          set({
            sessionId: data.sessionId,
            customerInfo: data.customerAuth,
            messages: parsedMessages,
            hasMoreHistory: parsedMessages.length >= 50,
          });
          return true;
        } catch (error) {
          console.error("Failed to register customer:", error);
          set({ error: "ไม่สามารถยืนยันตัวตนได้ กรุณาลองใหม่" });
          return false;
        } finally {
          set({ isLoading: false });
        }
      },

      sendMessage: async (content: string) => {
        const { addMessage, sessionId } = get();
        if (!sessionId) return;

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
          const errorMessage = error instanceof Error ? error.message : "เกิดข้อผิดพลาด กรุณาลองใหม่";
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
        if (!sessionId) return;
        
        try {
          // Optimized Polling: Only fetch strictly new messages
          const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
          const queryParam = lastMessage ? `?lastMessageAt=${lastMessage.timestamp.toISOString()}` : '';
          
          const response = await fetch(`/api/chat/sync?sessionId=${sessionId}${queryParam ? '&' + queryParam.substring(1) : ''}`);
          if (!response.ok) return;

          const data = await response.json();
          if (data.messages && data.messages.length > 0) {
            const newParsedMessages = data.messages.map((m: Record<string, unknown>) => ({
                id: (m.id as string) || uuidv4(),
                role: m.role === "admin" ? "assistant" : (m.role as "user" | "assistant" | "system" | "admin"),
                content: m.content as string,
                timestamp: new Date((m.createdAt as string) || Date.now()),
            }));
            
            if (lastMessage) {
               // Append strictly new messages
               setMessages([...messages, ...newParsedMessages]);
            } else {
               // Initial load sync
               setMessages(newParsedMessages);
               set({ hasMoreHistory: newParsedMessages.length >= 50 });
            }
          }
        } catch (error) {
          console.error("Failed to sync messages:", error);
        }
      },

      loadMoreHistory: async () => {
        const { sessionId, messages, isLoading } = get();
        if (!sessionId || messages.length === 0 || isLoading) return;

        set({ isLoading: true });
        
        try {
          const firstMessage = messages[0];
          const response = await fetch(`/api/chat/sync?sessionId=${sessionId}&before=${firstMessage.timestamp.toISOString()}`);
          
          if (!response.ok) throw new Error("Failed to load history");

          const data = await response.json();
          if (data.messages && data.messages.length > 0) {
            const olderMessages = data.messages.map((m: Record<string, unknown>) => ({
                id: (m.id as string) || uuidv4(),
                role: m.role === "admin" ? "assistant" : (m.role as "user" | "assistant" | "system" | "admin"),
                content: m.content as string,
                timestamp: new Date((m.createdAt as string) || Date.now()),
            }));
            
            set({ 
              messages: [...olderMessages, ...messages],
              hasMoreHistory: olderMessages.length >= 50 
            });
          } else {
            set({ hasMoreHistory: false });
          }
        } catch (error) {
          console.error("Failed to load more history:", error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "clean-code-chat-storage",
      partialize: (state) => ({ 
        sessionId: state.sessionId, 
        messages: state.messages,
        customerInfo: state.customerInfo 
      }),
    }
  )
);
