import type { HomeStats } from "@/src/presentation/presenters/home/HomePresenter";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";

interface Props {
  stats: HomeStats;
}

export function RetroStatsSection({ stats }: Props) {
  const STATS = [
    { label: "โปรเจคที่สำเร็จ", value: stats.totalProjects, suffix: "+" },
    { label: "ลูกค้าพึงพอใจ", value: stats.totalClients, suffix: "+" },
    { label: "ปีประสบการณ์", value: stats.yearsExperience, suffix: "+" },
    { label: "ทีมมืออาชีพ", value: stats.teamMembers, suffix: "+" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
      {STATS.map((stat, i) => (
        <RetroCard hoverEffect key={i} className="p-6 sm:p-8 flex flex-col items-center justify-center">
          <div className={`text-4xl sm:text-5xl font-black mb-2 ${i % 2 === 0 ? 'text-[#FF00FF]' : 'text-[#00FFFF]'}`}>
            {stat.value}{stat.suffix}
          </div>
          <div className="text-sm font-bold uppercase tracking-widest text-center">
            {stat.label}
          </div>
        </RetroCard>
      ))}
    </section>
  );
}
