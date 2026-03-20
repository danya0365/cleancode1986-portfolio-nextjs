/**
 * PortfolioPresenterClientFactory
 * Factory for creating PortfolioPresenter instances on the client side
 * Injects the appropriate repository (Static/Mock or Real)
 */

"use client";

import { PortfolioPresenter } from "./PortfolioPresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";

export class PortfolioPresenterClientFactory {
  static create(): PortfolioPresenter {
    // Usually uses Api Repository on the client,
    // but for static data using the static repository is fine for now
    const projectRepo = new StaticProjectRepository();
    return new PortfolioPresenter(projectRepo);
  }
}

export function createClientPortfolioPresenter(): PortfolioPresenter {
  return PortfolioPresenterClientFactory.create();
}
