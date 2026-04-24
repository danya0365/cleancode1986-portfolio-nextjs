"use client";

import { SITE } from "@/src/data/master/site";
import { TerminalAsciiLogo } from "@/src/presentation/components/ui/terminal/TerminalAsciiLogo";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import Link from "next/link";
import { TerminalTeam } from "../components/terminal/TerminalTeam";

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
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">
            Clean Code 1986 (AI-Powered)
          </h1>
          <p className="text-green-700 text-sm">
            AI Code Generation + Clean Architecture Quality Control
          </p>
        </div>

        {/* Company Story */}
        <TerminalBlock command="cat /docs/origin_story.txt" path="~/about">
          <div className="text-gray-300 p-4 leading-relaxed font-sans text-sm sm:text-base bg-black/50 border border-green-900/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">
              &gt; จุดเริ่มต้นของเรา
            </h2>
            <p className="mb-4">
              <span className="font-bold text-green-400">Clean Code 1986</span>{" "}
              ก่อตั้งขึ้นจากแพสชันที่อยากเห็นซอฟต์แวร์ไทยก้าวไกลระดับโลก
              เราเชื่อว่า &quot;โค้ดที่ดี ไม่ใช่แค่ทำงานได้
              แต่ต้องดูแลรักษาได้และพัฒนาต่อยอดได้ไม่รู้จบ&quot;
            </p>
            <p className="mb-4">
              เราผสานพลังของ{" "}
              <span className="font-bold text-purple-400">AI</span> เข้ากับ{" "}
              <span className="font-bold text-green-400">
                Clean Architecture
              </span>{" "}
              — AI เขียนโค้ด เราควบคุมคุณภาพ ประหยัดต้นทุน
              ส่งมอบเร็วกว่าเดิมหลายเท่า
            </p>
            <p className="text-green-500 italic">
              ด้วยประสบการณ์ 5 ปี + AI-Powered Workflow
              เราคือสะพานเชื่อมระหว่างคุณ...และอนาคต
            </p>
          </div>
        </TerminalBlock>

        {/* Mission & Vision & Core Values */}
        <TerminalBlock command="cat /etc/core_directives.conf" path="~/about">
          <div className="bg-gray-900 p-4 border border-gray-800 font-mono text-sm sm:text-base">
            <div className="mb-6">
              <span className="text-blue-400 font-bold">
                # [MISSION_DIRECTIVE]
              </span>
              <br />
              <span className="text-gray-300">
                ใช้ AI พัฒนาซอฟต์แวร์คุณภาพระดับ Enterprise ในราคาที่เข้าถึงได้
                ลูกค้าประหยัดต้นทุน 80%+
              </span>
            </div>
            <div className="mb-6">
              <span className="text-fuchsia-400 font-bold">
                # [VISION_STATEMENT]
              </span>
              <br />
              <span className="text-gray-300">
                เป็น Digital Agency
                อันดับหนึ่งสำหรับธุรกิจที่ต้องการเว็บคุณภาพสูง ราคาดี —
                AI-Powered + Human Expertise
              </span>
            </div>
            <div>
              <span className="text-amber-400 font-bold"># [CORE_VALUES]</span>
              <br />
              <span className="text-gray-300">
                AI Code Generation + Clean Architecture Quality Control,
                ซื่อสัตย์โปร่งใส, ส่งมอบเร็ว ราคาดี
              </span>
            </div>
          </div>
        </TerminalBlock>

        {/* Why Choose Us */}
        <TerminalBlock
          command="systemctl status advantages.service"
          path="~/about"
        >
          <div className="text-sm sm:text-base font-mono bg-black p-4 border border-green-900">
            <div className="text-green-500 font-bold mb-4">
              ● advantages.service - AI-Powered Competitive Edge
            </div>
            <div className="text-gray-400 pl-2 sm:pl-4 space-y-3">
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">AI-Powered Development:</span> ใช้
                AI Code Generation สร้างโค้ดคุณภาพสูง เร็วกว่าเขียนเองหลายเท่า
              </div>
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">Clean Architecture:</span>{" "}
                ทุกโปรเจคใช้ Clean Architecture Pattern —
                รองรับการขยายตัวในอนาคต
              </div>
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">Cost-Effective:</span>{" "}
                ประหยัดต้นทุน 80%+ กว่าจ้างทีม Developer 3 คน เหมาะกับ SME และ
                Startup
              </div>
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">Blazing Fast Delivery:</span>{" "}
                ส่งมอบเร็วกว่าเดิม 5 เท่า ด้วย AI Workflow + Human Quality
                Control
              </div>
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">Modern Tech Stack:</span> Next.js
                15, React, Supabase — เทคโนโลยีล้ำสมัยที่สุดในตลาด
              </div>
              <div>
                <span className="text-cyan-400">[OK]</span>{" "}
                <span className="text-white">Premium Quality:</span> AI Code +
                Human Review ผสานพลัง AI กับความเชี่ยวชาญของเรา
              </div>
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
              <div className="text-amber-500 font-bold text-xl mb-2">
                ++ SYSTEM REQUIREMENT: NEW OPERATORS NEEDED ++
              </div>
              <p className="text-amber-200/70 mb-6 max-w-lg mx-auto">
                เรากำลังเปิดรับคนเก่งๆ ไฟแรง
                ที่หลงใหลในการเขียนโค้ดและอยากเติบโตไปพร้อมกับเราแบบก้าวกระโดด
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
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">
            guest@cleancode1986:~/about$
          </span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
