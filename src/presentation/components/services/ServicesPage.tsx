import Link from "next/link";
import { getActiveServices } from "@/src/data/mock/services.mock";

export function ServicesPage() {
  const services = getActiveServices();

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            บริการของเรา
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            เราให้บริการพัฒนาซอฟต์แวร์ครบวงจร
            ด้วยทีมนักพัฒนามืออาชีพและเทคโนโลยีล่าสุด
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.category.toLowerCase().replace(/\s+/g, "-")}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>

              {/* Title & Category */}
              <div className="mb-4">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {service.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  สิ่งที่คุณจะได้รับ:
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              {service.pricingInfo && (
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        ราคา
                      </div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {service.pricingInfo}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      สอบถาม
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ขั้นตอนการทำงานของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "ปรึกษา & วางแผน",
                description: "รับฟังความต้องการและวิเคราะห์โจทย์",
              },
              {
                step: "2",
                title: "ออกแบบ & พัฒนา",
                description: "ออกแบบ UI/UX และพัฒนาระบบ",
              },
              {
                step: "3",
                title: "ทดสอบ & ปรับปรุง",
                description: "ทดสอบการทำงานและปรับปรุง",
              },
              {
                step: "4",
                title: "ส่งมอบ & สนับสนุน",
                description: "ส่งมอบงานและดูแลหลังการขาย",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            พร้อมเริ่มโปรเจคแล้วหรือยัง?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            ปรึกษาฟรี! ไม่มีค่าใช้จ่าย ไม่ผูกมัด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-colors"
            >
              ติดต่อเราเลย
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg border-2 border-white transition-colors"
            >
              ดูผลงาน
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
