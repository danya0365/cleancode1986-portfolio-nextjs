/**
 * Site-wide content and metadata
 * Single source of truth for site configuration
 */

export interface SiteConfig {
  title: string;
  description: string;
  baseUrl: string;
  defaultLocale: string;
  locales: string[];
  company: {
    name: string;
    nameTH: string;
    description: string;
    tagline: string;
    foundedYear: number;
  };
  hiring: {
    isHiring: boolean;
  };
  contact: {
    email: string;
    phone: string;
    lineId: string;
    address: string;
  };
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
  };
  templateSwitch: {
    onboardingType: "boot" | "spotlight" | "glitch" | "mascot" | "none";
  };
}

export const SITE: SiteConfig = {
  title: "Clean Code 1986",
  description: "พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  defaultLocale: "th",
  locales: ["th", "en"],
  company: {
    name: "CleanCode 1986",
    nameTH: "คลีนโค้ด 1986",
    description: "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ",
    tagline: "พัฒนาเว็บไซต์และแอปพลิเคชันที่ทรงพลังและทันสมัย",
    foundedYear: 2020,
  },
  hiring: {
    isHiring: false, // Set to true to show hiring CTAs on the website
  },
  contact: {
    email: "cleancode1986@gmail.com",
    phone: "089-484-7773",
    lineId: "@marosdee7",
    address: "กรุงเทพมหานคร ประเทศไทย",
  },
  social: {
    facebook: "https://www.facebook.com/people/CleanCode1986/61580733796921/",
  },
  templateSwitch: {
    onboardingType: "mascot", // default to mascot testing
  },
};
