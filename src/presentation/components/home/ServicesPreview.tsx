import Link from "next/link";
import type { Service } from "@/src/data/mock/services.mock";

interface ServicesPreviewProps {
  services: Service[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden border-t border-gray-100 dark:border-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 dark:bg-purple-900/10 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 rounded-full">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              บริการระดับโปรเฟสชันนัล
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 drop-shadow-sm">
            บริการของเรา
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            เราพร้อมช่วยคุณสร้างโซลูชันดิจิทัลที่ตอบโจทย์ ด้วยเทคโนโลยีใหม่ล่าสุด
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col p-8 sm:p-10 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
              
              {/* Glowing Icon Container */}
              <div className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-inner border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out z-10">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-4xl relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium relative z-10 flex-1">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 relative z-10">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-start group-hover:translate-x-1 transition-transform duration-300"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm border border-white/50 dark:border-gray-800">
                      <span className="text-[10px] font-bold">✓</span>
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing (Optional) */}
              {service.pricingInfo && (
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800/80 relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-lg shadow-sm">
                    {service.pricingInfo}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="group inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1"
          >
            เจาะลึกบริการทั้งหมด
            <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
