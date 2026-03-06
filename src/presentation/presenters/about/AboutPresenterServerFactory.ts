/**
 * AboutPresenterServerFactory
 * Factory for creating AboutPresenter instances on the server side
 */

import { StaticTeamMemberRepository } from "@/src/infrastructure/repositories/static/StaticTeamMemberRepository";
import { AboutPresenter } from "./AboutPresenter";

export class AboutPresenterServerFactory {
  static create(): AboutPresenter {
    const repository = new StaticTeamMemberRepository();
    return new AboutPresenter(repository);
  }
}

export function createServerAboutPresenter(): AboutPresenter {
  return AboutPresenterServerFactory.create();
}
