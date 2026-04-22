"use client";

import type { PromoViewModel } from "@/src/presentation/presenters/promo/PromoPresenter";
import Link from "next/link";

interface PromoTerminalViewProps {
  viewModel: PromoViewModel;
}

export function PromoTerminalView({ viewModel }: PromoTerminalViewProps) {
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
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* ===== HERO ===== */}
      <section className="border-b border-green-900 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-green-600 text-sm">
            <span className="animate-pulse">█</span> cleancode@ai:~$ cat
            /promo/hero.md
          </div>
          <pre className="text-sm md:text-base text-green-300 mb-2">
            {`# ========================================`}
          </pre>
          <h1 className="text-2xl md:text-4xl font-bold text-green-300 mb-4">
            # {content.hero.headline}
          </h1>
          <p className="text-green-500 text-sm md:text-base mb-2">
            &gt; {content.hero.subheadline}
          </p>
          <p className="text-green-700 text-sm mb-8">
            &gt; {content.hero.tagline}
          </p>
          <pre className="text-sm md:text-base text-green-300 mb-6">
            {`# ========================================`}
          </pre>
          <div className="flex flex-wrap gap-4">
            <Link
              href={content.hero.ctaLink}
              className="inline-block px-6 py-3 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all"
            >
              [ENTER] {content.hero.ctaText}
            </Link>
            <button
              onClick={handleShare}
              className="inline-block px-6 py-3 border-2 border-green-700 text-green-600 hover:bg-green-700 hover:text-black font-bold transition-all"
            >
              [SHARE] แชร์ให้เพื่อน
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY AFFORDABLE ===== */}
      <section className="border-b border-green-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ cat /promo/why-affordable.md
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-green-300 mb-2">
            ## {content.whyAffordable.title}
          </h2>
          <p className="text-green-600 text-sm mb-8">
            {`// ${content.whyAffordable.subtitle}`}
          </p>

          <div className="space-y-6">
            {content.whyAffordable.items.map((item, i) => (
              <div key={i} className="border border-green-900 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-sm">[$]</span>
                  <div>
                    <h3 className="text-green-300 font-bold mb-1">
                      {item.icon} {item.title}
                    </h3>
                    <p className="text-green-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="border-b border-green-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ diff --compare team_hire.json ai_hire.json
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-green-300 mb-2">
            ## {content.comparison.title}
          </h2>
          <p className="text-green-600 text-sm mb-8">
            {`// ${content.comparison.subtitle}`}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-green-800">
                  <th className="text-left py-3 px-2 text-green-600">FIELD</th>
                  <th className="text-left py-3 px-2 text-red-500">
                    - {content.comparison.hireTeamLabel}
                  </th>
                  <th className="text-left py-3 px-2 text-green-400">
                    + {content.comparison.hireUsLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-green-900/50">
                    <td className="py-3 px-2 text-green-500 font-bold">
                      {row.label}
                    </td>
                    <td className="py-3 px-2 text-red-500/80">
                      - {row.hireTeam}
                    </td>
                    <td className="py-3 px-2 text-green-400">+ {row.hireUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-3 border border-green-500 bg-green-900/20">
            <span className="text-green-300 font-bold">[RESULT]</span>{" "}
            <span className="text-green-400">
              {content.comparison.savingNote}
            </span>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="border-b border-green-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ ls -la /deliverables/
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-green-300 mb-2">
            ## {content.whatYouGet.title}
          </h2>
          <p className="text-green-600 text-sm mb-8">
            {`// ${content.whatYouGet.subtitle}`}
          </p>

          <div className="space-y-3">
            {content.whatYouGet.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 border border-green-900/50 hover:border-green-700 transition-colors"
              >
                <span className="text-green-500 shrink-0">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div>
                  <span className="text-green-300 font-bold">
                    {item.icon} {item.title}
                  </span>
                  <span className="text-green-700"> — {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="border-b border-green-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ cat /pricing/packages.json
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-green-300 mb-2">
            ## {content.pricing.title}
          </h2>
          <p className="text-green-600 text-sm mb-8">
            {`// ${content.pricing.subtitle}`}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.pricing.items.map((item, i) => (
              <div
                key={i}
                className="border border-green-800 p-4 hover:border-green-500 transition-colors"
              >
                <div className="text-green-600 text-xs mb-2">package[{i}]</div>
                <div className="text-xl mb-1">{item.icon}</div>
                <h3 className="text-green-300 font-bold">{item.title}</h3>
                <div className="text-green-400 text-2xl font-bold my-2">
                  ฿{item.price}
                  <span className="text-green-700 text-sm">+</span>
                </div>
                {item.note && (
                  <p className="text-green-700 text-xs">{`// ${item.note}`}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="border-b border-green-900 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ cat /stats/summary.json
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-green-300 mb-8 text-center">
            ## {content.trustSignals.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.trustSignals.items.map((item, i) => (
              <div key={i} className="border border-green-800 p-4 text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-green-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-600 text-sm mb-6">
            cleancode@ai:~$ ./contact --now
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-4">
            ## {content.finalCta.title}
          </h2>
          <p className="text-green-600 mb-8">{content.finalCta.subtitle}</p>

          <Link
            href={content.finalCta.ctaLink}
            className="inline-block px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold text-lg transition-all mb-8"
          >
            [ENTER] {content.finalCta.ctaText}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={`tel:${content.finalCta.phone}`}
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              [TEL] {content.finalCta.phone}
            </a>
            <a
              href={`https://line.me/R/ti/p/${content.finalCta.lineId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              [LINE] {content.finalCta.lineId}
            </a>
            <a
              href={`mailto:${content.finalCta.email}`}
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              [MAIL] {content.finalCta.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-800 text-green-600 hover:bg-green-900 transition-colors"
            >
              [FB] Share
            </a>
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-800 text-green-600 hover:bg-green-900 transition-colors"
            >
              [LINE] Share
            </a>
            <button
              onClick={handleShare}
              className="px-4 py-2 border border-green-800 text-green-600 hover:bg-green-900 transition-colors"
            >
              [MORE] Share
            </button>
          </div>

          <div className="mt-10 text-green-800 text-xs">
            © {new Date().getFullYear()} CleanCode 1986 • Clean Architecture
            Certified • AI-Powered
          </div>
        </div>
      </section>
    </div>
  );
}
