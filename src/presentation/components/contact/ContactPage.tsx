"use client";

import { SITE } from "@/src/data/master/site";
import type { ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { useContactPresenter } from "@/src/presentation/presenters/contact/useContactPresenter";
import { useChatStore } from "@/src/presentation/stores/chat-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, type Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
    await submitContactForm(data);

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
  };

  if (loading && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-2">เกิดข้อผิดพลาด</p>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!viewModel) return null;

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-gray-950 py-20 overflow-hidden">
      {/* Premium Background Orbs & Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold mb-6 border border-indigo-200 dark:border-indigo-800/50 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>พร้อมที่จะเริ่มสร้างผลงานชิ้นเอกจากไอเดียคุณหรือยัง?</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              รับคำปรึกษาฟรี / เริ่มโปรเจกต์
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            ทีมงานและ AI ผู้ช่วยของเราพร้อมให้บริการคุณ<br className="hidden md:block"/>
            ไม่มีค่าใช้จ่าย ไม่ผูกมัด เลือกระบบที่สะดวกกับคุณได้เลย
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Quick Chat Option & Contact Details (Left Column) */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* AI Assistant Quick Chat Card */}
            <motion.div variants={itemVariants} className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 dark:border-gray-800/80 p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center mb-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                <div className="absolute inset-0 rounded-3xl border border-white/40 dark:border-white/10"></div>
                <MessageCircle className="w-12 h-12 drop-shadow-md" />
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 relative z-10 tracking-tight">
                ต้องการคำตอบตอนนี้?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 relative z-10 leading-relaxed font-medium">
                คุยกับ AI Assistant หรือทีมงานผ่าน Live Chat เพื่อทราบข้อมูลเบื้องต้นและตอบคำถามทั่วไปได้ทันที ⚡
              </p>
              
              <button 
                onClick={openChat}
                className="relative z-10 font-bold w-full mx-auto px-8 py-5 bg-gray-900 hover:bg-indigo-600 dark:bg-white dark:text-gray-900 dark:hover:bg-indigo-500 dark:hover:text-white text-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-3 text-lg"
              >
                <Sparkles className="w-5 h-5 animate-pulse" /> 
                เริ่มแชทกับผู้ช่วยทันที
              </button>
            </motion.div>

            {/* Contact Details & Social */}
            <motion.div variants={itemVariants} className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 dark:border-gray-800/80 p-8 md:p-10 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
                  ช่องทางการติดต่ออื่นๆ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700/50 group shadow-sm">
                    <span className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">📧</span>
                    <a href={`mailto:${viewModel.contactEmail}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 truncate font-bold text-lg">
                      {viewModel.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700/50 group shadow-sm">
                    <span className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">📞</span>
                    <a href={`tel:${viewModel.contactPhone}`} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 truncate font-bold text-lg">
                      {viewModel.contactPhone}
                    </a>
                  </div>
                  <div className="flex items-start p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700/50 group shadow-sm">
                    <span className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center text-xl mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">📍</span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium mt-1">
                      {viewModel.officeAddress}
                    </p>
                  </div>
                </div>
              </div>

              {SITE.social && Object.values(SITE.social).some(Boolean) && (
                <div className="pt-8 border-t border-gray-100 dark:border-gray-800/80">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">โซเชียลมีเดีย</h3>
                  <div className="grid grid-cols-2 gap-4">
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
                        className="flex items-center justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700/50 rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-gray-900 dark:text-gray-100 font-bold">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Detailed Request Form (Right Column) */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-gray-800/80 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                  ฝากรายละเอียดไว้ให้เราติดต่อกลับ 📝
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  ต้องการประเมินราคา หรือมีร่างโปรเจคที่ชัดเจน? กรอกข้อมูลไว้ได้เลย ทีมผู้เชี่ยวชาญของเราจะรีบค้นคว้ารายละเอียดและติดต่อกลับหาคุณให้ไวที่สุด
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      ชื่อ - นามสกุล <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium shadow-sm"
                      placeholder="เช่น สมพร รักสะอาด"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500 font-medium">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      อีเมลติดต่อกลับ <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium shadow-sm"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      เบอร์โทรศัพท์มือถือ <span className="text-gray-400 font-normal text-xs ml-1">(ทางเลือก)</span>
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium shadow-sm"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                  
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      หมวดหมู่โปรเจค <span className="text-indigo-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register("projectType")}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none font-medium shadow-sm"
                      >
                        <option value="">เลือกประเภทที่ใกล้เคียงที่สุด</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.projectType && <p className="mt-2 text-sm text-red-500 font-medium">{errors.projectType.message}</p>}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    งบประมาณโดยเบื้องต้น <span className="text-gray-400 font-normal text-xs ml-1">(ทางเลือก)</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register("budget")}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none font-medium shadow-sm"
                    >
                      <option value="">เลือกช่วงงบประมาณที่ต้องการ</option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                      <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    รายละเอียดเพิ่มเติม <span className="text-indigo-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none font-medium shadow-sm"
                    placeholder="เล่าเกี่ยวกับไอเดียของคุณ อธิบายฟังก์ชันคร่าวๆ หรือสเปคที่ต้องการ เพื่อให้เราประเมินระบบได้ใกล้เคียงที่สุด..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500 font-medium">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-4 px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white disabled:from-gray-400 disabled:to-gray-500 font-black text-lg rounded-2xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden relative group"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  {submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      กำลังนำข้อมูลเข้าระบบ...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      ส่งรายละเอียดให้ทีมเราจัดการต่อ!
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus?.success && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50/80 dark:bg-green-900/40 backdrop-blur-sm border border-green-200 dark:border-green-800 rounded-2xl text-green-800 dark:text-green-200 flex items-center gap-3 font-bold shadow-sm mt-6">
                    <span className="text-2xl">✅</span>
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
                {submitStatus && !submitStatus.success && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50/80 dark:bg-red-900/40 backdrop-blur-sm border border-red-200 dark:border-red-800 rounded-2xl text-red-800 dark:text-red-200 flex items-center gap-3 font-bold shadow-sm mt-6">
                    <span className="text-2xl">❌</span>
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
