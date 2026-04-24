"use client";

import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import type { ServicesViewModel } from "@/src/presentation/presenters/services/ServicesPresenter";

interface Props {
  viewModel: ServicesViewModel;
}

export function ServicesRetroTechMagazineView({ viewModel }: Props) {
  const { services } = viewModel;

  const processSteps = [
    {
      step: "01",
      title: "ปรึกษา & วางแผน",
      desc: "รับฟังความต้องการและออกแบบ AI Prompt Strategy",
    },
    {
      step: "02",
      title: "AI + สถาปัตยกรรม",
      desc: "ใช้ AI สร้างโค้ด + ควบคุมคุณภาพด้วย Clean Architecture",
    },
    {
      step: "03",
      title: "พัฒนา & ทดสอบ",
      desc: "AI Code Generation + Review ด้วย AI Skill ที่เราสร้างไว้",
    },
    {
      step: "04",
      title: "ส่งมอบ & สนับสนุน",
      desc: "ส่งมอบเร็ว ราคาดี พร้อมดูแลหลังการขาย",
    },
  ];

  return (
    <div className="flex flex-col gap-16 p-4 sm:p-8 lg:p-12 pb-32">
      {/* HEADER */}
      <div>
        <RetroHeading bg="magenta" withStroke>
          AI-POWERED{" "}
          <span className="text-[#00FFFF] border-y-8 border-black leading-[1.2] pb-2 font-sans">
            SERVICES
          </span>
        </RetroHeading>
        <p className="mt-8 text-xl sm:text-2xl font-black uppercase max-w-3xl">
          ใช้ AI พัฒนา + Clean Architecture — ส่งมอบเร็ว ราคาดี คุณภาพสูง
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {services.map((service, i) => (
          <RetroCard
            key={service.id}
            hoverEffect
            shadowSize="lg"
            borderSize="lg"
            className={`flex flex-col p-8 sm:p-10 ${i % 2 !== 0 ? "bg-[#00FFFF]" : "bg-white"}`}
          >
            {/* Header: Icon & Category */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b-8 border-black">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-500 bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                {service.icon}
              </div>
              <RetroBadge color="magenta" variant="skew" className="text-xl">
                {service.category}
              </RetroBadge>
            </div>

            {/* Title & Description */}
            <h2 className="text-3xl font-black uppercase mb-4">
              {service.title}
            </h2>
            <p className="font-bold flex-grow mb-8 text-lg">
              {service.description}
            </p>

            {/* Features list */}
            <div className="mb-8 border-4 border-black bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-black uppercase mb-4 text-[#FF00FF] text-xl">
                สิ่งที่คุณจะได้รับ:
              </h3>
              <ul className="space-y-3 font-bold">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#39FF14] text-xl mr-3 font-black">
                      ▶
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Area */}
            {service.pricingInfo && (
              <div className="pt-6 border-t-8 border-black mt-auto flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="font-black uppercase tracking-widest text-sm mb-1 bg-black text-white px-2 py-1 inline-block">
                    เริ่มต้นที่
                  </div>
                  <div className="text-4xl font-black">
                    {service.pricingInfo}
                  </div>
                </div>
                <RetroButton
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="primary"
                >
                  สอบถาม
                </RetroButton>
              </div>
            )}
          </RetroCard>
        ))}
      </div>

      {/* PROCESS SECTION */}
      <div className="mt-12 bg-[#39FF14] border-8 border-black p-8 sm:p-16 shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
        <div className="text-center mb-16">
          <RetroHeading
            bg="white"
            className="border-b-8 border-t-8 border-black"
          >
            ขั้นตอนการทำงาน
          </RetroHeading>
          <p className="mt-8 text-xl font-bold uppercase max-w-2xl mx-auto tracking-widest bg-black text-[#39FF14] px-4 py-2">
            กระบวนการทำงานที่เป็นระบบ โปร่งใส และเน้นผลลัพธ์เป็นศูนย์กลาง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col relative group hover:-translate-y-2 transition-transform"
            >
              <div className="absolute -top-6 -right-6 text-5xl font-black text-[#FF00FF] bg-black text-white border-4 border-black px-4 py-2 transform rotate-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                {item.step}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 mt-8 bg-[#00FFFF] inline-block w-fit px-2 border-2 border-black">
                {item.title}
              </h3>
              <p className="font-bold border-l-4 border-black pl-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <RetroCard
        borderSize="lg"
        shadowSize="lg"
        className="bg-black text-white p-8 sm:p-16 text-center mt-12 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      >
        <h2 className="text-4xl sm:text-6xl font-black mb-8 border-y-8 border-[#39FF14] py-8 text-[#00FFFF] uppercase">
          พร้อมจ้างทำเว็บ ราคาดีหรือยัง?
        </h2>
        <p className="text-xl font-bold mb-12 max-w-2xl mx-auto uppercase">
          ปรึกษาฟรี ไม่มีค่าใช้จ่าย — AI-Powered Development ส่งมอบเร็ว
          คุณภาพสูง
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <RetroButton href="/contact" variant="accent">
            ปรึกษาฟรีเลย
          </RetroButton>
          <RetroButton href="/promo" variant="white">
            ดูราคาบริการ
          </RetroButton>
        </div>
      </RetroCard>
    </div>
  );
}
