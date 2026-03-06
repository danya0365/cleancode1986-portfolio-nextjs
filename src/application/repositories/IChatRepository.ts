export interface ChatMessageData {
  id: string;
  sessionId: string;
  role: "user" | "assistant" | "admin";
  content: string;
  createdAt: Date;
}

export interface ChatSessionData {
  id: string;
  status: "active" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

export interface IChatRepository {
  /**
   * Initialize a new chat session for a user.
   */
  createSession(sessionId: string): Promise<void>;

  /**
   * Check if a session exists and is active.
   */
  getSession(sessionId: string): Promise<ChatSessionData | null>;

  /**
   * Add a new message to the session.
   */
  addMessage(
    sessionId: string,
    role: "user" | "assistant" | "admin",
    content: string
  ): Promise<ChatMessageData>;

  /**
   * Retrieve all messages for a given session, sorted chronologically.
   */
  getMessagesBySession(sessionId: string): Promise<ChatMessageData[]>;
}
