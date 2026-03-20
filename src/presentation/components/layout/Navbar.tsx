"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "รับคำปรึกษา" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm" 
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-black tracking-tight flex items-center">
              <span className="text-indigo-600 dark:text-indigo-400 group-hover:drop-shadow-[0_0_8px_rgba(79,70,229,0.5)] transition-all">Clean</span>
              <span className="text-gray-900 dark:text-white ml-1">Code</span>
              <span className="text-purple-600 dark:text-purple-400 ml-1 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.5)] transition-all">1986</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    active
                      ? "bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 dark:hover:text-white border border-transparent"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Section: Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-800/50 transition-all shadow-sm hover:shadow group overflow-hidden"
                aria-label="Toggle dark mode"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 block transform group-hover:scale-110 transition-transform">
                  {theme === "dark" ? "🌙" : "☀️"}
                </span>
              </button>
            )}

            {/* Hamburger Button (Mobile) */}
            {mounted && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-800/50 transition-all shadow-sm active:scale-95"
                aria-label="Toggle menu"
              >
                <span className="block w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-bold transition-all ${
                    active
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
