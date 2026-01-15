/**
 * Site-wide content and metadata
 * Single source of truth for site configuration
 */

export const SITE = {
  title: "Clean Code 1986",
  description: "พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
  baseUrl: "https://cleancode1986-portfolio.vercel.app",
  defaultLocale: "th",
  locales: ["th", "en"],
  company: {
    name: "CleanCode 1986",
    nameTH: "คลีนโค้ด 1986",
    description: "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ",
    tagline: "พัฒนาเว็บไซต์และแอปพลิเคชันที่ทรงพลังและทันสมัย",
    foundedYear: 2020,
  },
  contact: {
    email: "marosdee.fuzana@gmail.com",
    phone: "089-484-7773",
    lineId: "@marosdee7",
    address: "กรุงเทพมหานคร ประเทศไทย",
  },
  social: {
    facebook: "https://www.facebook.com/marosdee7",
    twitter: "https://twitter.com/marosdee7",
    instagram: "https://instagram.com/marosdee7",
    linkedin: "https://linkedin.com/in/marosdee-uma",
    github: "https://github.com/danya0365",
  },
} as const;

export type SiteConfig = typeof SITE;
