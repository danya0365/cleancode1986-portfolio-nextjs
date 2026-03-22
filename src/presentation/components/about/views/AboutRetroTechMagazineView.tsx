"use client";

import { SITE } from "@/src/data/master/site";
import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import Image from "next/image";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";

interface Props {
  viewModel: AboutViewModel;
}

export function AboutRetroTechMagazineView({ viewModel }: Props) {
  const { teamMembers: team } = viewModel;

  return (
    <div className="flex flex-col gap-12 p-4 sm:p-8 lg:p-12 pb-32">
      
      {/* HEADER SECTION */}
      <div>
        <RetroHeading bg="cyan" withStroke>
          ABOUT US
        </RetroHeading>
        <p className="mt-8 text-xl sm:text-2xl font-black uppercase max-w-3xl bg-black text-white px-4 py-2 inline-block -rotate-1 shadow-[8px_8px_0_0_#FF00FF]">
          เบื้องหลังโค้ดที่ทรงพลัง คือทีมนักพัฒนาที่มุ่งมั่นสร้างสรรค์นวัตกรรม
        </p>
      </div>

      {/* STORY BLOCK */}
      <RetroCard shadowSize="lg" borderSize="lg" className="bg-white p-8 sm:p-16 flex flex-col lg:flex-row gap-12 mt-8 items-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
        <div className="lg:w-1/2">
          <RetroHeading className="mb-8" bg="lime">จุดเริ่มต้นของเรา</RetroHeading>
          <p className="font-bold text-lg leading-relaxed mb-6 uppercase border-l-8 border-black pl-6">
            <span className="text-[#FF00FF] font-black">Clean Code 1986</span> ก่อตั้งขึ้นจากแพสชันที่อยากเห็นซอฟต์แวร์ไทยก้าวไกลระดับโลก เราเชื่อว่า &quot;โค้ดที่ดี ไม่ใช่แค่ทำงานได้ แต่ต้องดูแลรักษาได้และพัฒนาต่อยอดได้ไม่รู้จบ&quot;
          </p>
          <p className="font-bold text-lg leading-relaxed mb-6 uppercase border-l-8 border-[#00FFFF] pl-6">
            ทุกบรรทัดที่เราเขียน ถูกหล่อหลอมด้วยความใส่ใจและสถาปัตยกรรม (Architecture) ที่วางแผนมาอย่างรัดกุม 
          </p>
          <p className="font-black text-2xl uppercase border-4 border-black p-4 shadow-[4px_4px_0_0_readonly]">
            ด้วยประสบการณ์รวมกว่า 5 ปี เราคือสะพานเชื่อมระหว่างคุณและอนาคต
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
           <div className="w-64 h-64 bg-[#39FF14] rounded-full border-8 border-black flex items-center justify-center shadow-[16px_16px_0_0_#FF00FF] transform rotate-12">
              <span className="text-[120px] filter grayscale hover:grayscale-0 transition-all duration-300">💻</span>
           </div>
        </div>
      </RetroCard>

      {/* VALUES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { icon: "🎯", title: "พันธกิจ (Mission)", desc: "สร้างสรรค์ซอฟต์แวร์คุณภาพระดับ Enterprise ที่ตอบโจทย์การใช้งานจริงและช่วยผลักดันยอดขายให้ลูกค้า", color: "magenta" },
          { icon: "👁️", title: "วิสัยทัศน์ (Vision)", desc: "เป็น Digital Agency อันดับหนึ่งในใจลูกค้า ที่ผู้ประกอบการนึกถึงเมื่อรันโปรเจคยากๆ", color: "cyan" },
          { icon: "💎", title: "ค่านิยม (Core Values)", desc: "Code สะอาด, มุ่งเน้น Performance, ซื่อสัตย์โปร่งใส, และเรียนรู้ไม่มีวันหยุด", color: "lime" }
        ].map((item, idx) => (
          <RetroCard key={idx} borderSize="md" shadowSize="md" hoverEffect className="p-8 text-center flex flex-col items-center group bg-white">
             <div className="w-24 h-24 rounded-full border-4 border-black bg-gray-200 flex items-center justify-center text-5xl mb-6 shadow-[4px_4px_0_0_#000] group-hover:-translate-y-2 transition-transform">
               {item.icon}
             </div>
             <RetroBadge color={item.color as "magenta" | "cyan" | "lime"} className="mb-4 text-sm">{item.title}</RetroBadge>
             <p className="font-bold uppercase text-sm mt-4 flex-grow border-t-4 border-black border-dashed pt-4 w-full">
               {item.desc}
             </p>
          </RetroCard>
        ))}
      </div>

      {/* TEAM SECTION START */}
      <div className="mt-24 mb-12 flex flex-col items-center">
         <RetroBadge color="white" variant="skew" className="mb-4 text-lg">THE DIGITAL WORKFORCE</RetroBadge>
         <RetroHeading bg="magenta" className="text-center">ขับเคลื่อนความสำเร็จด้วยทีมระดับแนวหน้า</RetroHeading>
         <p className="mt-8 font-black uppercase text-xl max-w-3xl text-center bg-black text-white p-4">
           เทคโนโลยีที่ดีสุด เกิดจากการทำงานร่วมกันของ <span className="text-[#39FF14]">มนุษย์ (HUMAN)</span> และ <span className="text-[#00FFFF]">ปัญญาประดิษฐ์ (AI)</span>
         </p>
      </div>

      {/* HUMAN LEADERSHIP */}
      <div className="mb-16">
        {team.filter(m => m.id === "1").map(member => (
          <RetroCard key={member.id} borderSize="lg" shadowSize="lg" className="bg-[#00FFFF] p-8 sm:p-12 border-l-[16px] border-black">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="w-64 h-64 border-8 border-black bg-white shrink-0 relative p-2 shadow-[8px_8px_0_0_#FF00FF] transform -rotate-3 hover:rotate-0 transition-transform">
                  <Image src={member.avatar} alt={member.name} fill className="object-cover p-2 grayscale hover:grayscale-0 transition-all duration-300" />
               </div>
               <div className="flex-1 text-center lg:text-left">
                 <div className="mb-4 inline-block bg-black text-white px-3 py-1 font-black text-sm tracking-widest border-2 border-dashed border-white uppercase">
                   ● HUMAN LEADERSHIP
                 </div>
                 <h3 className="text-5xl font-black uppercase mb-2 text-black">{member.name}</h3>
                 <div className="text-2xl font-bold bg-[#FF00FF] text-white inline-block px-4 py-1 mb-8 border-4 border-black transform rotate-2">
                   {member.role}
                 </div>
                 <p className="font-bold text-lg bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase mb-8">
                   {member.bio}
                 </p>
                 <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                   {member.linkedinUrl && (
                     <RetroButton href={member.linkedinUrl} variant="secondary">LinkedIn</RetroButton>
                   )}
                   {member.githubUrl && (
                     <RetroButton href={member.githubUrl} variant="primary">GitHub</RetroButton>
                   )}
                   {member.hasCV && (
                     <RetroButton href={`/about/cv/${member.id}`} variant="white">READ FULL CV</RetroButton>
                   )}
                 </div>
               </div>
             </div>
          </RetroCard>
        ))}
      </div>

      {/* AI AGENTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.filter(m => m.id !== "1").map(member => (
          <RetroCard key={member.id} hoverEffect borderSize="md" shadowSize="md" className="bg-[#FF00FF] p-6 text-white flex flex-col">
            <div className="flex justify-between items-start mb-6 border-b-8 border-black pb-6">
              <div className="w-24 h-24 border-4 border-black bg-white p-1 transform rotate-3 relative shadow-[4px_4px_0_0_#39FF14]">
                <Image src={member.avatar} alt={member.name} fill className="object-cover grayscale" />
              </div>
              <RetroBadge color="white" className="text-xs">AI AGENT ✨</RetroBadge>
            </div>
            <h3 className="text-3xl font-black uppercase text-black mb-2">{member.name}</h3>
            <div className="font-bold text-sm bg-black text-[#00FFFF] p-2 inline-block mb-4 border-l-4 border-[#39FF14]">
              {member.role}
            </div>
            <p className="font-bold text-sm bg-white text-black p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex-grow">
              {member.bio}
            </p>
            {member.hasCV && (
              <div className="mt-6 flex justify-center">
                <RetroButton href={`/about/cv/${member.id}`} variant="white" className="w-full text-center">READ FULL CV</RetroButton>
              </div>
            )}
          </RetroCard>
        ))}
      </div>

      {/* HIGHLIGHT CTA */}
      {SITE.hiring.isHiring && (
        <RetroCard borderSize="lg" shadowSize="lg" className="bg-[#39FF14] text-black p-8 sm:p-16 text-center mt-24">
           <RetroHeading bg="white" className="border-b-8 border-black mb-8 px-4 inline-block">
             WE ARE HIRING!
           </RetroHeading>
           <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase leading-tight">
             อยากเป็นส่วนหนึ่งของการสร้างสุดยอดเทคโนโลยีไหม?
           </h2>
           <p className="text-xl font-bold mb-12 max-w-2xl mx-auto uppercase bg-white p-4 border-4 border-black">
             เรากำลังเปิดรับคนเก่งๆ ไฟแรง ที่หลงใหลในการเขียนโค้ดและอยากเติบโตไปพร้อมกับเราแบบก้าวกระโดด
           </p>
           <div className="flex justify-center">
             <RetroButton href="/contact?topic=สมัครงาน" variant="primary">
               ยื่น RESUME / สมัครร่วมทีมทันที
             </RetroButton>
           </div>
        </RetroCard>
      )}

    </div>
  );
}
