import { SITE } from "@/src/data/master/site";
import Link from "next/link";
import React from "react";

export interface Props {
  children: React.ReactNode;
}

export function MainRetroTechMagazineTemplate({ children }: Props) {
  const currentYear = new Date().getFullYear();

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
      <nav className="border-b-8 border-black bg-white flex flex-row justify-between items-center px-4 sm:px-8 py-3 shrink-0 z-50">
        <Link href="/" className="text-2xl sm:text-3xl font-black uppercase tracking-tighter hover:text-[#FF00FF] transition-colors">
          {SITE.title}
        </Link>
        
        <div className="hidden md:flex font-bold uppercase text-sm border-4 border-black bg-[#00FFFF] shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -skew-x-6 z-10">
          <Link href="/portfolio" className="px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center">
            <span className="transform skew-x-6 block">PORTFOLIO</span>
          </Link>
          <Link href="/services" className="px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center">
            <span className="transform skew-x-6 block">SERVICES</span>
          </Link>
          <Link href="/about" className="px-4 py-2 border-r-4 border-black hover:bg-[#FF00FF] hover:text-white transition-colors flex items-center justify-center">
            <span className="transform skew-x-6 block">ABOUT</span>
          </Link>
          <Link href="/contact" className="px-4 py-2 hover:bg-[#39FF14] transition-colors flex items-center justify-center">
            <span className="transform skew-x-6 block">CONTACT</span>
          </Link>
        </div>
      </nav>

      {/* ─── Content Area ─── */}
      <main className="flex-1 overflow-x-hidden relative flex flex-col">
        {/* Pass through children, which will be the route components (e.g. HomeView) */}
        {children}
      </main>

      {/* ─── Retro Footer ─── */}
      <footer className="border-t-8 border-black bg-black text-white px-6 py-4 font-bold uppercase text-xs sm:text-sm text-center shrink-0 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="tracking-widest opacity-80">© {currentYear} {SITE.title.toUpperCase()} {"//"} SOFTWARE ENGINEERING</p>
        <div className="flex items-center gap-2">
          <span>{"//"}</span>
          <a 
            href="mailto:cleancode1986@gmail.com" 
            className="text-[#39FF14] hover:text-[#FF00FF] hover:-translate-y-0.5 transition-all inline-block underline decoration-2 underline-offset-4"
          >
            LET&apos;S WORK TOGETHER
          </a>
        </div>
      </footer>
    </div>
  );
}
