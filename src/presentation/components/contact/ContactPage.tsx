"use client";

import { SITE } from "@/src/data/master/site";
import type { ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { useContactPresenter } from "@/src/presentation/presenters/contact/useContactPresenter";
import { useChatStore } from "@/src/presentation/stores/chat-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ (อย่างน้อย 2 ตัวอักษร)"),
  email: z.string().email("กรุณากรอกอีเมลที่ถูกต้อง"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "กรุณาเลือกประเภทโปรเจค"),
  budget: z.string().optional(),
  message: z.string().min(10, "กรุณากรอกรายละเอียด (อย่างน้อย 10 ตัวอักษร)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactPageProps {
  initialViewModel?: ContactViewModel;
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

export function ContactPage({ initialViewModel }: ContactPageProps) {
  const {
    viewModel,
    loading,
    error,
    submitting,
    submitStatus,
    submitContactForm,
  } = useContactPresenter(initialViewModel);

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
    // 1. Submit through regular form handler (optional fallback)
    await submitContactForm(data);

    // 2. Register customer seamlessly via chat
    const contactIdentifier = data.phone || data.email;
    const registered = await registerCustomer(data.name, contactIdentifier);

    if (registered) {
      // 3. Draft the combined message from the form fields
      const chatContext = `สวัสดีครับ สนใจทำโปรเจกต์ประเภท ${data.projectType}\n` +
                          (data.budget ? `งบประมาณที่ตั้งไว้ระดับ: ${data.budget}\n` : '') +
                          `รายละเอียดเพิ่มเติม:\n${data.message}`;

      // 4. Send the drafted message and open the chat bubble
      openChat();
      await sendMessage(chatContext);

      // 5. Clear the form
      reset();
    }
  };

  // Loading state
  if (loading && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">กำลังโหลด...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <p className="text-red-600 dark:text-red-400 font-medium mb-2">
                เกิดข้อผิดพลาด
              </p>
              <p className="text-gray-600 dark:text-gray-400">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 py-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-blue-900/20 dark:via-gray-950 dark:to-purple-900/20 pointer-events-none" />
      <div className="absolute top-32 -left-32 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-64 -right-32 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              รับคำปรึกษาฟรี / เริ่มโปรเจกต์
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            ทีมงานและ AI ผู้ช่วยของเราพร้อมให้บริการคุณ<br className="hidden md:block"/>
            ไม่มีค่าใช้จ่าย ไม่ผูกมัด เลือกระบบที่สะดวกกับคุณได้เลย
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Chat Option (Idea 4 Highlight) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-blue-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                ต้องการคำตอบตอนนี้?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 relative z-10 leading-relaxed">
                คุยกับ AI Assistant หรือทีมงานผ่าน Live Chat ทราบข้อมูลเบื้องต้นและตอบคำถามทั่วไปทันใจ
              </p>
              <button 
                onClick={openChat}
                className="relative z-10 font-bold w-full mx-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" /> 
                เริ่มแชทเลย
              </button>
            </div>

            {/* Contact Details & Social */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-purple-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  ข้อมูลติดต่ออื่นๆ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">📧</span>
                    <a href={`mailto:${viewModel.contactEmail}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 truncate font-medium">
                      {viewModel.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">📞</span>
                    <a href={`tel:${viewModel.contactPhone}`} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 truncate font-medium">
                      {viewModel.contactPhone}
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xl mr-4 flex-shrink-0">📍</span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {viewModel.officeAddress}
                    </p>
                  </div>
                </div>
              </div>

              {SITE.social && Object.values(SITE.social).some(Boolean) && (
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">โซเชียลมีเดีย</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "📘", name: "Facebook", url: SITE.social.facebook },
                      { icon: "🐦", name: "Twitter", url: SITE.social.twitter },
                      { icon: "🐙", name: "GitHub", url: SITE.social.github },
                      { icon: "💼", name: "LinkedIn", url: SITE.social.linkedin },
                    ].filter(social => Boolean(social.url)).map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded-xl transition-all shadow-sm hover:shadow"
                      >
                        <span className="text-xl">{social.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-blue-900/5 dark:shadow-none border border-gray-100 dark:border-gray-800 p-8 md:p-10">
              <div className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ฝากรายละเอียดไว้ให้เราติดต่อกลับ
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  ต้องการประเมินราคา หรือมีร่างโปรเจคที่ชัดเจน? กรอกข้อมูลไว้ได้เลย ทีมผู้เชี่ยวชาญของเราจะรีบค้นคว้ารายละเอียดและติดต่อกลับหาคุณโดยเร็วที่สุด
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      ชื่อ - นามสกุล <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium"
                      placeholder="ไม่ต้องใส่คำนำหน้า"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      อีเมลติดต่อกลับ <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      เบอร์โทรศัพท์มือถือ (ถ้ามี)
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all font-medium"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                  
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      หมวดหมู่โปรเจค <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register("projectType")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all appearance-none font-medium"
                      >
                        <option value="">เลือกประเภทที่ใกล้เคียงที่สุด</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.projectType && <p className="mt-2 text-sm text-red-500">{errors.projectType.message}</p>}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    งบประมาณโดยประมาณ (ถ้ามี)
                  </label>
                  <div className="relative">
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all appearance-none font-medium"
                    >
                      <option value="">เลือกช่วงงบประมาณที่ต้องการ</option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    รายละเอียดเพิ่มเติม <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all resize-none font-medium"
                    placeholder="บอกเราเกี่ยวกับความต้องการ อธิบายฟังก์ชันคร่าวๆ เพื่อให้เราประเมินระบบได้เบื้องต้น..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:from-gray-400 disabled:to-gray-500 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {submitting ? "กำลังนำข้อมูลเข้าระบบ..." : "ส่งรายละเอียดและเริ่มแชทเลย"}
                </button>

                {/* Status Messages */}
                {submitStatus?.success && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl text-green-800 dark:text-green-200 flex items-center gap-3 font-medium">
                    <span className="text-xl">✅</span>
                    <span>{submitStatus.message}</span>
                  </div>
                )}
                {submitStatus && !submitStatus.success && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl text-red-800 dark:text-red-200 flex items-center gap-3 font-medium">
                    <span className="text-xl">❌</span>
                    <span>{submitStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
