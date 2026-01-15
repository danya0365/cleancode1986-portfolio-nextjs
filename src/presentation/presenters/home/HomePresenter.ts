import { SITE } from "@/src/data/master/site";
import { getFeaturedProjects, type Project } from "@/src/data/mock/projects.mock";
import { getActiveServices, type Service } from "@/src/data/mock/services.mock";
import { getAllActiveTechnologies, type Technology } from "@/src/data/mock/technologies.mock";
import { MOCK_TESTIMONIALS, type Testimonial } from "@/src/data/mock/testimonials.mock";

export interface HomeStats {
  totalProjects: number;
  totalClients: number;
  yearsExperience: number;
  teamMembers: number;
}

export interface HomeViewModel {
  stats: HomeStats;
  featuredProjects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  technologies: Technology[];
}

/**
 * Presenter for Home/Landing page
 * Follows Clean Architecture with proper separation of concerns
 */
export class HomePresenter {
  /**
   * Get view model for the home page
   */
  async getViewModel(): Promise<HomeViewModel> {
    try {
      // Get data from mock (ในอนาคตจะเปลี่ยนเป็น API calls)
      const featuredProjects = getFeaturedProjects();
      const services = getActiveServices().slice(0, 6);
      const testimonials = MOCK_TESTIMONIALS.filter((t) => t.isFeatured);
      const technologies = getAllActiveTechnologies();

      const stats: HomeStats = {
        totalProjects: 50,
        totalClients: 40,
        yearsExperience: 5,
        teamMembers: 10,
      };

      return {
        stats,
        featuredProjects: featuredProjects.slice(0, 3),
        services,
        testimonials,
        technologies,
      };
    } catch (error) {
      console.error("Error loading home data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for the home page
   */
  async generateMetadata() {
    return {
      title: `${SITE.company.name} | ${SITE.description}`,
      description:
        `${SITE.company.name} - ${SITE.company.description} รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ ด้วย Next.js, React, React Native`,
      keywords: [
        "พัฒนาเว็บไซต์",
        "รับทำเว็บไซต์",
        "รับทำแอพมือถือ",
        "Next.js",
        "React",
        "React Native",
        SITE.company.name,
      ],
      authors: [{ name: SITE.company.name }],
      openGraph: {
        title: `${SITE.company.name} | ${SITE.description}`,
        description:
          `${SITE.company.description} รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ`,
        type: "website",
      },
    };
  }
}

/**
 * Factory for creating HomePresenter instances
 */
export class HomePresenterFactory {
  static async createServer(): Promise<HomePresenter> {
    return new HomePresenter();
  }

  static async createClient(): Promise<HomePresenter> {
    return new HomePresenter();
  }
}
