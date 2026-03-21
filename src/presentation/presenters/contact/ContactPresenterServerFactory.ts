import { ContactPresenter } from "./ContactPresenter";

/**
 * ContactPresenterServerFactory
 * Factory for creating ContactPresenter instances on the server side
 * ✅ Follows strict CREATE_PAGE_PATTERN.md
 */
export class ContactPresenterServerFactory {
  static create(): ContactPresenter {
    return new ContactPresenter();
  }
}

export function createServerContactPresenter(): ContactPresenter {
  return ContactPresenterServerFactory.create();
}
