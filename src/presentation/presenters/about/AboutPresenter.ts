import type { ITeamMemberRepository, TeamMember } from "@/src/application/repositories/ITeamMemberRepository";
import { SITE } from "@/src/data/master/site";

export interface AboutViewModel {
  teamMembers: TeamMember[];
}

/**
 * Presenter for About page
 * Handles business logic for About page
 * Receives repository via dependency injection
 */
export class AboutPresenter {
  constructor(
    private readonly repository: ITeamMemberRepository
  ) {}

  /**
   * Get view model for about page
   */
  async getViewModel(): Promise<AboutViewModel> {
    try {
      const teamMembers = await this.repository.getActiveMembers();

      return {
        teamMembers,
      };
    } catch (error) {
      console.error("Error loading about data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for about page
   */
  async generateMetadata() {
    return {
      title: `เกี่ยวกับเรา | ${SITE.company.name}`,
      description: `ทำความรู้จักทีม ${SITE.company.name} - นักพัฒนาซอฟต์แวร์มืออาชีพ`,
    };
  }
}

