import { HomeStats } from "@/src/presentation/presenters/home/HomePresenter";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function TerminalHero({ stats }: { stats: HomeStats }) {
  return (
    <TerminalBlock command="whoami">
      <div className="pl-4 border-l-2 border-green-800">
        <p>User: Clean Code 1986</p>
        <p>Role: Full Stack Software Engineer</p>
        <p>Location: TH</p>
        <p className="mt-2 text-green-300"># Current System Statistics:</p>
        <p>Total Projects: {stats.totalProjects}</p>
        <p>Happy Clients: {stats.totalClients}+</p>
        <p>Years Active: {stats.yearsExperience}+</p>
        <p>Team Size: {stats.teamMembers}</p>
        <br />
        <p className="text-gray-400 italic">"Simplicity is the soul of efficiency."</p>
      </div>
    </TerminalBlock>
  );
}
