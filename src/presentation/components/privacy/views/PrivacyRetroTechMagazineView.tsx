"use client";

import { SITE } from "@/src/data/master/site";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";

export function PrivacyRetroTechMagazineView() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black font-sans pb-24">
      {/* Brutalist Header Area */}
      <div className="border-b-8 border-black bg-[#00FFFF] px-6 py-16 md:px-12 md:py-24 relative overflow-hidden">
        {/* Halftone dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <RetroHeading className="text-5xl md:text-7xl mb-6">
            PRIVACY
            <br />
            POLICY
          </RetroHeading>
          
          <div className="bg-white border-4 border-black p-4 inline-block transform -rotate-1 shadow-[8px_8px_0_0_#000]">
            <p className="font-bold uppercase tracking-widest text-lg">
              WE KEEP YOUR SECRETS
            </p>
          </div>
          <p className="mt-8 font-bold uppercase tracking-widest text-white bg-black px-4 py-2 border-4 border-[#FF00FF] shadow-[4px_4px_0_0_#FF00FF] transform rotate-1">
            UPDATED: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_0_#000] relative">
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FF00FF] border-4 border-black rounded-full shadow-[4px_4px_0_0_#000] flex items-center justify-center font-black animate-spin-slow">?</div>

          <div className="space-y-12 text-lg font-medium leading-relaxed">
            
            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-[#00FFFF] border-2 border-black text-black font-black flex items-center justify-center hidden md:flex transform rotate-6">1</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                01_ INTRODUCTION
              </h2>
              <p className="bg-gray-100 p-4 border-2 border-black border-dashed">
                ยินดีต้อนรับสู่เว็บไซต์ {SITE.company.name} นโยบายความเป็นส่วนตัวนี้จัดทำขึ้นเพื่อแจ้งให้คุณทราบถึงวิธีการที่เราเก็บรวบรวม ใช้งาน และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อคุณเข้าชมและใช้บริการเว็บไซต์ของเรา
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-[#00FFFF] border-2 border-black text-black font-black flex items-center justify-center hidden md:flex transform -rotate-6">2</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                02_ DATA COLLECTION
              </h2>
              <p className="mb-4">เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#39FF14] font-black text-xl">✓</span>
                  <span><strong>ข้อมูลระบุตัวตน:</strong> เช่น ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์ (เมื่อคุณรับคำปรึกษา)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#39FF14] font-black text-xl">✓</span>
                  <span><strong>ข้อมูลทางเทคนิค:</strong> เช่น หมายเลข IP, ชนิดของเบราว์เซอร์, เวลาที่เข้าชมเว็บไซต์ และพฤติกรรมการใช้งาน</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#39FF14] font-black text-xl">✓</span>
                  <span><strong>ข้อมูลการใช้งาน:</strong> เช่น ข้อมูลที่เกี่ยวกับการใช้งานเว็บไซต์และการโต้ตอบต่างๆ กับระบบของเรา</span>
                </li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-[#00FFFF] border-2 border-black text-black font-black flex items-center justify-center hidden md:flex transform -rotate-12">3</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                03_ DATA USAGE
              </h2>
              <p className="mb-4">เรานำข้อมูลที่เก็บรวบรวมไปใช้เพื่อวัตถุประสงค์ต่อไปนี้:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>เพื่อให้บริการและดูแลระบบเว็บไซต์ให้สามารถทำงานได้อย่างมีประสิทธิภาพ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>เพื่อติดต่อกลับและตอบข้อซักถามของคุณผ่านช่องทางติดต่อต่างๆ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>เพื่อปรับปรุง ปรับแต่ง และวิเคราะห์ลักษณะการใช้งานให้ตอบโจทย์ผู้ใช้มากขึ้น</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>เพื่อปฏิบัติตามข้อกำหนดทางกฎหมายที่เกี่ยวข้อง</span>
                </li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-[#00FFFF] border-2 border-black text-black font-black flex items-center justify-center hidden md:flex transform rotate-12">4</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                04_ DISCLOSURE
              </h2>
              <p>
                เราไม่มีนโยบายการขาย แลกเปลี่ยน หรือส่งต่อข้อมูลส่วนบุคคลของคุณไปยังบุคคลภายนอกโดยไม่ได้รับอนุญาต ยกเว้นในกรณีที่มีความจำเป็นทางกฎหมาย หรือเป็นพันธมิตรที่ช่วยในการให้บริการเว็บไซต์ (ซึ่งพันธมิตรเหล่านั้นต้องตกลงที่จะรักษาข้อมูลนี้เป็นความลับอย่างเคร่งครัด)
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-[#00FFFF] border-2 border-black text-black font-black flex items-center justify-center hidden md:flex transform -rotate-12">5</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                05_ SECURITY
              </h2>
              <p>
                เราให้ความสำคัญกับความปลอดภัยของข้อมูลของคุณเป็นอย่างยิ่ง และได้ใช้มาตรการทางเทคนิคและการบริหารจัดการที่เหมาะสม เพื่อป้องกันการเข้าถึง นำไปใช้ หรือเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต
              </p>
            </section>

          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-[#FF00FF] border-4 border-black p-8 shadow-[8px_8px_0_0_#39FF14] transform -rotate-1 text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            REACH OUT
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white border-2 border-black p-4 font-bold text-black flex-1">
              EMAIL: {SITE.contact.email}
            </div>
            <div className="bg-black border-2 border-[#39FF14] p-4 font-bold text-[#39FF14] flex-1">
              PHONE: {SITE.contact.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
