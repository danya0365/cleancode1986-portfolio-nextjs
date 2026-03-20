/**
 * PortfolioPresenterServerFactory
 * Factory for creating PortfolioPresenter instances on the server side
 * Injects the appropriate repository (Static/Mock or Real)
 */

import { PortfolioPresenter } from "./PortfolioPresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";

export class PortfolioPresenterServerFactory {
  static create(): PortfolioPresenter {
    // Use Static Repository
    const projectRepo = new StaticProjectRepository();
    return new PortfolioPresenter(projectRepo);
  }
}

export function createServerPortfolioPresenter(): PortfolioPresenter {
  return PortfolioPresenterServerFactory.create();
}
