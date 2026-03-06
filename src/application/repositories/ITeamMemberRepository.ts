/**
 * ITeamMemberRepository
 * Repository interface for TeamMember data access
 * Following Clean Architecture - this is in the Application layer
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface ITeamMemberRepository {
  /**
   * Get all active team members sorted by sortOrder
   */
  getActiveMembers(): Promise<TeamMember[]>;

  /**
   * Get all team members
   */
  getAll(): Promise<TeamMember[]>;
}
