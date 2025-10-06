import { getActiveTeamMembers, type TeamMember } from "@/src/data/mock/team.mock";

export interface AboutViewModel {
  teamMembers: TeamMember[];
}

/**
 * Presenter for About page
 */
export class AboutPresenter {
  /**
   * Get view model for about page
   */
  async getViewModel(): Promise<AboutViewModel> {
    try {
      const teamMembers = getActiveTeamMembers();

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
      title: "เกี่ยวกับเรา | Clean Code 1986",
      description: "ทำความรู้จักทีม Clean Code 1986 - นักพัฒนาซอฟต์แวร์มืออาชีพ",
    };
  }
}

/**
 * Factory for creating AboutPresenter instances
 */
export class AboutPresenterFactory {
  static async createServer(): Promise<AboutPresenter> {
    return new AboutPresenter();
  }

  static async createClient(): Promise<AboutPresenter> {
    return new AboutPresenter();
  }
}
