"use client";

import { ProjectDetailPresenter } from "./ProjectDetailPresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";

/**
 * ProjectDetailPresenterClientFactory
 * Factory for creating ProjectDetailPresenter instances on the client side
 * ✅ Follows strict CREATE_PAGE_PATTERN.md
 */
export class ProjectDetailPresenterClientFactory {
  static create(): ProjectDetailPresenter {
    const repository = new StaticProjectRepository();
    return new ProjectDetailPresenter(repository);
  }
}

export function createClientProjectDetailPresenter(): ProjectDetailPresenter {
  return ProjectDetailPresenterClientFactory.create();
}
