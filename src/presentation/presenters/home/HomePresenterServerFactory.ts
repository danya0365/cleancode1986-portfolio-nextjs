/**
 * HomePresenterServerFactory
 * Factory for creating HomePresenter instances on the server side
 * Inject the appropriate repository (Static/Mock or Real)
 */

import { HomePresenter } from "./HomePresenter";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";
import { StaticServiceRepository } from "@/src/infrastructure/repositories/static/StaticServiceRepository";
import { StaticTechnologyRepository } from "@/src/infrastructure/repositories/static/StaticTechnologyRepository";
import { StaticTestimonialRepository } from "@/src/infrastructure/repositories/static/StaticTestimonialRepository";
import { StaticHomeStatsRepository } from "@/src/infrastructure/repositories/static/StaticHomeStatsRepository";

export class HomePresenterServerFactory {
  static create(): HomePresenter {
    // Use Static Repository
    const projectRepo = new StaticProjectRepository();
    const serviceRepo = new StaticServiceRepository();
    const techRepo = new StaticTechnologyRepository();
    const testimonialRepo = new StaticTestimonialRepository();
    const statsRepo = new StaticHomeStatsRepository();

    return new HomePresenter(projectRepo, serviceRepo, techRepo, testimonialRepo, statsRepo);
  }
}

export function createServerHomePresenter(): HomePresenter {
  return HomePresenterServerFactory.create();
}
