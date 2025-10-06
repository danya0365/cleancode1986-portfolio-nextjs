import { getProjectBySlug, PROJECTS, type Project } from "@/src/data/mock/projects.mock";

export interface ProjectDetailViewModel {
  project: Project;
  relatedProjects: Project[];
}

/**
 * Presenter for Project Detail page
 */
export class ProjectDetailPresenter {
  /**
   * Get view model for project detail
   */
  async getViewModel(slug: string): Promise<ProjectDetailViewModel> {
    try {
      const project = getProjectBySlug(slug);

      if (!project) {
        throw new Error("Project not found");
      }

      // Get related projects (same category, excluding current)
      const relatedProjects = PROJECTS.filter(
        (p) =>
          p.id !== project.id &&
          p.category === project.category &&
          p.status === "published"
      ).slice(0, 3);

      return {
        project,
        relatedProjects,
      };
    } catch (error) {
      console.error("Error loading project detail:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for project detail page
   */
  async generateMetadata(slug: string) {
    try {
      const project = getProjectBySlug(slug);

      if (!project) {
        return {
          title: "ไม่พบโปรเจค | Clean Code 1986",
          description: "ไม่พบโปรเจคที่คุณค้นหา",
        };
      }

      return {
        title: `${project.title} | Clean Code 1986`,
        description: project.description,
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      return {
        title: "โปรเจค | Clean Code 1986",
        description: "รายละเอียดโปรเจค",
      };
    }
  }
}

/**
 * Factory for creating ProjectDetailPresenter instances
 */
export class ProjectDetailPresenterFactory {
  static async createServer(): Promise<ProjectDetailPresenter> {
    return new ProjectDetailPresenter();
  }

  static async createClient(): Promise<ProjectDetailPresenter> {
    return new ProjectDetailPresenter();
  }
}
