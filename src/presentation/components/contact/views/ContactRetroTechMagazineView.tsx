"use client";

import { useState } from "react";

import { SITE } from "@/src/data/master/site";
import type { ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { useChatStore } from "@/src/presentation/stores/chat-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";

const contactSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ (อย่างน้อย 2 ตัวอักษร)"),
  email: z.string().email("กรุณากรอกอีเมลที่ถูกต้อง"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "กรุณาเลือกประเภทโปรเจค"),
  budget: z.string().optional(),
  message: z.string().min(10, "กรุณากรอกรายละเอียด (อย่างน้อย 10 ตัวอักษร)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Props {
  viewModel: ContactViewModel;
}

const PROJECT_TYPES = [
  "เว็บไซต์",
  "แอปมือถือ",
  "UI/UX Design",
  "Full-stack",
  "Consulting",
  "อื่นๆ",
];

const BUDGET_RANGES = [
  "< 50,000 บาท",
  "50,000 - 100,000 บาท",
  "100,000 - 300,000 บาท",
  "300,000 - 500,000 บาท",
  "> 500,000 บาท",
  "ยังไม่แน่ใจ",
];

export function ContactRetroTechMagazineView({ viewModel }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { openChat, registerCustomer, sendMessage } = useChatStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const contactIdentifier = data.phone || data.email;
      const registered = await registerCustomer(data.name, contactIdentifier);

      if (registered) {
        const chatContext = `สวัสดีครับ สนใจทำโปรเจกต์ประเภท ${data.projectType}\n` +
                            (data.budget ? `งบประมาณที่ตั้งไว้ระดับ: ${data.budget}\n` : '') +
                            `รายละเอียดเพิ่มเติม:\n${data.message}`;

        openChat();
        await sendMessage(chatContext);
        reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full border-4 border-black p-4 bg-white focus:bg-[#00FFFF] focus:outline-none text-xl font-bold shadow-[4px_4px_0_0_#000] focus:shadow-[8px_8px_0_0_#FF00FF] transition-all placeholder:text-gray-500 uppercase";
  const labelClass = "block text-lg font-black uppercase mb-2 bg-black text-white px-2 py-1 w-fit";

  return (
    <div className="flex flex-col gap-12 p-4 sm:p-8 lg:p-12 pb-32">
      
      {/* HEADER SECTION */}
      <div className="mb-8">
        <RetroHeading bg="lime" withStroke>
          CONTACT US
        </RetroHeading>
        <p className="mt-8 text-xl sm:text-2xl font-black uppercase max-w-3xl bg-black text-white px-4 py-2 inline-block -rotate-1 shadow-[8px_8px_0_0_#FF00FF]">
          พร้อมที่จะเริ่มสร้างผลงานชิ้นเอกจากไอเดียคุณหรือยัง?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact & Assistant */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* AI Assistant */}
          <RetroCard hoverEffect borderSize="lg" shadowSize="lg" className="bg-[#FF00FF] p-8 text-center border-t-[16px]">
            <div className="w-24 h-24 rounded-full border-8 border-black bg-[#39FF14] flex items-center justify-center text-5xl mx-auto mb-6 shadow-[8px_8px_0_0_#000] transform rotate-12">
              ⚡
            </div>
            <h2 className="text-3xl font-black uppercase text-black mb-4 bg-white inline-block px-4 py-2 border-4 border-black transform -rotate-2">
              ต้องการคำตอบตอนนี้?
            </h2>
            <p className="font-bold text-white mb-8 bg-black p-4 uppercase">
              คุยกับ AI Assistant หรือทีมงานผ่าน Live Chat เพื่อทราบข้อมูลเบื้องต้นทันที
            </p>
            <button 
              onClick={openChat}
              className="bg-[#00FFFF] text-black border-4 border-black px-8 py-4 font-black uppercase text-xl text-center hover:bg-white transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] active:scale-95 w-full flex items-center justify-center gap-3"
            >
              ⭐ เริ่มแชททันที
            </button>
          </RetroCard>

          {/* Contact Details */}
          <RetroCard shadowSize="md" className="bg-white p-8">
            <RetroBadge color="black" className="mb-6 mb-4 text-sm">ช่องทางการติดต่ออื่นๆ</RetroBadge>
            
            <div className="space-y-6">
              <div className="border-l-8 border-[#FF00FF] pl-6 py-2 group">
                <p className="font-black text-sm uppercase text-gray-500 mb-1">Email</p>
                <a href={`mailto:${viewModel.contactEmail}`} className="font-bold text-2xl uppercase group-hover:text-[#FF00FF] transition-colors break-all">
                  {viewModel.contactEmail}
                </a>
              </div>
              
              <div className="border-l-8 border-[#00FFFF] pl-6 py-2 group">
                <p className="font-black text-sm uppercase text-gray-500 mb-1">Phone</p>
                <a href={`tel:${viewModel.contactPhone}`} className="font-bold text-2xl uppercase group-hover:text-[#00FFFF] transition-colors">
                  {viewModel.contactPhone}
                </a>
              </div>

              <div className="border-l-8 border-[#39FF14] pl-6 py-2">
                <p className="font-black text-sm uppercase text-gray-500 mb-1">Office</p>
                <p className="font-bold text-xl uppercase">
                  {viewModel.officeAddress}
                </p>
              </div>
            </div>

            {SITE.social && Object.values(SITE.social).some(Boolean) && (
              <div className="mt-8 border-t-4 border-black border-dashed pt-8">
                <RetroBadge color="white" className="mb-6 text-sm">SOCIAL MEDIA</RetroBadge>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: "📘", name: "FB", url: SITE.social.facebook, color: "bg-[#00FFFF]" },
                    { icon: "🐦", name: "TW", url: SITE.social.twitter, color: "bg-[#FF00FF]" },
                    { icon: "🐙", name: "GH", url: SITE.social.github, color: "bg-black text-white" },
                    { icon: "💼", name: "IN", url: SITE.social.linkedin, color: "bg-[#39FF14]" },
                  ].filter(social => Boolean(social.url)).map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center justify-center gap-2 px-4 py-2 border-4 border-black font-black uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0_0_0_0_#000] transition-all ${social.color}`}
                    >
                      <span>{social.icon}</span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </RetroCard>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-8">
          <RetroCard borderSize="lg" shadowSize="lg" className="bg-[#00FFFF] p-8 sm:p-12 relative h-full">
            <div className="mb-10 text-center md:text-left bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_#39FF14] transform -rotate-1">
              <h2 className="text-4xl font-black uppercase text-black mb-4">
                ฝากรายละเอียดไว้ให้เราติดต่อกลับ 📝
              </h2>
              <p className="font-bold text-lg uppercase">
                กรอกข้อมูลไว้ได้เลย ทีมผู้เชี่ยวชาญของเราจะรีบค้นคว้ารายละเอียดและติดต่อกลับหาคุณให้ไวที่สุด
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                  <label className={labelClass}>
                    ชื่อ - นามสกุล *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className={inputClass + (isSubmitting ? " opacity-50 cursor-not-allowed" : "")}
                    placeholder="JOHN DOE"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="mt-2 text-sm font-black bg-white text-red-600 px-2 border-2 border-red-600 inline-block">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>
                    อีเมลติดต่อกลับ *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={inputClass + (isSubmitting ? " opacity-50 cursor-not-allowed" : "")}
                    placeholder="YOU@EMAIL.COM"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-2 text-sm font-black bg-white text-red-600 px-2 border-2 border-red-600 inline-block">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div>
                  <label className={labelClass}>
                    เบอร์โทรศัพท์ <span className="text-[#FF00FF]">(ทางเลือก)</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={inputClass + (isSubmitting ? " opacity-50 cursor-not-allowed" : "")}
                    placeholder="08X-XXX-XXXX"
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Project Type */}
                <div>
                  <label className={labelClass}>
                    หมวดหมู่โปรเจค *
                  </label>
                  <select
                    {...register("projectType")}
                    className={inputClass + " appearance-none rounded-none " + (isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}
                    disabled={isSubmitting}
                  >
                    <option value="">เลือกประเภทโปรเจค ▼</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="mt-2 text-sm font-black bg-white text-red-600 px-2 border-2 border-red-600 inline-block">{errors.projectType.message}</p>}
                </div>
              </div>

              {/* Budget */}
              <div>
                 <label className={labelClass}>
                   งบประมาณ <span className="text-[#FF00FF]">(ทางเลือก)</span>
                 </label>
                 <select
                   {...register("budget")}
                   className={inputClass + " appearance-none rounded-none " + (isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}
                   disabled={isSubmitting}
                 >
                   <option value="">เลือกช่วงงบประมาณ ▼</option>
                   {BUDGET_RANGES.map((range) => (
                     <option key={range} value={range}>{range}</option>
                   ))}
                 </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>
                  รายละเอียดเพิ่มเติม *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={inputClass + " resize-none" + (isSubmitting ? " opacity-50 cursor-not-allowed" : "")}
                  placeholder="อธิบายฟังก์ชันหรือรายละเอียดที่ต้องการ..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="mt-2 text-sm font-black bg-white text-red-600 px-2 border-2 border-red-600 inline-block">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#39FF14] text-black border-8 border-black px-8 py-6 font-black uppercase text-3xl text-center hover:bg-white transition-colors shadow-[12px_12px_0_0_#FF00FF] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0px_0px_0_0_#FF00FF] active:scale-95 flex items-center justify-center gap-4 disabled:bg-gray-400 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-black" />
                      กำลังส่ง...
                    </>
                  ) : (
                    <>
                      <span className="text-4xl text-[#FF00FF]">🚀</span>
                      ยื่นคำขอทันที!
                    </>
                  )}
                </button>
              </div>


            </form>
          </RetroCard>
        </div>

      </div>
    </div>
  );
}
