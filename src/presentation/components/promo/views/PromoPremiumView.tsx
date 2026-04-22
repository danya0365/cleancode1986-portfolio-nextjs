"use client";

import type { PromoViewModel } from "@/src/presentation/presenters/promo/PromoPresenter";
import { Check, ExternalLink, MessageCircle, Phone, Mail, Share2, ArrowRight, Sparkles, Zap, Shield, X } from "lucide-react";
import Link from "next/link";

interface PromoPremiumViewProps {
  viewModel: PromoViewModel;
}

export function PromoPremiumView({ viewModel }: PromoPremiumViewProps) {
  const { content } = viewModel;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "จ้างทำเว็บ ราคาถูก คุณภาพสูง | CleanCode 1986",
        text: "ทำไมราคาถูก? เพราะเราใช้ AI เขียนโค้ด แต่ควบคุมคุณภาพด้วย AI Skill",
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTJ2NEgyNHYyaDEyVjRoMnYyaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Powered Development
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {content.hero.headline}
          </h1>

          <p className="text-lg md:text-2xl font-medium text-white/90 mb-4 max-w-3xl mx-auto">
            {content.hero.subheadline}
          </p>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            {content.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.hero.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {content.hero.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
              แชร์ให้เพื่อน
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY AFFORDABLE ===== */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {content.whyAffordable.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {content.whyAffordable.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.whyAffordable.items.map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {content.comparison.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {content.comparison.subtitle}
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/3">
                    หัวข้อ
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-bold text-red-500 uppercase tracking-wider w-1/3">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4" />
                      {content.comparison.hireTeamLabel}
                    </div>
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-bold text-green-600 uppercase tracking-wider w-1/3 bg-green-50 dark:bg-green-900/20">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" />
                      {content.comparison.hireUsLabel}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 dark:border-gray-800 ${
                      row.highlight ? "bg-yellow-50/50 dark:bg-yellow-900/10" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 dark:text-red-400">
                      {row.hireTeam}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-green-700 dark:text-green-400 bg-green-50/50 dark:bg-green-900/10">
                      {row.hireUs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {content.comparison.rows.map((row, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 ${
                  row.highlight
                    ? "border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                }`}
              >
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">{row.label}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                    <p className="text-[10px] font-bold text-red-500 uppercase mb-1">จ้างทีม</p>
                    <p className="text-xs text-red-600 dark:text-red-400">{row.hireTeam}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <p className="text-[10px] font-bold text-green-600 uppercase mb-1">จ้างเรา</p>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400">{row.hireUs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Saving Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-bold">{content.comparison.savingNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {content.whatYouGet.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {content.whatYouGet.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whatYouGet.items.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {content.pricing.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.pricing.items.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {item.price}
                  </span>
                  <span className="text-sm text-gray-500">บาท~</span>
                </div>
                {item.note && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            {content.trustSignals.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.trustSignals.items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{item.value}</div>
                <div className="text-sm md:text-base text-white/80 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {content.finalCta.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            {content.finalCta.subtitle}
          </p>

          <Link
            href={content.finalCta.ctaLink}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-10"
          >
            {content.finalCta.ctaText}
            <ArrowRight className="w-6 h-6" />
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={`tel:${content.finalCta.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-5 h-5 text-green-500" />
              <span className="font-medium">{content.finalCta.phone}</span>
            </a>
            <a
              href={`https://line.me/R/ti/p/${content.finalCta.lineId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#06C755] text-white rounded-xl hover:bg-[#05b34d] transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">LINE: {content.finalCta.lineId}</span>
            </a>
            <a
              href={`mailto:${content.finalCta.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
            >
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="font-medium">{content.finalCta.email}</span>
            </a>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] text-white rounded-xl text-sm font-medium hover:bg-[#166fe5] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              แชร์ Facebook
            </a>
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#06C755] text-white rounded-xl text-sm font-medium hover:bg-[#05b34d] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              แชร์ LINE
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-xl text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
            >
              <Share2 className="w-4 h-4" />
              แชร์เพิ่มเติม
            </button>
          </div>

          {/* Shield Badge */}
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Shield className="w-4 h-4" />
            <span>Clean Architecture Certified • AI-Powered Quality</span>
          </div>
        </div>
      </section>
    </div>
  );
}
