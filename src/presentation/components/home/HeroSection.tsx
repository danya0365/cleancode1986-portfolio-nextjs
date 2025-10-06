import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8">
            <span className="mr-2">✨</span>
            <span>มืออาชีพ เชื่อถือได้ คุณภาพสูง</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            พัฒนา
            <span className="text-blue-600 dark:text-blue-400"> เว็บไซต์ </span>
            และ
            <span className="text-blue-600 dark:text-blue-400"> แอปพลิเคชัน</span>
            <br />
            ที่ทรงพลังและทันสมัย
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Clean Code 1986 - ทีมนักพัฒนามืออาชีพพร้อมสร้างโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ
            <br />
            ด้วย Next.js, React, React Native และเทคโนโลยีล่าสุด
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              ดูผลงานของเรา
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              เทคโนโลยีที่เราใช้
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {["⚡ Next.js", "⚛️ React", "📱 React Native", "📘 TypeScript", "🎨 Tailwind", "🐘 PostgreSQL"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
