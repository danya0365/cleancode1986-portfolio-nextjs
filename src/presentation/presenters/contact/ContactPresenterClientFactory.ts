"use client";

import { ContactPresenter } from "./ContactPresenter";

/**
 * ContactPresenterClientFactory
 * Factory for creating ContactPresenter instances on the client side
 * ✅ Follows strict CREATE_PAGE_PATTERN.md
 */
export class ContactPresenterClientFactory {
  static create(): ContactPresenter {
    return new ContactPresenter();
  }
}

export function createClientContactPresenter(): ContactPresenter {
  return ContactPresenterClientFactory.create();
}
