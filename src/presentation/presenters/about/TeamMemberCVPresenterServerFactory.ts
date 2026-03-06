import { StaticTeamMemberRepository } from "@/src/infrastructure/repositories/static/StaticTeamMemberRepository";
import { TeamMemberCVPresenter } from "./TeamMemberCVPresenter";

export const createServerCVPresenter = (): TeamMemberCVPresenter => {
  const repository = new StaticTeamMemberRepository();
  return new TeamMemberCVPresenter(repository);
};
