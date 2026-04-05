"use client";

import Link from "next/link";
import { SITE } from "@/src/data/master/site";
import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import { TerminalTeam } from "../components/terminal/TerminalTeam";
import { TerminalAsciiLogo } from "@/src/presentation/components/ui/terminal/TerminalAsciiLogo";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  viewModel: AboutViewModel;
}

/**
 * Authentic Terminal UI implementation for the About Page
 */
export function AboutTerminalView({ viewModel }: Props) {
  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-2 border-b border-green-900 pb-4 overflow-x-auto">
          <TerminalAsciiLogo 
            text="ABOUT" 
            className="text-[10px] sm:text-[13px] md:text-sm tracking-tighter sm:tracking-normal text-green-600 mb-4" 
          />
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">System Operators & Core Directives</h1>
          <p className="text-green-700 text-sm">Validating engineering personnel records and system philosophy...</p>
        </div>

        {/* Company Story */}
        <TerminalBlock command="cat /docs/origin_story.txt" path="~/about">
          <div className="text-gray-300 p-4 leading-relaxed font-sans text-sm sm:text-base bg-black/50 border border-green-900/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">&gt; จุดเริ่มต้นของเรา</h2>
            <p className="mb-4">
              <span className="font-bold text-green-400">Clean Code 1986</span> ก่อตั้งขึ้นจากแพสชันที่อยากเห็นซอฟต์แวร์ไทยก้าวไกลระดับโลก เราเชื่อว่า &quot;โค้ดที่ดี ไม่ใช่แค่ทำงานได้ แต่ต้องดูแลรักษาได้และพัฒนาต่อยอดได้ไม่รู้จบ&quot;
            </p>
            <p className="mb-4">
              ทุกบรรทัดที่เราเขียน ถูกหล่อหลอมด้วยความใส่ใจและสถาปัตยกรรม (Architecture) ที่วางแผนมาอย่างรัดกุม เพื่อรับประกันว่า ไม่ว่าธุรกิจคุณจะสเกลไปไกลแค่ไหน ระบบของเราก็พร้อมรองรับเสมอ
            </p>
            <p className="text-green-500 italic">
              ด้วยประสบการณ์รวมในวงการกว่า 5 ปี เราไม่ได้เป็นแค่คนรับจ้างเขียนโค้ด แต่เราคือสะพานเชื่อมระหว่างคุณ...และอนาคต
            </p>
          </div>
        </TerminalBlock>

        {/* Mission & Vision & Core Values */}
        <TerminalBlock command="cat /etc/core_directives.conf" path="~/about">
          <div className="bg-gray-900 p-4 border border-gray-800 font-mono text-sm sm:text-base">
            <div className="mb-6">
              <span className="text-blue-400 font-bold"># [MISSION_DIRECTIVE]</span><br/>
              <span className="text-gray-300">สร้างสรรค์ซอฟต์แวร์คุณภาพระดับ Enterprise ที่ตอบโจทย์การใช้งานจริงและช่วยผลักดันยอดขายให้ลูกค้า</span>
            </div>
            <div className="mb-6">
              <span className="text-fuchsia-400 font-bold"># [VISION_STATEMENT]</span><br/>
              <span className="text-gray-300">เป็น Digital Agency อันดับหนึ่งในใจลูกค้า ที่ผู้ประกอบการนึกถึงเมื่อรันโปรเจคยากๆ และต้องการผลลัพธ์ที่จับต้องได้</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold"># [CORE_VALUES]</span><br/>
              <span className="text-gray-300">Code สะอาด, มุ่งเน้น Performance, ซื่อสัตย์โปร่งใส, และเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอไม่มีวันหยุด</span>
            </div>
          </div>
        </TerminalBlock>

        {/* Why Choose Us */}
        <TerminalBlock command="systemctl status advantages.service" path="~/about">
          <div className="text-sm sm:text-base font-mono bg-black p-4 border border-green-900">
            <div className="text-green-500 font-bold mb-4">● advantages.service - Competitive Edge Features</div>
            <div className="text-gray-400 pl-2 sm:pl-4 space-y-3">
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Modern Tech Stack:</span> เราใช้เทคโนโลยีล้ำสมัยอย่าง Next.js 15, React, และ Supabase ล้ำที่สุดในตลาด</div>
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Premium UI/UX:</span> งานดีไซน์หรูหรา ใช้งานง่าย พร้อม Animation แบบ Micro-interactions ที่ไหลลื่น</div>
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Blazing Fast:</span> รีดแบนด์วิธให้เว็บโหลดไวติดจรวด โกยคะแนน Lighthouse ทะลุ 90+ ทุกหมวดหมู่</div>
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Enterprise Security:</span> ล็อกแน่นหนา ป้องกันการโจมตีทางไซเบอร์ พร้อมระบบจัดการสิทธิ์ขั้นสูง</div>
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Fully Responsive:</span> แสดงผลรอดเด่นสวยงามบนทุกอุปกณ์ ตั้งแต่จอมือถือไปจนถึงจอ 4K ใหญ่ยักษ์</div>
              <div><span className="text-cyan-400">[OK]</span> <span className="text-white">Excellent Consulting:</span> มากกว่าคนทำระบบ เราให้คำปรึกษาทางธุรกิจและชี้แจงสถานะชัดเจนทุกสัปดาห์</div>
            </div>
          </div>
        </TerminalBlock>

        {/* Detailed Team Output */}
        <div className="mt-4">
          <div className="mb-4 text-xs font-bold tracking-widest text-green-600 uppercase">
            {"// EXECUTING: htop --user=engineering_team"}
          </div>
          <TerminalTeam members={viewModel.teamMembers} />
        </div>

        {/* Hiring CTA */}
        {SITE.hiring.isHiring && (
          <TerminalBlock command="./recruit.sh --execute" path="~/about">
             <div className="border border-amber-500/50 p-6 bg-amber-950/20 text-center">
               <div className="text-amber-500 font-bold text-xl mb-2">++ SYSTEM REQUIREMENT: NEW OPERATORS NEEDED ++</div>
               <p className="text-amber-200/70 mb-6 max-w-lg mx-auto">
                 เรากำลังเปิดรับคนเก่งๆ ไฟแรง ที่หลงใหลในการเขียนโค้ดและอยากเติบโตไปพร้อมกับเราแบบก้าวกระโดด
               </p>
               <Link 
                 href="/contact?topic=สมัครงาน"
                 className="inline-block bg-amber-500 text-black font-bold px-8 py-3 hover:bg-amber-400 transition-colors uppercase"
               >
                 [ INIT JOB_APPLICATION ]
               </Link>
             </div>
          </TerminalBlock>
        )}
        
        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~/about$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
