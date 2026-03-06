import { FullAIChatWidget } from "@cleancode1986/ai-chat-bubble";
import "@cleancode1986/ai-chat-bubble/styles.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FullAIChatWidget apiEndpoint="/api/chat" />
    </>
  );
}
