import { SITE } from "@/src/data/master/site";
import type { IServiceRepository, Service } from "@/src/application/repositories/IServiceRepository";

export interface ServicesViewModel {
  services: Service[];
}

/**
 * Presenter for Services page
 * Following Clean Architecture - Interface Adapters layer
 */
export class ServicesPresenter {
  constructor(private readonly serviceRepository: IServiceRepository) {}

  /**
   * Get view model for services page
   */
  async getViewModel(): Promise<ServicesViewModel> {
    try {
      // Query active services, sorted by display order
      const result = await this.serviceRepository.query({
        sortBy: "sortOrder",
        sortOrder: "asc", 
        filters: { isActive: true }
      });

      return {
        services: result.data,
      };
    } catch (error) {
      console.error("Error loading services data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for services page
   */
  async generateMetadata() {
    return {
      title: `บริการ | ${SITE.company.name}`,
      description: `บริการพัฒนาเว็บไซต์ แอปมือถือ UI/UX และ Consulting จาก ${SITE.company.name}`,
    };
  }
}
