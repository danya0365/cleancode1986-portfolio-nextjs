"use client";

import { SITE } from "@/src/data/master/site";

export function TermsPremiumView() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-purple-50/80 via-white to-blue-50/80 dark:from-purple-900/20 dark:via-gray-950 dark:to-blue-900/20 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-48 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              ข้อกำหนดการใช้งาน
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ข้อกำหนดและเงื่อนไขในการเข้าถึงและใช้งานแพลตฟอร์มของเรา
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            อัปเดตล่าสุด: {lastUpdated}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-purple-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">1</span>
                การยอมรับข้อกำหนด
              </h2>
              <p>
                การเข้าถึงและใช้งานเว็บไซต์ {SITE.company.name} ของเรา ถือว่าท่านตกลงและยอมรับที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารฉบับนี้ หากท่านไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณางดการใช้งานเว็บไซต์ของเราทันที
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
                ทรัพย์สินทางปัญญา
              </h2>
              <p>
                เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ, กราฟิก, โลโก้, รูปภาพ, รูปแบบการดีไซน์ และซอฟต์แวร์ เป็นทรัพย์สินของ {SITE.company.name} แต่เพียงผู้เดียว ไม่อนุญาตให้คัดลอก ทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">3</span>
                การใช้งานที่ได้รับอนุญาต และ ข้อห้าม
              </h2>
              <p className="mb-2">ผู้ใช้งานตกลงที่จะไม่กระทำการดังต่อไปนี้:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ใช้งานเว็บไซต์ในทางที่ขัดต่อกฎหมาย ขัดต่อศีลธรรม หรือละเมิดสิทธิ์ของผู้อื่น</li>
                <li>พยายามเจาะระบบ (Hack) หรือกระทำการใดๆ ที่อาจก่อให้เกิดความเสียหายแก่เซิร์ฟเวอร์ และข้อมูลของเรา</li>
                <li>อัปโหลดสคริปต์ ดัดแปลง หรือก่อกวนการทำงานของเว็บไซต์อย่างไม่เหมาะสม</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">4</span>
                ข้อจำกัดความรับผิดชอบ
              </h2>
              <p>
                ทางเว็บไซต์จะไม่รับผิดชอบต่อความเสียหายใดๆ ทั้งทางตรง ทางอ้อม หรือที่เกิดจากเหตุสุดวิสัย อันมาจากการใช้งานเว็บไซต์ หรือการที่ไม่สามารถเข้าถึงเว็บไซต์ได้ ข้อมูลต่างๆ บนเว็บไซต์อาจถูกปรับปรุงเปลี่ยนแปลงได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">5</span>
                การเปลี่ยนแปลงข้อกำหนด
              </h2>
              <p>
                เราขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง หรือปรับปรุงข้อกำหนดการใช้งานนี้ได้ตลอดเวลาตามความเหมาะสม โดยท่านมีหน้าที่ตรวจสอบการเปลี่ยนแปลงเป็นระยะ การที่ท่านยังคงใช้งานเว็บไซต์ต่อไปหลังจากการเปลี่ยนแปลง ถือว่าท่านรับทราบและตกลงยอมรับเงื่อนไขใหม่แล้ว
              </p>
            </section>

            <section className="pt-6 mt-8 border-t border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                มีข้อสงสัยเพิ่มเติม?
              </h2>
              <p>
                หากคุณมีคำถามหรือข้อสงสัยใดๆ เกี่ยวกับข้อกำหนดการใช้งาน สามารถติดต่อทีมงานได้ที่:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-2 text-sm md:text-base">
                <p><strong>อีเมล:</strong> {SITE.contact.email}</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
