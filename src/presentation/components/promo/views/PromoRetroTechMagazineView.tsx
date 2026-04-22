"use client";

import type { PromoViewModel } from "@/src/presentation/presenters/promo/PromoPresenter";
import Link from "next/link";

interface PromoRetroTechMagazineViewProps {
  viewModel: PromoViewModel;
}

export function PromoRetroTechMagazineView({ viewModel }: PromoRetroTechMagazineViewProps) {
  const { content } = viewModel;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "จ้างทำเว็บ ราคาถูก คุณภาพสูง | CleanCode 1986",
        text: content.hero.subheadline,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-gray-900" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* ===== HERO — Magazine Cover ===== */}
      <section className="relative border-b-4 border-double border-gray-900 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4 border-b border-gray-300 pb-4 inline-block">
            ★ SPECIAL EDITION ★ AI-POWERED DEVELOPMENT ★
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            {content.hero.headline}
          </h1>

          <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>

          <p className="text-lg md:text-xl italic text-gray-700 mb-3 max-w-2xl mx-auto">
            &ldquo;{content.hero.subheadline}&rdquo;
          </p>

          <p className="text-sm text-gray-500 mb-10">
            {content.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.hero.ctaLink}
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              ▶ {content.hero.ctaText}
            </Link>
            <button
              onClick={handleShare}
              className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg uppercase tracking-wider hover:bg-gray-900 hover:text-amber-50 transition-colors"
            >
              ✉ แชร์ให้เพื่อน
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY AFFORDABLE — Column Layout ===== */}
      <section className="border-b-4 border-double border-gray-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              {content.whyAffordable.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-3"></div>
            <p className="italic text-gray-600">{content.whyAffordable.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.whyAffordable.items.map((item, i) => (
              <div key={i} className="border-l-4 border-red-600 pl-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-black uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE — Newspaper Style ===== */}
      <section className="border-b-4 border-double border-gray-900 px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              {content.comparison.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-3"></div>
            <p className="italic text-gray-600">{content.comparison.subtitle}</p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block border-2 border-gray-900">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-amber-50">
                  <th className="text-left py-3 px-4 uppercase tracking-wider font-black">หัวข้อ</th>
                  <th className="text-center py-3 px-4 uppercase tracking-wider font-black text-red-400">
                    ✗ {content.comparison.hireTeamLabel}
                  </th>
                  <th className="text-center py-3 px-4 uppercase tracking-wider font-black text-green-400">
                    ✓ {content.comparison.hireUsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-300 ${
                      row.highlight ? "bg-yellow-100" : i % 2 === 0 ? "bg-amber-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 font-bold">{row.label}</td>
                    <td className="py-3 px-4 text-center text-red-700">{row.hireTeam}</td>
                    <td className="py-3 px-4 text-center font-bold text-green-800">{row.hireUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {content.comparison.rows.map((row, i) => (
              <div key={i} className={`border-2 border-gray-900 p-4 ${row.highlight ? "bg-yellow-100" : "bg-white"}`}>
                <p className="font-black uppercase text-sm mb-3 border-b border-gray-300 pb-2">{row.label}</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-bold text-red-700 uppercase mb-1">✗ จ้างทีม</p>
                    <p className="text-red-600">{row.hireTeam}</p>
                  </div>
                  <div>
                    <p className="font-bold text-green-800 uppercase mb-1">✓ จ้างเรา</p>
                    <p className="text-green-700 font-bold">{row.hireUs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 bg-red-600 text-white font-black text-lg uppercase tracking-wider">
              ★ {content.comparison.savingNote} ★
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="border-b-4 border-double border-gray-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              {content.whatYouGet.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-3"></div>
            <p className="italic text-gray-600">{content.whatYouGet.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whatYouGet.items.map((item, i) => (
              <div key={i} className="border-2 border-gray-900 p-5 bg-white text-center hover:bg-yellow-50 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black uppercase tracking-wide text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="border-b-4 border-double border-gray-900 px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              {content.pricing.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-3"></div>
            <p className="italic text-gray-600">{content.pricing.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.pricing.items.map((item, i) => (
              <div key={i} className="border-2 border-gray-900 p-5 hover:bg-amber-50 transition-colors">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-black uppercase tracking-wide text-sm">{item.title}</h3>
                <div className="text-2xl font-black text-red-600 my-2">
                  ฿{item.price}<span className="text-sm text-gray-500">+</span>
                </div>
                {item.note && (
                  <p className="text-xs text-gray-500 italic">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="border-b-4 border-double border-gray-900 px-4 py-16 bg-gray-900 text-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-center mb-10" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            {content.trustSignals.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.trustSignals.items.map((item, i) => (
              <div key={i} className="text-center border border-amber-50/30 p-4">
                <div className="text-3xl md:text-4xl font-black text-red-400 mb-1">{item.value}</div>
                <div className="text-xs uppercase tracking-wider text-amber-50/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-3" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            {content.finalCta.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="italic text-gray-600 mb-10">{content.finalCta.subtitle}</p>

          <Link
            href={content.finalCta.ctaLink}
            className="inline-block px-10 py-5 bg-red-600 text-white font-black text-xl uppercase tracking-wider hover:bg-red-700 transition-colors mb-10"
          >
            ▶ {content.finalCta.ctaText}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <a href={`tel:${content.finalCta.phone}`} className="font-bold text-gray-900 hover:text-red-600 transition-colors underline decoration-2 decoration-red-600 underline-offset-4">
              ☎ {content.finalCta.phone}
            </a>
            <a
              href={`https://line.me/R/ti/p/${content.finalCta.lineId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-900 hover:text-red-600 transition-colors underline decoration-2 decoration-red-600 underline-offset-4"
            >
              LINE: {content.finalCta.lineId}
            </a>
            <a href={`mailto:${content.finalCta.email}`} className="font-bold text-gray-900 hover:text-red-600 transition-colors underline decoration-2 decoration-red-600 underline-offset-4">
              ✉ {content.finalCta.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs mb-10">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-gray-900 font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-amber-50 transition-colors"
            >
              Share Facebook
            </a>
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-gray-900 font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-amber-50 transition-colors"
            >
              Share LINE
            </a>
            <button
              onClick={handleShare}
              className="px-4 py-2 border-2 border-gray-900 font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-amber-50 transition-colors"
            >
              Share More
            </button>
          </div>

          <div className="border-t-2 border-double border-gray-900 pt-4 text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} CleanCode 1986 — AI-Powered Quality Magazine
          </div>
        </div>
      </section>
    </div>
  );
}
