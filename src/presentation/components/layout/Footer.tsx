"use client";

import { SITE } from "@/src/data/master/site";
import { useAppVersion } from "@/src/presentation/hooks/useAppVersion";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const QUICK_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "รับคำปรึกษา" },
];

const SERVICES_LINKS = [
  { href: "/services#web", label: "พัฒนาเว็บไซต์" },
  { href: "/services#mobile", label: "พัฒนาแอปมือถือ" },
  { href: "/services#uiux", label: "ออกแบบ UI/UX" },
  { href: "/services#consulting", label: "ให้คำปรึกษา" },
];

const SOCIAL_LINKS = [
  { href: SITE.social?.facebook, label: "Facebook", icon: "📘" },
  { href: SITE.social?.twitter, label: "Twitter", icon: "🐦" },
  { href: SITE.social?.github, label: "GitHub", icon: "🐙" },
  { href: SITE.social?.linkedin, label: "LinkedIn", icon: "💼" },
].filter((link) => Boolean(link.href));

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appVersion = useAppVersion().displayVersion;

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/80 overflow-hidden pt-4">
      {/* Decorative gradient background and Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 dark:from-indigo-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-2xl font-black tracking-tight flex items-center">
              <span className="text-indigo-600 dark:text-indigo-400 drop-shadow-sm">Clean</span>
              <span className="text-gray-900 dark:text-white ml-1">Code</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 ml-1">1986</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {SITE.company.description}
              <br />
              รับทำเว็บไซต์ แอปมือถือ
              <br />
              และระบบต่างๆ แบบครบวงจร 💻✨
            </p>
            <div className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-600 dark:text-indigo-400 border border-white dark:border-gray-800 shadow-sm">
                  📧
                </span>
                <span className="truncate">{SITE.contact.email}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-600 dark:text-purple-400 border border-white dark:border-gray-800 shadow-sm">
                  📞
                </span>
                <span>{SITE.contact.phone}</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-600 dark:text-blue-400 border border-white dark:border-gray-800 shadow-sm">
                  📍
                </span>
                <span className="leading-relaxed mt-1">{SITE.contact.address}</span>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg text-gray-900 dark:text-white font-black mb-6 flex items-center gap-3 uppercase tracking-wider text-sm">
              <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full" />
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="mr-2 text-indigo-500 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg text-gray-900 dark:text-white font-black mb-6 flex items-center gap-3 uppercase tracking-wider text-sm">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              บริการของเรา
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center font-bold text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <span className="mr-2 text-purple-500 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          {SOCIAL_LINKS.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-lg text-gray-900 dark:text-white font-black mb-6 flex items-center gap-3 uppercase tracking-wider text-sm">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full" />
                ติดตามเรา
              </h3>
              <div className="flex flex-col space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 w-fit"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm group-hover:border-indigo-500 dark:group-hover:border-indigo-400 group-hover:shadow-[0_4px_20px_-5px_rgba(79,70,229,0.3)] group-hover:-translate-y-1 transition-all duration-300">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    </span>
                    <span className="font-bold group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-800/60"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
              <span>© {currentYear} {SITE.company.name}. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
              <span className="select-none text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner font-mono">
                {appVersion}
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm font-bold">
              <Link
                href="/privacy"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Link
                href="/terms"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
