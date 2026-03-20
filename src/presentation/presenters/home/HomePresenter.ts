import { SITE } from "@/src/data/master/site";
import { IProjectRepository, Project } from "@/src/application/repositories/IProjectRepository";
import { IServiceRepository, Service } from "@/src/application/repositories/IServiceRepository";
import { ITechnologyRepository, Technology } from "@/src/application/repositories/ITechnologyRepository";
import { ITestimonialRepository, Testimonial } from "@/src/application/repositories/ITestimonialRepository";



import { IHomeStatsRepository, HomeStats } from "@/src/application/repositories/IHomeStatsRepository";

export type { HomeStats };

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
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly serviceRepository: IServiceRepository,
    private readonly technologyRepository: ITechnologyRepository,
    private readonly testimonialRepository: ITestimonialRepository,
    private readonly homeStatsRepository: IHomeStatsRepository
  ) {}

  /**
   * Get view model for the home page
   */
  async getViewModel(): Promise<HomeViewModel> {
    try {
      // Get data from repositories using full-option queries, moving pagination and filtering to the data access layer
      const [
        featuredProjectsResult,
        servicesResult,
        testimonialsResult,
        technologiesResult,
        stats
      ] = await Promise.all([
        this.projectRepository.query({ filters: { isFeatured: true }, perPage: 3 }),
        this.serviceRepository.query({ filters: { isActive: true }, perPage: 6 }),
        this.testimonialRepository.query({ filters: { isFeatured: true }, perPage: 0 }), // 0 means unlimited
        this.technologyRepository.query({ filters: { isActive: true }, perPage: 0 }),
        this.homeStatsRepository.getStats()
      ]);

      return {
        stats,
        featuredProjects: featuredProjectsResult.data,
        services: servicesResult.data,
        testimonials: testimonialsResult.data,
        technologies: technologiesResult.data,
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

