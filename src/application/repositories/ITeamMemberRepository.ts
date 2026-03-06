/**
 * ITeamMemberRepository
 * Repository interface for TeamMember data access
 * Following Clean Architecture - this is in the Application layer
 */

import { TeamMemberCV } from "@/src/data/static/cv.static";

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

  /**
   * Get CV details for a specific team member
   */
  getCVByMemberId(id: string): Promise<TeamMemberCV | null>;
}
