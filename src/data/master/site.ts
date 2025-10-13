/**
 * Site-wide content and metadata
 */

export const SITE = {
  title: "Clean Code 1986",
  description: "พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
  baseUrl: "https://cleancode1986.com",
  defaultLocale: "th",
  locales: ["th", "en"],
  company: {
    name: "Clean Code 1986",
    description: "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ",
    tagline: "พัฒนาเว็บไซต์และแอปพลิเคชันที่ทรงพลังและทันสมัย",
    foundedYear: 2020,
  },
  contact: {
    email: "contact@cleancode1986.com",
    phone: "+66 81 234 5678",
    address: "123/4 ถนนพัฒนาซอฟต์แวร์ แขวงบางซื่อ เขตบางซื่อ กรุงเทพฯ 10800",
  },
  social: {
    facebook: "https://facebook.com/cleancode1986",
    twitter: "https://twitter.com/cleancode1986",
    instagram: "https://instagram.com/cleancode1986",
    linkedin: "https://linkedin.com/company/cleancode1986",
    github: "https://github.com/cleancode1986",
  },
} as const;

export type SiteConfig = typeof SITE;
