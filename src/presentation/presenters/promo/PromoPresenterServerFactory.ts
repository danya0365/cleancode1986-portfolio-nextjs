import { PromoPresenter } from "./PromoPresenter";

/**
 * PromoPresenterServerFactory
 * Factory for creating PromoPresenter instances on the server side
 */
export class PromoPresenterServerFactory {
  static create(): PromoPresenter {
    return new PromoPresenter();
  }
}

export function createServerPromoPresenter(): PromoPresenter {
  return PromoPresenterServerFactory.create();
}
