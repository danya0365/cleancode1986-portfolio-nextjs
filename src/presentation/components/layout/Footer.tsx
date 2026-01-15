import { SITE } from "@/src/data/master/site";
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

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-600 dark:text-blue-400">Clean</span>
              <span className="text-gray-900 dark:text-white"> Code</span>
              <span className="text-blue-600 dark:text-blue-400"> 1986</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {SITE.company.description}
              <br />
              รับทำเว็บไซต์ แอปมือถือ
              <br />
              และระบบต่างๆ
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>📧 {SITE.contact.email}</p>
              <p>📞 {SITE.contact.phone}</p>
              <p>📍 {SITE.contact.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              บริการของเรา
            </h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              ติดตามเรา
            </h3>
            <div className="flex flex-col space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} {SITE.company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
