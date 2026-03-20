import { SITE } from "@/src/data/master/site";
import { IProjectRepository, Project } from "@/src/application/repositories/IProjectRepository";

export type CategoryFilter = "All" | "Web" | "Mobile" | "UI/UX" | "Full-stack";

export interface PortfolioViewModel {
  projects: Project[];
  categories: readonly CategoryFilter[];
}

/**
 * Presenter for Portfolio List page
 */
export class PortfolioPresenter {
  constructor(
    private readonly projectRepository: IProjectRepository
  ) {}

  /**
   * Get view model for portfolio list
   */
  async getViewModel(params: {
    category?: CategoryFilter;
    search?: string;
  } = {}): Promise<PortfolioViewModel> {
    try {
      // Build query params
      const queryParams: Parameters<IProjectRepository["query"]>[0] = {
        sortBy: "displayOrder",
        sortOrder: "asc",
        perPage: 0,
      };

      if (params.search) {
        queryParams.search = params.search;
      }

      if (params.category && params.category !== "All") {
        queryParams.filters = { category: params.category };
      }

      const paginatedResult = await this.projectRepository.query(queryParams);

      const categories: readonly CategoryFilter[] = [
        "All",
        "Web",
        "Mobile",
        "UI/UX",
        "Full-stack",
      ] as const;

      return {
        projects: paginatedResult.data,
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
  generateMetadata() {
    return {
      title: `ผลงาน | ${SITE.company.name}`,
      description: `ผลงานพัฒนาเว็บไซต์และแอปพลิเคชันของ ${SITE.company.name}`,
    };
  }
}
