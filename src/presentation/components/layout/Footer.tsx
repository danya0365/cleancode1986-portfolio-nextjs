import { SITE } from "@/src/data/master/site";
import { useAppVersion } from "@/src/presentation/hooks/useAppVersion";
import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const SERVICES_LINKS = [
  { href: "/services#web", label: "พัฒนาเว็บไซต์" },
  { href: "/services#mobile", label: "พัฒนาแอปมือถือ" },
  { href: "/services#uiux", label: "ออกแบบ UI/UX" },
  { href: "/services#consulting", label: "ให้คำปรึกษา" },
];

const SOCIAL_LINKS = [
  { href: SITE.social.facebook, label: "Facebook", icon: "📘" },
  { href: SITE.social.twitter, label: "Twitter", icon: "🐦" },
  { href: SITE.social.github, label: "GitHub", icon: "🐙" },
  { href: SITE.social.linkedin, label: "LinkedIn", icon: "💼" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appVersion = useAppVersion().displayVersion;

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Decorative gradient background similar to Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Clean
              </span>
              <span className="text-gray-900 dark:text-white"> Code</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {" "}1986
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {SITE.company.description}
              <br />
              รับทำเว็บไซต์ แอปมือถือ
              <br />
              และระบบต่างๆ แบบครบวงจร
            </p>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  📧
                </span>
                <span>{SITE.contact.email}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  📞
                </span>
                <span>{SITE.contact.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  📍
                </span>
                <span>{SITE.contact.address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-gray-900 dark:text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="mr-2 text-blue-500 dark:text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg text-gray-900 dark:text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full" />
              บริการของเรา
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <span className="mr-2 text-purple-500 dark:text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg text-gray-900 dark:text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              ติดตามเรา
            </h3>
            <div className="flex flex-col space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 w-fit"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                  </span>
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <span>© {currentYear} {SITE.company.name}. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
              <span className="select-none text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                {appVersion}
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Link
                href="/terms"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
