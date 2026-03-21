"use client";

import { ServicesPresenter } from "./ServicesPresenter";
import { StaticServiceRepository } from "@/src/infrastructure/repositories/static/StaticServiceRepository";

/**
 * ServicesPresenterClientFactory
 * Factory for creating ServicesPresenter instances on the client side
 * ✅ Injects the appropriate repository
 */
export class ServicesPresenterClientFactory {
  static create(): ServicesPresenter {
    const repository = new StaticServiceRepository();
    return new ServicesPresenter(repository);
  }
}

export function createClientServicesPresenter(): ServicesPresenter {
  return ServicesPresenterClientFactory.create();
}
