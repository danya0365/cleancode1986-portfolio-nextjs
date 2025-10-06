import { getAllProjectsSorted, type Project } from "@/src/data/mock/projects.mock";

export type CategoryFilter = "All" | "Web" | "Mobile" | "UI/UX" | "Full-stack";

export interface PortfolioViewModel {
  projects: Project[];
  categories: readonly CategoryFilter[];
}

/**
 * Presenter for Portfolio List page
 */
export class PortfolioPresenter {
  /**
   * Get view model for portfolio list
   */
  async getViewModel(): Promise<PortfolioViewModel> {
    try {
      // Get published projects only, sorted by displayOrder
      const projects = getAllProjectsSorted().filter((p) => p.status === "published");

      const categories: readonly CategoryFilter[] = [
        "All",
        "Web",
        "Mobile",
        "UI/UX",
        "Full-stack",
      ] as const;

      return {
        projects,
        categories,
      };
    } catch (error) {
      console.error("Error loading portfolio data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for portfolio page
   */
  async generateMetadata() {
    return {
      title: "ผลงาน | Clean Code 1986",
      description: "ผลงานพัฒนาเว็บไซต์และแอปพลิเคชันของ Clean Code 1986",
    };
  }
}

/**
 * Factory for creating PortfolioPresenter instances
 */
export class PortfolioPresenterFactory {
  static async createServer(): Promise<PortfolioPresenter> {
    return new PortfolioPresenter();
  }

  static async createClient(): Promise<PortfolioPresenter> {
    return new PortfolioPresenter();
  }
}
