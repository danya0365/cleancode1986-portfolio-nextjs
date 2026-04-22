/**
 * Stats and metrics configuration
 */

export const STATS = [
  {
    id: "projects-delivered",
    label: "โปรเจคส่งมอบแล้ว",
    value: 10,
    suffix: "+",
    icon: "📊",
  },
  {
    id: "cost-saving",
    label: "ประหยัดต้นทุน",
    value: 80,
    suffix: "%+",
    icon: "💰",
  },
  {
    id: "faster-delivery",
    label: "เร็วกว่าจ้างทีม",
    value: 5,
    suffix: "x",
    icon: "⚡",
  },
  {
    id: "clean-architecture",
    label: "Clean Architecture",
    value: 100,
    suffix: "%",
    icon: "🏛️",
  },
] as const;

export type StatItem = (typeof STATS)[number];
export type StatsConfig = typeof STATS;
