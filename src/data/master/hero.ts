/**
 * Hero section content and configuration
 */

export const HERO = {
  badge: {
    icon: "🤖",
    text: "AI-Powered Development — ราคาดี คุณภาพสูง",
  },
  headline: {
    prefix: "จ้างทำเว็บ",
    highlight1: "ราคาถูกกว่าที่คิด",
    middle: "",
    highlight2: "คุณภาพสูงด้วย AI",
    suffix: "",
  },
  description:
    "ใช้ AI เขียนโค้ด + ควบคุมคุณภาพด้วย AI Skill & Clean Architecture\nส่งมอบเร็ว ราคาดี ทุกโปรเจคได้มาตรฐานระดับสากล",
  cta: {
    primary: {
      text: "ปรึกษาฟรี",
      href: "/contact",
    },
    secondary: {
      text: "ดูผลงาน",
      href: "/portfolio",
    },
  },
  techSection: {
    title: "ขับเคลื่อนด้วย AI + เทคโนโลยีล่าสุด",
  },
} as const;

export type HeroConfig = typeof HERO;
