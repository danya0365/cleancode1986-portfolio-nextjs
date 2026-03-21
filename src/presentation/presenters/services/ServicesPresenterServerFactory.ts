import { ServicesPresenter } from "./ServicesPresenter";
import { StaticServiceRepository } from "@/src/infrastructure/repositories/static/StaticServiceRepository";

/**
 * ServicesPresenterServerFactory
 * Factory for creating ServicesPresenter instances on the server side
 * ✅ Injects the appropriate repository
 */
export class ServicesPresenterServerFactory {
  static create(): ServicesPresenter {
    const repository = new StaticServiceRepository();
    return new ServicesPresenter(repository);
  }
}

export function createServerServicesPresenter(): ServicesPresenter {
  return ServicesPresenterServerFactory.create();
}
