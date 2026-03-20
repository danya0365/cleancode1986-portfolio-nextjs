/**
 * HomePresenterClientFactory
 * Factory for creating HomePresenter instances on the client side
 * Inject the appropriate repository (Static/Mock or Real)
 */

"use client";

import { HomePresenter } from "./HomePresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";
import { StaticServiceRepository } from "@/src/infrastructure/repositories/static/StaticServiceRepository";
import { StaticTechnologyRepository } from "@/src/infrastructure/repositories/static/StaticTechnologyRepository";
import { StaticTestimonialRepository } from "@/src/infrastructure/repositories/static/StaticTestimonialRepository";
import { StaticHomeStatsRepository } from "@/src/infrastructure/repositories/static/StaticHomeStatsRepository";

export class HomePresenterClientFactory {
  static create(): HomePresenter {
    // Usually uses Api Repository on the client,
    // but for static data using the static repository is fine for now
    const projectRepo = new StaticProjectRepository();
    const serviceRepo = new StaticServiceRepository();
    const techRepo = new StaticTechnologyRepository();
    const testimonialRepo = new StaticTestimonialRepository();
    const statsRepo = new StaticHomeStatsRepository();

    return new HomePresenter(projectRepo, serviceRepo, techRepo, testimonialRepo, statsRepo);
  }
}

export function createClientHomePresenter(): HomePresenter {
  return HomePresenterClientFactory.create();
}
