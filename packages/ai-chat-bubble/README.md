# @cleancode1986/ai-chat-bubble

A modern, glassmorphic, fully decoupled AI Chat Bubble component built for React and Next.js applications.

## Features
- 🎨 **Glassmorphic UI**: Beautiful gradients and backdrop blur filters.
- ♻️ **Fully Decoupled**: State management and API calls are handled via props, meaning it works with API keys, custom backends, or any state manager (Zustand, Redux, Context).
- ✨ **Optimistic UI**: Real-time read receipts (sending, sent, delivered, read) and localized timestamps.
- 📱 **Mobile Responsive**: Perfectly adapts to all screen sizes with smooth slide-up animations.
- 🧑‍💻 **TypeScript Ready**: Written in 100% TypeScript with full definitions.

## Installation

```bash
npm install @cleancode1986/ai-chat-bubble lucide-react
# or
yarn add @cleancode1986/ai-chat-bubble lucide-react
```

> **Note**: This package requires `lucide-react` as a peer dependency for icons.

## Quick Setup

### 1. Import CSS
Import the stylesheet into your root layout or `_app.tsx`:
```tsx
import "@cleancode1986/ai-chat-bubble/styles.css";
```

### 2. Basic Usage

```tsx
import { useState } from "react";
import { AIChatBubble, ChatMessageType } from "@cleancode1986/ai-chat-bubble";

export default function MyChatApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  const handleSendMessage = async (text: string) => {
    // 1. Add user message
    const newMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
      status: "sending"
    };
    setMessages((prev) => [...prev, newMessage]);

    // 2. Call your API (Supabase, Firebase, Node.js, etc.)
    // ...
    // await fetch('/api/chat', { body: { message: text }})
    
    // 3. Add AI Response
     const aiReply: ChatMessageType = {
      id: "ai-" + Date.now().toString(),
      role: "assistant",
      content: "Hello from the backend!",
      timestamp: new Date().toISOString(),
      status: "delivered"
    };
    setMessages((prev) => [...prev, aiReply]);
  };

  return (
    <AIChatBubble
      isOpen={isOpen}
      messages={messages}
      isLoading={false}
      isRegistered={true}
      hasMoreHistory={false}
      error={null}
      onToggleChat={() => setIsOpen(!isOpen)}
      onSendMessage={handleSendMessage}
      onRegister={async () => true}
      onLoadMoreHistory={async () => {}}
      onMarkAsRead={() => {}}
      onSyncMessages={() => {}}
    />
  );
}
```

## Props API

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls the visibility of the main chat window. |
| `messages` | `ChatMessageType[]` | Array of message objects to render. |
| `isLoading` | `boolean` | Shows typing indicators and disables inputs. |
| `isRegistered` | `boolean` | If false, shows the Pre-Chat Registration form. |
| `customerName` | `string?` | Used to personalize the welcome screen. |
| `hasMoreHistory` | `boolean` | Triggers the visibility of the "Load More" button. |
| `error` | `string \| null` | Displays registration or sending errors. |

### Callbacks
- `onToggleChat: () => void`
- `onSendMessage: (message: string) => Promise<void>`
- `onRegister: (name: string, phone: string) => Promise<boolean>`
- `onLoadMoreHistory: () => Promise<void>`
- `onMarkAsRead: () => void`
- `onSyncMessages: () => void`

## License
MIT © Clean Code 1986
