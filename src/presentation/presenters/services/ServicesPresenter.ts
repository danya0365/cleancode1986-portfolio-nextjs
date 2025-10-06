import { getActiveServices, type Service } from "@/src/data/mock/services.mock";

export interface ServicesViewModel {
  services: Service[];
}

/**
 * Presenter for Services page
 */
export class ServicesPresenter {
  /**
   * Get view model for services page
   */
  async getViewModel(): Promise<ServicesViewModel> {
    try {
      const services = getActiveServices();

      return {
        services,
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
      title: "บริการ | Clean Code 1986",
      description:
        "บริการพัฒนาเว็บไซต์ แอปมือถือ UI/UX และ Consulting จาก Clean Code 1986",
    };
  }
}

/**
 * Factory for creating ServicesPresenter instances
 */
export class ServicesPresenterFactory {
  static async createServer(): Promise<ServicesPresenter> {
    return new ServicesPresenter();
  }

  static async createClient(): Promise<ServicesPresenter> {
    return new ServicesPresenter();
  }
}
