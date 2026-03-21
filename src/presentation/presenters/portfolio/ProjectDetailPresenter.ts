import type { IProjectRepository, Project } from "@/src/application/repositories/IProjectRepository";

export interface ProjectDetailViewModel {
  project: Project;
  relatedProjects: Project[];
}

/**
 * Presenter for Project Detail page
 * Following Clean Architecture Domain pattern
 */
export class ProjectDetailPresenter {
  constructor(private readonly repository: IProjectRepository) {}

  /**
   * Get view model for project detail
   */
  async getViewModel(slug: string): Promise<ProjectDetailViewModel> {
    try {
      const project = await this.repository.getBySlug(slug);

      if (!project) {
        throw new Error(`Project with slug ${slug} not found`);
      }

      // Get related projects (same category, excluding current)
      const queryResult = await this.repository.query({
        filters: { category: project.category },
      });
      
      const relatedProjects = queryResult.data
        .filter((p) => p.id !== project.id)
        .slice(0, 3);

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
      const project = await this.repository.getBySlug(slug);

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
