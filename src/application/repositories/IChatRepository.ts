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
  customerName?: string;
  customerPhone?: string;
}

export interface IChatRepository {
  /**
   * Initialize a new chat session for a user.
   */
  createSession(sessionId: string, customerName?: string, customerPhone?: string): Promise<void>;

  /**
   * Check if a session exists and is active.
   */
  getSession(sessionId: string): Promise<ChatSessionData | null>;

  /**
   * Fetch all active sessions, including the content of their latest message, sorted by newest first.
   */
  getAllSessionsWithLatestMessage(): Promise<(ChatSessionData & { latestMessage?: ChatMessageData })[]>;

  /**
   * Update the status of a session (e.g. to close it).
   */
  updateSessionStatus(sessionId: string, status: "active" | "closed"): Promise<void>;

  /**
   * Find a session by a short ID prefix (e.g. first 4-8 characters).
   */
  getSessionByShortId(shortId: string): Promise<ChatSessionData | null>;

  /**
   * Get the most recently active session.
   */
  getLatestActiveSession(): Promise<ChatSessionData | null>;

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
   * Supports cursor pagination through `limit` and `beforeDate`.
   */
  getMessagesBySession(sessionId: string, limit?: number, beforeDate?: Date): Promise<ChatMessageData[]>;

  /**
   * Fetch strictly new messages that arrived after a specific timestamp (Optimized Polling).
   */
  getNewMessages(sessionId: string, afterDate: Date): Promise<ChatMessageData[]>;

  /**
   * Search for messages containing a specific keyword within a session.
   */
  searchMessages(sessionId: string, keyword: string): Promise<ChatMessageData[]>;
}
