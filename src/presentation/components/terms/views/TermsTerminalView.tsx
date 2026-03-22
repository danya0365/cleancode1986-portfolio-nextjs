"use client";

import { SITE } from "@/src/data/master/site";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function TermsTerminalView() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-4 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">System Requirements & Licensing</h1>
          <p className="text-green-700 text-sm">Reading core constraints and legal directives...</p>
        </div>

        {/* Global Config Output */}
        <TerminalBlock command="cat /etc/terms_and_conditions.txt | less" path="~">
          <div className="text-green-400 bg-black border border-green-900/50 p-6 text-sm sm:text-base leading-relaxed overflow-x-auto">
            <div className="text-center font-bold text-lg mb-2 text-amber-400"># ข้อกำหนดการใช้งาน</div>
            <div className="text-center text-green-700 mb-8">LAST_UPDATED=&quot;{lastUpdated}&quot;</div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[1] การยอมรับข้อกำหนด</span><br/>
              การเข้าถึงและใช้งานเว็บไซต์ {SITE.company.name} ของเรา ถือว่าท่านตกลงและยอมรับที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ในเอกสารฉบับนี้ หากท่านไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณางดการใช้งานเว็บไซต์ของเราทันที
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[2] ทรัพย์สินทางปัญญา</span><br/>
              เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ, กราฟิก, โลโก้, รูปภาพ, รูปแบบการดีไซน์ และซอฟต์แวร์ เป็นทรัพย์สินของ {SITE.company.name} แต่เพียงผู้เดียว ไม่อนุญาตให้คัดลอก ทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[3] การใช้งานที่ได้รับอนุญาต และ ข้อห้าม</span><br/>
              ผู้ใช้งานตกลงที่จะไม่กระทำการดังต่อไปนี้:<br/>
              <span className="text-green-700">&gt;</span> ใช้งานเว็บไซต์ในทางที่ขัดต่อกฎหมาย ขัดต่อศีลธรรม หรือละเมิดสิทธิ์ของผู้อื่น<br/>
              <span className="text-green-700">&gt;</span> พยายามเจาะระบบ (Hack) หรือกระทำการใดๆ ที่อาจก่อให้เกิดความเสียหายแก่เซิร์ฟเวอร์ และข้อมูลของเรา<br/>
              <span className="text-green-700">&gt;</span> อัปโหลดสคริปต์ ดัดแปลง หรือก่อกวนการทำงานของเว็บไซต์อย่างไม่เหมาะสม
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[4] ข้อจำกัดความรับผิดชอบ</span><br/>
              ทางเว็บไซต์จะไม่รับผิดชอบต่อความเสียหายใดๆ ทั้งทางตรง ทางอ้อม หรือที่เกิดจากเหตุสุดวิสัย อันมาจากการใช้งานเว็บไซต์ หรือการที่ไม่สามารถเข้าถึงเว็บไซต์ได้ ข้อมูลต่างๆ บนเว็บไซต์อาจถูกปรับปรุงเปลี่ยนแปลงได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
            </div>

            <div className="mb-8">
              <span className="text-amber-500 font-bold">[5] การเปลี่ยนแปลงข้อกำหนด</span><br/>
              เราขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง หรือปรับปรุงข้อกำหนดการใช้งานนี้ได้ตลอดเวลาตามความเหมาะสม โดยท่านมีหน้าที่ตรวจสอบการเปลี่ยนแปลงเป็นระยะ การที่ท่านยังคงใช้งานเว็บไซต์ต่อไปหลังจากการเปลี่ยนแปลง ถือว่าท่านรับทราบและตกลงยอมรับเงื่อนไขใหม่แล้ว
            </div>

            <div className="border-t border-green-900/50 pt-4">
              <span className="text-amber-500 font-bold"># ติดต่อทีมงาน</span><br/>
              หากคุณมีคำถามหรือข้อสงสัยใดๆ เกี่ยวกับข้อกำหนดการใช้งาน สามารถติดต่อทีมงานได้ที่:<br/>
              EMAIL: {SITE.contact.email}
            </div>
            
            <div className="mt-8 text-center text-green-700 animate-pulse">
              (END)
            </div>
          </div>
        </TerminalBlock>
        
        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
