import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ChatMessageType } from "../types";

export interface CustomerInfo {
  name: string;
  phone: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessageType[];
  isLoading: boolean;
  sessionId: string | null;
  customerInfo: CustomerInfo | null;
  error: string | null;
  hasMoreHistory: boolean;
  apiEndpoint: string;
}

export interface ChatActions {
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  setSessionId: (id: string | null) => void;
  setCustomerInfo: (info: CustomerInfo | null) => void;
  addMessage: (message: Omit<ChatMessageType, "id" | "timestamp">) => void;
  setMessages: (messages: ChatMessageType[]) => void;
  clearHistory: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  
  // Async actions wrapper
  registerCustomer: (name: string, phone: string) => Promise<boolean>;
  sendMessage: (content: string) => Promise<void>;
  syncMessages: () => Promise<void>;
  loadMoreHistory: () => Promise<void>;
  markAsRead: () => Promise<void>;
}

export type ChatStore = ChatState & ChatActions;

export const createChatStore = (apiEndpoint: string = "/api/chat") => {
  return create<ChatStore>()(
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
        apiEndpoint,

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
                id: ("id" in message && typeof message.id === "string") ? message.id : uuidv4(),
                timestamp: new Date().toISOString(),
              },
            ],
          })),

        registerCustomer: async (name, phone) => {
          set({ isLoading: true, error: null });
          try {
            const res = await fetch(`${get().apiEndpoint}/init`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, phone }),
            });
            
            if (!res.ok) throw new Error("Registration failed");
            
            const data = await res.json();
            const parsedMessages = (data.history || []).map((m: any) => ({
                id: m.id || uuidv4(),
                role: m.role,
                content: m.content || "",
                status: m.status,
                isDraft: m.isDraft,
                timestamp: m.createdAt || new Date().toISOString()
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
          const { addMessage, sessionId, apiEndpoint } = get();
          if (!sessionId) return;
          
          const messageId = uuidv4();
          addMessage({ role: "user", content, status: "sending" });
          set({ isLoading: true, error: null });

          try {
            const response = await fetch(apiEndpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: content, sessionId, messageId }),
            });

            if (!response.ok) {
              throw new Error("Failed to get response");
            }

            // Mark user message as sent
            set((state) => ({
              messages: state.messages.map(m => m.id === messageId ? { ...m, status: "sent" } : m)
            }));

            const data = await response.json();
            if (!data.ack && data.response) {
              addMessage({ role: "assistant", content: data.response, status: "sent" });
            }
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "เกิดข้อผิดพลาด กรุณาลองใหม่";
            set({ error: errorMessage });
            addMessage({
              role: "assistant",
              content: "ขออภัยครับ เกิดข้อผิดพลาด ไม่สามารถส่งข้อความได้"
            });
          } finally {
            set({ isLoading: false });
          }
        },

        syncMessages: async () => {
          const { sessionId, messages, setMessages, apiEndpoint } = get();
          if (!sessionId) return;
          
          try {
            const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
            let queryParam = '';
            if (lastMessage) {
              const timestamp = lastMessage.timestamp instanceof Date 
                  ? lastMessage.timestamp 
                  : new Date(lastMessage.timestamp);
              queryParam = `?lastMessageAt=${timestamp.toISOString()}`;
            }
            
            const response = await fetch(`${apiEndpoint}/sync?sessionId=${sessionId}${queryParam ? '&' + queryParam.substring(1) : ''}`);
            if (!response.ok) return;

            const data = await response.json();
            if (data.messages && data.messages.length > 0) {
              const newParsedMessages = data.messages.map((m: any) => ({
                  id: m.id || uuidv4(),
                  role: m.role,
                  content: m.content || "",
                  status: m.status,
                  isDraft: m.isDraft,
                  timestamp: m.createdAt || new Date().toISOString(),
              }));
              
              if (lastMessage) {
                 const existingIds = new Set(messages.map(m => m.id));
                 const strictlyNewMessages = newParsedMessages.filter((m: any) => !existingIds.has(m.id));
                 if (strictlyNewMessages.length > 0) {
                   setMessages([...messages, ...strictlyNewMessages]);
                 }
              } else {
                 setMessages(newParsedMessages);
                 set({ hasMoreHistory: newParsedMessages.length >= 50 });
              }
            }
          } catch (error) {
            console.error("Failed to sync messages:", error);
          }
        },

        loadMoreHistory: async () => {
          const { sessionId, messages, isLoading, apiEndpoint } = get();
          if (!sessionId || messages.length === 0 || isLoading) return;

          set({ isLoading: true });
          
          try {
            const firstMessage = messages[0];
            const timestamp = firstMessage.timestamp instanceof Date
                ? firstMessage.timestamp
                : new Date(firstMessage.timestamp);
                
            const response = await fetch(`${apiEndpoint}/sync?sessionId=${sessionId}&before=${timestamp.toISOString()}`);
            
            if (!response.ok) throw new Error("Failed to load history");

            const data = await response.json();
            if (data.messages && data.messages.length > 0) {
              const olderMessages = data.messages.map((m: any) => ({
                  id: m.id || uuidv4(),
                  role: m.role,
                  content: m.content || "",
                  status: m.status,
                  isDraft: m.isDraft,
                  timestamp: m.createdAt || new Date().toISOString(),
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

        markAsRead: async () => {
          const { sessionId, apiEndpoint } = get();
          if (!sessionId) return;
          
          set((state) => ({
            messages: state.messages.map(m => m.role !== "user" && m.status !== "read" 
              ? { ...m, status: "read" } 
              : m)
          }));

          try {
            await fetch(`${apiEndpoint}/${sessionId}/read`, { method: "POST" });
          } catch (error) {
             console.error("Failed to mark messages as read", error);
          }
        },
      }),
      {
        name: "ai-chat-bubble-storage",
        partialize: (state) => ({ 
          sessionId: state.sessionId, 
          messages: state.messages,
          customerInfo: state.customerInfo 
        }),
      }
    )
  );
};
