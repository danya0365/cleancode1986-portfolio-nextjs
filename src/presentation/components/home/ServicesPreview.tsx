import Link from "next/link";
import type { Service } from "@/src/data/mock/services.mock";

interface ServicesPreviewProps {
  services: Service[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            บริการของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            เราพร้อมช่วยคุณสร้างโซลูชันดิจิทัลที่ตอบโจทย์
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              {service.pricingInfo && (
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {service.pricingInfo}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            ดูบริการทั้งหมด
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
