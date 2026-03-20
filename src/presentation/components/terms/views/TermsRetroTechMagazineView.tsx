"use client";

import { SITE } from "@/src/data/master/site";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";

export function TermsRetroTechMagazineView() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black font-sans pb-24">
      {/* Brutalist Header Area */}
      <div className="border-b-8 border-black bg-[#FF00FF] px-6 py-16 md:px-12 md:py-24 relative overflow-hidden">
        {/* Halftone dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <RetroHeading className="text-5xl md:text-7xl mb-6">
            TERMS
            <br />
            OF
            <br />
            SERVICE
          </RetroHeading>
          
          <div className="bg-white border-4 border-black p-4 inline-block transform rotate-2 shadow-[8px_8px_0_0_#000]">
            <p className="font-bold uppercase tracking-widest text-lg">
              RULES OF THE GAME
            </p>
          </div>
          <p className="mt-8 font-bold uppercase tracking-widest text-black bg-[#00FFFF] px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] transform -rotate-1">
            UPDATED: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[16px_16px_0_0_#000] relative">
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#39FF14] border-4 border-black rounded-full shadow-[4px_4px_0_0_#000] flex items-center justify-center font-black animate-spin-slow">!</div>

          <div className="space-y-12 text-lg font-medium leading-relaxed">
            
            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-black text-white font-black flex items-center justify-center hidden md:flex transform -rotate-12">1</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                01_ ACCEPTANCE
              </h2>
              <p className="bg-gray-100 p-4 border-2 border-black border-dashed">
                การเข้าถึงและใช้งานเว็บไซต์ {SITE.company.name} ของเรา ถือว่าท่านตกลงและยอมรับที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารฉบับนี้ หากท่านไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณางดการใช้งานเว็บไซต์ของเราทันที
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-black text-white font-black flex items-center justify-center hidden md:flex transform rotate-6">2</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                02_ INTELLECTUAL PROPERTY
              </h2>
              <p>
                เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ, กราฟิก, โลโก้, รูปภาพ, รูปแบบการดีไซน์ และซอฟต์แวร์ เป็นทรัพย์สินของ {SITE.company.name} แต่เพียงผู้เดียว ไม่อนุญาตให้คัดลอก ทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-black text-white font-black flex items-center justify-center hidden md:flex transform -rotate-6">3</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                03_ CODE OF CONDUCT
              </h2>
              <p className="mb-4">ผู้ใช้งานตกลงที่จะไม่กระทำการดังต่อไปนี้:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>ใช้งานเว็บไซต์ในทางที่ขัดต่อกฎหมาย ขัดต่อศีลธรรม หรือละเมิดสิทธิ์ของผู้อื่น</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>พยายามเจาะระบบ (Hack) หรือกระทำการใดๆ ที่อาจก่อให้เกิดความเสียหายแก่เซิร์ฟเวอร์ และข้อมูลของเรา</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF] font-black text-xl">►</span>
                  <span>อัปโหลดสคริปต์ ดัดแปลง หรือก่อกวนการทำงานของเว็บไซต์อย่างไม่เหมาะสม</span>
                </li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-black text-white font-black flex items-center justify-center hidden md:flex transform rotate-12">4</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                04_ LIMITATION OF LIABILITY
              </h2>
              <p>
                ทางเว็บไซต์จะไม่รับผิดชอบต่อความเสียหายใดๆ ทั้งทางตรง ทางอ้อม หรือที่เกิดจากเหตุสุดวิสัย อันมาจากการใช้งานเว็บไซต์ หรือการที่ไม่สามารถเข้าถึงเว็บไซต์ได้ ข้อมูลต่างๆ บนเว็บไซต์อาจถูกปรับปรุงเปลี่ยนแปลงได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-black text-white font-black flex items-center justify-center hidden md:flex transform -rotate-12">5</div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">
                05_ MODIFICATION
              </h2>
              <p>
                เราขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง หรือปรับปรุงข้อกำหนดการใช้งานนี้ได้ตลอดเวลาตามความเหมาะสม โดยท่านมีหน้าที่ตรวจสอบการเปลี่ยนแปลงเป็นระยะ การที่ท่านยังคงใช้งานเว็บไซต์ต่อไปหลังจากการเปลี่ยนแปลง ถือว่าท่านรับทราบและตกลงยอมรับเงื่อนไขใหม่แล้ว
              </p>
            </section>

          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0_0_#FF00FF] transform rotate-1">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            GOT QUESTIONS?
          </h2>
          <div className="bg-white border-2 border-black p-4 font-bold text-xl inline-block max-w-full overflow-hidden text-ellipsis">
            {SITE.contact.email}
          </div>
        </div>
      </div>
    </div>
  );
}
