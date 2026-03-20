import { AIChatBubble } from "@/src/presentation/components/chat";
import { CustomCursor } from "@/src/presentation/components/layout/CustomCursor";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomCursor />
      {children}
      <AIChatBubble />
    </>
  );
}
