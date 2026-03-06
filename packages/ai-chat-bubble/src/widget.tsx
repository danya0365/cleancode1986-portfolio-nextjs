"use client";

import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { AIChatBubble } from "./components/AIChatBubble";
import { createChatStore } from "./store/chat-store";

// --- Context Setup ---
export const ChatStoreContext = createContext<ReturnType<typeof createChatStore> | null>(null);

export interface ChatProviderProps {
  children: React.ReactNode;
  apiEndpoint?: string;
}

export function ChatProvider({ children, apiEndpoint = "/api/chat" }: ChatProviderProps) {
  const storeRef = useRef<ReturnType<typeof createChatStore>>();
  
  if (!storeRef.current) {
    storeRef.current = createChatStore(apiEndpoint);
  }

  return (
    <ChatStoreContext.Provider value={storeRef.current}>
      {children}
    </ChatStoreContext.Provider>
  );
}

// --- Hook Setup ---
export function useChat() {
  const store = useContext(ChatStoreContext);
  if (!store) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return useStore(store);
}

// --- Full Component Widget ---
export interface FullAIChatWidgetProps {
  apiEndpoint?: string;
}

function AIChatWidgetInternal() {
  const {
    messages,
    isOpen,
    isLoading,
    sessionId,
    customerInfo,
    error,
    toggleChat,
    sendMessage,
    syncMessages,
    registerCustomer,
    hasMoreHistory,
    loadMoreHistory,
    markAsRead
  } = useChat();

  const isRegistered = !!sessionId && !!customerInfo;

  return (
    <AIChatBubble
      isOpen={isOpen}
      messages={messages}
      isLoading={isLoading}
      isRegistered={isRegistered}
      hasMoreHistory={hasMoreHistory}
      customerName={customerInfo?.name}
      error={error}
      onToggleChat={toggleChat}
      onSendMessage={sendMessage}
      onRegister={registerCustomer}
      onLoadMoreHistory={loadMoreHistory}
      onMarkAsRead={markAsRead}
      onSyncMessages={syncMessages}
    />
  );
}

export function FullAIChatWidget({ apiEndpoint = "/api/chat" }: FullAIChatWidgetProps) {
  return (
    <ChatProvider apiEndpoint={apiEndpoint}>
      <AIChatWidgetInternal />
    </ChatProvider>
  );
}
