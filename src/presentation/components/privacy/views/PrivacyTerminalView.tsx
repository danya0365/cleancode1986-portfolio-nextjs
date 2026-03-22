"use client";

import { SITE } from "@/src/data/master/site";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function PrivacyTerminalView() {
  const lastUpdated = "20 มีนาคม 2026";

  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-4 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">System Protocol EULA</h1>
          <p className="text-green-700 text-sm">Validating privacy telemetry protocols...</p>
        </div>

        {/* Global Config Output */}
        <TerminalBlock command="cat /etc/privacy_policy.txt | less" path="~">
          <div className="text-green-400 bg-black border border-green-900/50 p-6 text-sm sm:text-base leading-relaxed overflow-x-auto">
            <div className="text-center font-bold text-lg mb-2 text-amber-400"># นโยบายความเป็นส่วนตัว</div>
            <div className="text-center text-green-700 mb-8">LAST_UPDATED=&quot;{lastUpdated}&quot;</div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[1] บทนำ</span><br/>
              ยินดีต้อนรับสู่เว็บไซต์ {SITE.company.name} นโยบายความเป็นส่วนตัวนี้จัดทำขึ้นเพื่อแจ้งให้คุณทราบถึงวิธีการที่เราเก็บรวบรวม ใช้งาน และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อคุณเข้าชมและใช้บริการเว็บไซต์ของเรา
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[2] ข้อมูลที่เราเก็บรวบรวม</span><br/>
              เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้:<br/>
              <span className="text-green-700">&gt;</span> ข้อมูลระบุตัวตน: เช่น ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์ (เมื่อคุณรับคำปรึกษา)<br/>
              <span className="text-green-700">&gt;</span> ข้อมูลทางเทคนิค: เช่น หมายเลข IP, ชนิดของเบราว์เซอร์, เวลาที่เข้าชมเว็บไซต์ และพฤติกรรมการใช้งาน<br/>
              <span className="text-green-700">&gt;</span> ข้อมูลการใช้งาน: เช่น ข้อมูลที่เกี่ยวกับการใช้งานเว็บไซต์และการโต้ตอบต่างๆ กับระบบของเรา
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[3] วัตถุประสงค์ในการใช้ข้อมูล</span><br/>
              เรานำข้อมูลที่เก็บรวบรวมไปใช้เพื่อวัตถุประสงค์ต่อไปนี้:<br/>
              <span className="text-green-700">&gt;</span> เพื่อให้บริการและดูแลระบบเว็บไซต์ให้สามารถทำงานได้อย่างมีประสิทธิภาพ<br/>
              <span className="text-green-700">&gt;</span> เพื่อติดต่อกลับและตอบข้อซักถามของคุณผ่านช่องทางติดต่อต่างๆ<br/>
              <span className="text-green-700">&gt;</span> เพื่อปรับปรุง ปรับแต่ง และวิเคราะห์ลักษณะการใช้งานให้ตอบโจทย์ผู้ใช้มากขึ้น<br/>
              <span className="text-green-700">&gt;</span> เพื่อปฏิบัติตามข้อกำหนดทางกฎหมายที่เกี่ยวข้อง
            </div>

            <div className="mb-6">
              <span className="text-amber-500 font-bold">[4] การเปิดเผยข้อมูลให้บุคคลที่สาม</span><br/>
              เราไม่มีนโยบายการขาย แลกเปลี่ยน หรือส่งต่อข้อมูลส่วนบุคคลของคุณไปยังบุคคลภายนอกโดยไม่ได้รับอนุญาต ยกเว้นในกรณีที่มีความจำเป็นทางกฎหมาย หรือเป็นพันธมิตรที่ช่วยในการให้บริการเว็บไซต์ (ซึ่งพันธมิตรเหล่านั้นต้องตกลงที่จะรักษาข้อมูลนี้เป็นความลับอย่างเคร่งครัด)
            </div>

            <div className="mb-8">
              <span className="text-amber-500 font-bold">[5] ความปลอดภัยของข้อมูล</span><br/>
              เราให้ความสำคัญกับความปลอดภัยของข้อมูลของคุณเป็นอย่างยิ่ง และได้ใช้มาตรการทางเทคนิคและการบริหารจัดการที่เหมาะสม เพื่อป้องกันการเข้าถึง นำไปใช้ หรือเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต
            </div>

            <div className="border-t border-green-900/50 pt-4">
              <span className="text-amber-500 font-bold"># ติดต่อสอบถาม / รับคำปรึกษา</span><br/>
              หากคุณมีคำถามหรือข้อสงสัยใดๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ สามารถรับคำปรึกษาได้ที่:<br/>
              EMAIL: {SITE.contact.email}<br/>
              PHONE: {SITE.contact.phone}<br/>
              HQ_ADDR: {SITE.contact.address}
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
