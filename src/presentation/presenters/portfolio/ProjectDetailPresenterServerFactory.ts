import { ProjectDetailPresenter } from "./ProjectDetailPresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";

/**
 * ProjectDetailPresenterServerFactory
 * Factory for creating ProjectDetailPresenter instances on the server side
 * ✅ Follows strict CREATE_PAGE_PATTERN.md
 */
export class ProjectDetailPresenterServerFactory {
  static create(): ProjectDetailPresenter {
    const repository = new StaticProjectRepository();
    return new ProjectDetailPresenter(repository);
  }
}

export function createServerProjectDetailPresenter(): ProjectDetailPresenter {
  return ProjectDetailPresenterServerFactory.create();
}
