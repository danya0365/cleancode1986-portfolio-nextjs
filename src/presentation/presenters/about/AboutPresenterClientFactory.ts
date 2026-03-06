/**
 * AboutPresenterClientFactory
 * Factory for creating AboutPresenter instances on the client side
 */

"use client";

import { StaticTeamMemberRepository } from "@/src/infrastructure/repositories/static/StaticTeamMemberRepository";
import { AboutPresenter } from "./AboutPresenter";

export class AboutPresenterClientFactory {
  static create(): AboutPresenter {
    const repository = new StaticTeamMemberRepository();
    return new AboutPresenter(repository);
  }
}

export function createClientAboutPresenter(): AboutPresenter {
  return AboutPresenterClientFactory.create();
}
