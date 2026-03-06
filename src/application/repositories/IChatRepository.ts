export interface ChatMessageData {
  id: string;
  sessionId: string;
  role: "user" | "assistant" | "admin";
  content: string;
  status: "sent" | "delivered" | "read";
  isDraft: boolean;
  createdAt: Date;
}

export interface ChatSessionData {
  id: string;
  status: "new" | "active" | "follow_up" | "resolved" | "spam";
  autoReply: boolean;
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
   * Update the status of a session.
   */
  updateSessionStatus(sessionId: string, status: "new" | "active" | "follow_up" | "resolved" | "spam"): Promise<void>;

  /**
   * Update the status of specific messages.
   */
  updateMessageStatus(messageIds: string[], status: "delivered" | "read"): Promise<void>;

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
    content: string,
    id?: string,
    isDraft?: boolean,
    status?: "sent" | "delivered" | "read"
  ): Promise<ChatMessageData>;

  /**
   * Retrieve all messages for a given session, sorted chronologically.
   * Supports cursor pagination through `limit` and `beforeDate`.
   */
  getMessagesBySession(sessionId: string, limit?: number, beforeDate?: Date, excludeDrafts?: boolean): Promise<ChatMessageData[]>;

  /**
   * Fetch strictly new messages that arrived after a specific timestamp (Optimized Polling).
   */
  getNewMessages(sessionId: string, afterDate: Date, excludeDrafts?: boolean): Promise<ChatMessageData[]>;

  /**
   * Search for messages containing a specific keyword within a session.
   */
  searchMessages(sessionId: string, keyword: string): Promise<ChatMessageData[]>;

  /**
   * Toggle the AI Auto-Reply state for a session.
   */
  toggleAutoReply(sessionId: string, state: boolean): Promise<void>;
}
