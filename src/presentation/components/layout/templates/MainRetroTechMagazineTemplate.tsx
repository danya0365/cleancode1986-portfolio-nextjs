"use client";

import { SITE } from "@/src/data/master/site";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export interface Props {
  children: React.ReactNode;
}

export function MainRetroTechMagazineTemplate({ children }: Props) {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div
      className="
        flex flex-col
        min-h-screen w-full
        overflow-x-hidden
        font-sans selection:bg-[#FF00FF] selection:text-white
      "
      style={{
        backgroundColor: '#f4f4f0',
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        color: '#111',
      }}
    >
      {/* ─── Retro Navbar ─── */}
      <nav className="border-b-8 border-black bg-white flex flex-row justify-between items-center px-4 sm:px-8 py-3 shrink-0 z-50 relative">
        <Link href="/" className="text-2xl sm:text-3xl font-black uppercase tracking-tighter hover:text-[#FF00FF] transition-colors z-50">
          {SITE.title}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex font-bold uppercase text-sm border-4 border-black bg-[#00FFFF] shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -skew-x-6 z-10">
          <Link href="/portfolio" className={`px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center ${isActive('/portfolio') ? 'bg-[#FF00FF] text-white' : ''}`}>
            <span className="transform skew-x-6 block">PORTFOLIO</span>
          </Link>
          <Link href="/services" className={`px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center ${isActive('/services') ? 'bg-[#FF00FF] text-white' : ''}`}>
            <span className="transform skew-x-6 block">SERVICES</span>
          </Link>
          <Link href="/about" className={`px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center ${isActive('/about') ? 'bg-[#FF00FF] text-white' : ''}`}>
            <span className="transform skew-x-6 block">ABOUT</span>
          </Link>
          <Link href="/contact" className={`px-4 py-2 hover:bg-[#39FF14] hover:text-black transition-colors flex items-center justify-center ${isActive('/contact') ? 'bg-[#39FF14] text-black' : ''}`}>
            <span className="transform skew-x-6 block">CONTACT</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center border-4 border-black p-2 bg-[#FF00FF] text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 active:translate-x-1 z-50 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b-8 border-black flex flex-col items-stretch md:hidden z-40 shadow-[0_12px_0_0_rgba(0,0,0,1)] animate-in slide-in-from-top-4 duration-200">
            <Link 
              href="/portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-4 border-t-4 border-black font-black uppercase text-xl hover:bg-[#00FFFF] transition-colors flex justify-between items-center ${isActive('/portfolio') ? 'bg-[#FF00FF] text-white' : ''}`}
            >
              PORTFOLIO <span>→</span>
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-4 border-t-4 border-black font-black uppercase text-xl hover:bg-[#FF00FF] hover:text-white transition-colors flex justify-between items-center ${isActive('/services') ? 'bg-[#FF00FF] text-white' : ''}`}
            >
              SERVICES <span>→</span>
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-4 border-t-4 border-black font-black uppercase text-xl hover:bg-[#39FF14] transition-colors flex justify-between items-center ${isActive('/about') ? 'bg-[#FF00FF] text-white' : ''}`}
            >
              ABOUT <span>→</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-6 py-4 border-t-4 border-black font-black uppercase text-xl transition-colors flex justify-between items-center ${isActive('/contact') ? 'bg-[#39FF14] text-black' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              CONTACT <span>→</span>
            </Link>
          </div>
        )}
      </nav>

      {/* ─── Content Area ─── */}
      <main className="flex-1 overflow-x-hidden relative flex flex-col container mx-auto">
        {/* Pass through children, which will be the route components (e.g. HomeView) */}
        {children}
      </main>

      {/* ─── Retro Footer ─── */}
      <footer className="border-t-8 border-black bg-black text-white px-6 py-6 font-bold uppercase text-xs sm:text-sm shrink-0 flex flex-col items-center gap-4">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-6">
          <p className="tracking-widest opacity-80 text-center lg:text-left">
            © {currentYear} {SITE.title.toUpperCase()} {"//"} SOFTWARE ENGINEERING
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
            <Link href="/terms" className="hover:text-[#00FFFF] hover:-translate-y-0.5 transition-all">TERMS OF SERVICE</Link>
            <span className="opacity-50">{"//"}</span>
            <Link href="/privacy" className="hover:text-[#FF00FF] hover:-translate-y-0.5 transition-all">PRIVACY POLICY</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
