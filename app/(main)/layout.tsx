import { AIChatBubble } from "@/src/presentation/components/chat";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AIChatBubble />
    </>
  );
}
