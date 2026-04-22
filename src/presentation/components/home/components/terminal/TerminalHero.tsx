import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import { HomeStats } from "@/src/presentation/presenters/home/HomePresenter";

export function TerminalHero({ stats }: { stats: HomeStats }) {
  return (
    <TerminalBlock command="whoami">
      <div className="pl-4 border-l-2 border-green-800">
        <p>User: Clean Code 1986</p>
        <p>Role: AI-Powered Software Engineer</p>
        <p>Location: TH</p>
        <p>Stack: AI + Clean Architecture</p>
        <p className="mt-2 text-green-300"># AI-Powered Statistics:</p>
        <p>Projects Delivered: {stats.totalProjects}</p>
        <p>Cost Saving: 80%+</p>
        <p>Speed Multiplier: 5x</p>
        <p>Clean Architecture: 100%</p>
        <br />
        <p className="text-gray-400 italic">
          &quot;AI writes code, we control quality.&quot;
        </p>
      </div>
    </TerminalBlock>
  );
}
