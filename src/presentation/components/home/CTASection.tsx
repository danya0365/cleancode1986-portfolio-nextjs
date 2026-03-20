import { SITE } from "@/src/data/master/site";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          พร้อมเริ่มโปรเจคกับเราแล้วหรือยัง?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          ปรึกษาฟรี! ทีมของเราพร้อมรับฟังและเสนอแนะแนวทางที่ดีที่สุดสำหรับธุรกิจของคุณ
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            รับคำปรึกษาเลย
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg border-2 border-white transition-all"
          >
            ดูผลงานก่อน
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-white">
          <div className="flex items-center justify-center gap-2">
            <span>📧</span>
            <span>{SITE.contact.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📞</span>
            <span>{SITE.contact.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
