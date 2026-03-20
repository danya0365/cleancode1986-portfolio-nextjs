import { SITE } from "@/src/data/master/site";
import Link from "next/link";

import { XRayWrapper } from "../ui/XRayWrapper";

export function CTASection() {
  const codeSnippet = `
// CTASection.tsx
export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="absolute w-[800px] h-[800px] bg-indigo-600/30 blur-[150px]" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-xl">
          ธุรกิจของคุณพร้อมทะยานสู่จุดสูงสุดแล้วหรือยัง?
        </h2>
        
        {/* Modern Interactive Buttons */}
        <div className="flex gap-5 justify-center mb-16">
          <Link href="/contact" className="group bg-white text-gray-900 rounded-2xl 
                                           hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
            เริ่มปรึกษาโปรเจค →
          </Link>
          <Link href="/portfolio" className="bg-white/5 backdrop-blur-xl border-white/20">
            แวะชมผลงานก่อน
          </Link>
        </div>
      </div>
    </section>
  );
}
`.trim();

  return (
    <XRayWrapper componentName="CTASection.tsx" codeSnippet={codeSnippet}>
      <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-gray-900 dark:bg-black">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-indigo-600/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none transform -translate-x-1/2 translate-y-1/3" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-[length:32px_32px] pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Decorative Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
          <span className="text-sm font-bold text-indigo-200 tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            เปิดรับโปรเจคใหม่
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-xl leading-tight">
          ธุรกิจของคุณพร้อม<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">ทะยานสู่จุดสูงสุด</span><br className="hidden sm:block" />แล้วหรือยัง?
        </h2>
        
        <p className="text-lg md:text-2xl text-indigo-100/80 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          ปรึกษาฟรี! ทีมวิศวกรซอฟต์แวร์ของเราพร้อมรับฟังและสร้าง<br className="hidden sm:block" /> Masterpiece ประจำองค์กรของคุณให้เป็นจริง
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          {/* Primary Button */}
          <Link
            href="/contact"
            className="group relative inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg flex items-center">
              เริ่มปรึกษาโปรเจค
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </span>
          </Link>

          {/* Secondary Button */}
          <Link
            href="/portfolio"
            className="group inline-flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-bold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="text-lg">แวะชมผลงานก่อน</span>
          </Link>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${SITE.contact.email}`}
            className="group flex items-center gap-3 px-5 py-2.5 bg-gray-900/50 hover:bg-gray-800 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-inner shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
              {SITE.contact.email}
            </span>
          </a>
          
          <a 
            href={`tel:${SITE.contact.phone}`}
            className="group flex items-center gap-3 px-5 py-2.5 bg-gray-900/50 hover:bg-gray-800 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-inner"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
              {SITE.contact.phone}
            </span>
          </a>
        </div>
      </div>
      </section>
    </XRayWrapper>
  );
}
