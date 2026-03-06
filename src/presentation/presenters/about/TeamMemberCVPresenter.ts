import { ITeamMemberRepository, TeamMember } from "@/src/application/repositories/ITeamMemberRepository";
import { TeamMemberCV } from "@/src/data/static/cv.static";

export interface TeamMemberCVViewModel {
  member: TeamMember;
  cv: TeamMemberCV;
}

export class TeamMemberCVPresenter {
  constructor(private readonly repository: ITeamMemberRepository) {}

  async getViewModel(id: string): Promise<TeamMemberCVViewModel | null> {
    const [member, cv] = await Promise.all([
      this.repository.getAll().then(members => members.find(m => m.id === id)),
      this.repository.getCVByMemberId(id)
    ]);

    if (!member || !cv) {
      return null;
    }

    return {
      member,
      cv
    };
  }
}
