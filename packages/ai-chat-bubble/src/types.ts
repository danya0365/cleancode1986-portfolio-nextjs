export interface ChatMessageType {
  id: string;
  role: "user" | "assistant" | "admin" | "system";
  content: string;
  timestamp: string | Date;
  status?: "sending" | "sent" | "delivered" | "read";
  isDraft?: boolean;
}
