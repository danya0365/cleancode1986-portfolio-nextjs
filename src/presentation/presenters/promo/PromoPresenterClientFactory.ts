"use client";

import { PromoPresenter } from "./PromoPresenter";

/**
 * PromoPresenterClientFactory
 * Factory for creating PromoPresenter instances on the client side
 */
export class PromoPresenterClientFactory {
  static create(): PromoPresenter {
    return new PromoPresenter();
  }
}

export function createClientPromoPresenter(): PromoPresenter {
  return PromoPresenterClientFactory.create();
}
