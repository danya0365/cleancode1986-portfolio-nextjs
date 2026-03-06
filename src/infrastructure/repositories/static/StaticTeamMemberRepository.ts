/**
 * StaticTeamMemberRepository
 * Static implementation for development and testing
 * Following Clean Architecture - this is in the Infrastructure layer
 */

import { ITeamMemberRepository, TeamMember } from "@/src/application/repositories/ITeamMemberRepository";
import { STATIC_CVS, TeamMemberCV } from "@/src/data/static/cv.static";
import { STATIC_TEAM } from "@/src/data/static/team.static";

export class StaticTeamMemberRepository implements ITeamMemberRepository {
  async getActiveMembers(): Promise<TeamMember[]> {
    // Simulate network delay
    await this.delay(100);
    return STATIC_TEAM.filter((member) => member.isActive).sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
  }

  async getAll(): Promise<TeamMember[]> {
    await this.delay(100);
    return [...STATIC_TEAM];
  }

  async getCVByMemberId(id: string): Promise<TeamMemberCV | null> {
    await this.delay(100);
    const cv = STATIC_CVS[id];
    return cv || null;
  }

  // Helper method to simulate network delay
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

