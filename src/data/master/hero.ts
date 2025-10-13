/**
 * Hero section content and configuration
 */

export const HERO = {
  badge: {
    icon: "✨",
    text: "มืออาชีพ เชื่อถือได้ คุณภาพสูง",
  },
  headline: {
    prefix: "พัฒนา",
    highlight1: "เว็บไซต์",
    middle: "และ",
    highlight2: "แอปพลิเคชัน",
    suffix: "ที่ทรงพลังและทันสมัย",
  },
  description:
    "Clean Code 1986 - ทีมนักพัฒนามืออาชีพพร้อมสร้างโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ\nด้วย Next.js, React, React Native และเทคโนโลยีล่าสุด",
  cta: {
    primary: {
      text: "ดูผลงานของเรา",
      href: "/portfolio",
    },
    secondary: {
      text: "ติดต่อเรา",
      href: "/contact",
    },
  },
  techSection: {
    title: "เทคโนโลยีที่เราใช้",
  },
} as const;

export type HeroConfig = typeof HERO;
