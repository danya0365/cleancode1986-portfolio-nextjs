/**
 * Stats and metrics configuration
 */

export const STATS = [
  {
    id: "projects-completed",
    label: "โปรเจคที่สำเร็จ",
    value: 50,
    suffix: "+",
    icon: "📊",
  },
  {
    id: "satisfied-clients",
    label: "ลูกค้าพึงพอใจ",
    value: 30,
    suffix: "+",
    icon: "😊",
  },
  {
    id: "years-experience",
    label: "ปีประสบการณ์",
    value: 5,
    suffix: "+",
    icon: "🎓",
  },
  {
    id: "team-members",
    label: "ทีมมืออาชีพ",
    value: 10,
    suffix: "+",
    icon: "👥",
  },
] as const;

export type StatItem = (typeof STATS)[number];
export type StatsConfig = typeof STATS;
