import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { SITE } from "@/src/data/master/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${SITE.title}`,
  description: "นโยบายความเป็นส่วนตัวสำหรับผู้ใช้งานเว็บไซต์ Clean Code 1986",
};

export default function PrivacyPage() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <MainLayout>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-blue-900/20 dark:via-gray-950 dark:to-purple-900/20 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-48 -left-24 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                นโยบายความเป็นส่วนตัว
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              ข้อตกลงและเงื่อนไขการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณ
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              อัปเดตล่าสุด: {lastUpdated}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-12">
            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">1</span>
                  บทนำ
                </h2>
                <p>
                  ยินดีต้อนรับสู่เว็บไซต์ {SITE.company.name} นโยบายความเป็นส่วนตัวนี้จัดทำขึ้นเพื่อแจ้งให้คุณทราบถึงวิธีการที่เราเก็บรวบรวม ใช้งาน และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อคุณเข้าชมและใช้บริการเว็บไซต์ของเรา
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">2</span>
                  ข้อมูลที่เราเก็บรวบรวม
                </h2>
                <p className="mb-2">เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ข้อมูลระบุตัวตน:</strong> เช่น ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์ (เมื่อคุณรับคำปรึกษา)</li>
                  <li><strong>ข้อมูลทางเทคนิค:</strong> เช่น หมายเลข IP, ชนิดของเบราว์เซอร์, เวลาที่เข้าชมเว็บไซต์ และพฤติกรรมการใช้งาน</li>
                  <li><strong>ข้อมูลการใช้งาน:</strong> เช่น ข้อมูลที่เกี่ยวกับการใช้งานเว็บไซต์และการโต้ตอบต่างๆ กับระบบของเรา</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">3</span>
                  วัตถุประสงค์ในการใช้ข้อมูล
                </h2>
                <p className="mb-2">เรานำข้อมูลที่เก็บรวบรวมไปใช้เพื่อวัตถุประสงค์ต่อไปนี้:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>เพื่อให้บริการและดูแลระบบเว็บไซต์ให้สามารถทำงานได้อย่างมีประสิทธิภาพ</li>
                  <li>เพื่อติดต่อกลับและตอบข้อซักถามของคุณผ่านช่องทางติดต่อต่างๆ</li>
                  <li>เพื่อปรับปรุง ปรับแต่ง และวิเคราะห์ลักษณะการใช้งานให้ตอบโจทย์ผู้ใช้มากขึ้น</li>
                  <li>เพื่อปฏิบัติตามข้อกำหนดทางกฎหมายที่เกี่ยวข้อง</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">4</span>
                  การเปิดเผยข้อมูลให้บุคคลที่สาม
                </h2>
                <p>
                  เราไม่มีนโยบายการขาย แลกเปลี่ยน หรือส่งต่อข้อมูลส่วนบุคคลของคุณไปยังบุคคลภายนอกโดยไม่ได้รับอนุญาต ยกเว้นในกรณีที่มีความจำเป็นทางกฎหมาย หรือเป็นพันธมิตรที่ช่วยในการให้บริการเว็บไซต์ (ซึ่งพันธมิตรเหล่านั้นต้องตกลงที่จะรักษาข้อมูลนี้เป็นความลับอย่างเคร่งครัด)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">5</span>
                  ความปลอดภัยของข้อมูล
                </h2>
                <p>
                  เราให้ความสำคัญกับความปลอดภัยของข้อมูลของคุณเป็นอย่างยิ่ง และได้ใช้มาตรการทางเทคนิคและการบริหารจัดการที่เหมาะสม เพื่อป้องกันการเข้าถึง นำไปใช้ หรือเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต
                </p>
              </section>

              <section className="pt-6 mt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  รับคำปรึกษา
                </h2>
                <p>
                  หากคุณมีคำถามหรือข้อสงสัยใดๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ สามารถรับคำปรึกษาได้ที่:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-2 text-sm md:text-base">
                  <p><strong>อีเมล:</strong> {SITE.contact.email}</p>
                  <p><strong>เบอร์โทรศัพท์:</strong> {SITE.contact.phone}</p>
                  <p><strong>ที่อยู่:</strong> {SITE.contact.address}</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
