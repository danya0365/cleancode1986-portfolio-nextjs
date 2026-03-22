"use client";

import React from "react";
import Link from "next/link";
import { SITE } from "@/src/data/master/site";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export function MainTerminalTemplate({ children }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#33ff00] font-mono selection:bg-[#33ff00]/30 selection:text-black">
      {/* Intense CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[200] grid mix-blend-overlay
        bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] 
        bg-[length:100%_4px,3px_100%] opacity-40 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" 
      />
      
      {/* Terminal Hacker Navbar */}
      <header className="border-b-2 border-[#33ff00]/40 p-4 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 shadow-[0_4px_30px_rgba(51,255,0,0.1)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter drop-shadow-[0_0_8px_rgba(51,255,0,0.8)]">
            <span className="text-white">&gt;_</span> CLEAN_CODE_<span className="animate-pulse">1986</span>
          </Link>
          <nav className="hidden md:flex gap-6 uppercase text-sm font-bold tracking-widest">
            <Link href="/portfolio" className={`hover:bg-[#33ff00] hover:text-black transition-colors px-3 py-1 border hover:border-[#33ff00] hover:shadow-[0_0_15px_rgba(51,255,0,0.5)] ${isActive('/portfolio') ? 'bg-[#33ff00] text-black border-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.5)]' : 'border-transparent'}`}>[PORTFOLIO]</Link>
            <Link href="/services" className={`hover:bg-[#33ff00] hover:text-black transition-colors px-3 py-1 border hover:border-[#33ff00] hover:shadow-[0_0_15px_rgba(51,255,0,0.5)] ${isActive('/services') ? 'bg-[#33ff00] text-black border-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.5)]' : 'border-transparent'}`}>[SERVICES]</Link>
            <Link href="/about" className={`hover:bg-[#33ff00] hover:text-black transition-colors px-3 py-1 border hover:border-[#33ff00] hover:shadow-[0_0_15px_rgba(51,255,0,0.5)] ${isActive('/about') ? 'bg-[#33ff00] text-black border-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.5)]' : 'border-transparent'}`}>[ABOUT]</Link>
            <Link href="/contact" className={`hover:bg-[#33ff00] hover:text-black transition-colors px-3 py-1 border hover:border-[#33ff00] hover:shadow-[0_0_15px_rgba(51,255,0,0.5)] ${isActive('/contact') ? 'bg-[#33ff00] text-black border-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.5)]' : 'border-transparent'}`}>[CONTACT]</Link>
          </nav>
        </div>
      </header>

      {/* Main Content with Aggressive CSS Filter for Terminal Look */}
      <main className="flex-1 relative overflow-hidden">
        {/* Terminal Header Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-xs opacity-70 mb-4 hidden sm:block">
          <p>Login: admin@192.168.1.1</p>
          <p>System: CleanCodeOS v2.4.1 (Linux x86_64)</p>
          <p>Executing primary payload...</p>
        </div>

        <div className="pb-20">
          {children}
        </div>
      </main>

      {/* Terminal Hacker Footer */}
      <footer className="border-t-2 border-[#33ff00]/40 p-6 text-center text-xs md:text-sm bg-[#050505] z-50 relative shadow-[0_-4px_30px_rgba(51,255,0,0.05)]">
        <p>SYSTEM ONLINE. {SITE.title} (C) {new Date().getFullYear()}</p>
        <p className="opacity-50 mt-2 animate-pulse">CONNECTION SECURE. ENCRYPTION 256-BIT.</p>
        <div className="mt-4 flex justify-center gap-4 opacity-70">
          <span>MEM: 1024MB</span>
          <span>CPU: 3%</span>
          <span>NET: UP</span>
        </div>
        <div className="mt-4 flex justify-center gap-6 text-[10px] md:text-xs">
          <Link href="/terms" className="hover:text-white hover:underline">[TERMS_OF_SERVICE]</Link>
          <Link href="/privacy" className="hover:text-white hover:underline">[PRIVACY_POLICY]</Link>
        </div>
      </footer>
    </div>
  );
}
