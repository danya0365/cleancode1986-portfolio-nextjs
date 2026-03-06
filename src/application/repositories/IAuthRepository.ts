export interface UserData {
  id: string;
  username: string;
  passwordHash: string;
  role: "admin";
  createdAt: Date;
}

export interface IAuthRepository {
  /**
   * Find a user by their username (for future login forms)
   */
  getUserByUsername(username: string): Promise<UserData | null>;

  /**
   * Find a user by their unique ID
   */
  getUserById(id: string): Promise<UserData | null>;

  /**
   * Generate a unique Magic Link token and store it securely
   */
  createMagicLink(userId: string, expiresAtMs: number): Promise<string>;

  /**
   * Validate and consume a one-time Magic Link token.
   * Returns the associated user if valid, or null if expired/used.
   */
  consumeMagicLink(token: string): Promise<UserData | null>;
}
