"use client";

import Link from "next/link";
import { useServicesPresenter } from "@/src/presentation/presenters/services/useServicesPresenter";
import type { ServicesViewModel } from "@/src/presentation/presenters/services/ServicesPresenter";
import { motion } from "framer-motion";

interface ServicesPageProps {
  initialViewModel?: ServicesViewModel;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesPage({ initialViewModel }: ServicesPageProps) {
  const { viewModel, loading, error } = useServicesPresenter(initialViewModel);

  // Loading state
  if (loading && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"></div>
      </div>
    );
  }

  // Error state
  if (error && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-2">เกิดข้อผิดพลาด</p>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!viewModel) return null;

  const { services } = viewModel;

  return (
    <div className="relative py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-6 border border-blue-200 dark:border-blue-800/50 shadow-sm">
            <span className="mr-2">🚀</span>
            <span>ยกระดับธุรกิจของคุณ</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            บริการของเรา
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            เราให้บริการพัฒนาซอฟต์แวร์ครบวงจร ด้วยทีมนักพัฒนามืออาชีพและเทคโนโลยีระดับสากล เพื่อผลลัพธ์ที่สมบูรณ์แบบที่สุด
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              id={service.category.toLowerCase().replace(/\s+/g, "-")}
              className="group relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-100 dark:border-gray-700/50 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-blue-900/5 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-sm font-bold rounded-full tracking-wide">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider opacity-80">
                    สิ่งที่คุณจะได้รับ:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400 group/item"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs mr-3 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          ✓
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Area */}
                {service.pricingInfo && (
                  <div className="pt-6 border-t border-gray-100 dark:border-gray-700/50 mt-auto flex items-end justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-1">
                        เริ่มต้นที่
                      </div>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        {service.pricingInfo}
                      </div>
                    </div>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="px-6 py-2.5 bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      สอบถาม
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="relative bg-black dark:bg-gray-900 rounded-[2.5rem] shadow-2xl p-8 md:p-16 mb-24 overflow-hidden text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-purple-900/40"></div>

          <motion.div variants={itemVariants} className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              ขั้นตอนการทำงานของเรา
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              กระบวนการทำงานที่เป็นระบบ โปร่งใส และเน้นผลลัพธ์เป็นศูนย์กลาง
            </p>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { step: "01", title: "ปรึกษา & วางแผน", desc: "รับฟังความต้องการและวิเคราะห์โจทย์ธุรกิจอย่างละเอียด" },
              { step: "02", title: "ออกแบบ & สถาปัตยกรรม", desc: "วางโครงสร้างระบบ (Architecture) และออกแบบ UI/UX" },
              { step: "03", title: "พัฒนา & ทดสอบ", desc: "เขียนโค้ดด้วยมาตรฐานสูงสุด และทดสอบระบบอย่างเข้มงวด" },
              { step: "04", title: "ส่งมอบ & สนับสนุน", desc: "เปิดตัวใช้งานจริง พร้อมดูแลรักษาระบบหลังการขาย" },
            ].map((item, index) => (
              <motion.div 
                key={item.step} 
                variants={itemVariants}
                className="relative text-center group"
              >
                {/* Connector Line */}
                {index !== 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
                
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gray-800/50 backdrop-blur border border-gray-700/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-500">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Powerful CTA */}
        <motion.div 
          className="relative rounded-3xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient-x" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          
          <div className="relative p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">
              พร้อมเริ่มต้นความสำเร็จแล้วหรือยัง?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow">
              ปรึกษาฟรี! ไม่มีค่าใช้จ่าย ทีมงานผู้เชี่ยวชาญของเราพร้อมที่จะเปลี่ยนไอเดียของคุณให้กลายเป็นระบบจริงที่ทรงพลัง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-blue-700 hover:bg-gray-50 font-extrabold rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1"
              >
                จองคิวรับคำปรึกษาทันที
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 bg-black/20 backdrop-blur-md text-white hover:bg-black/30 font-bold rounded-2xl border border-white/20 transition-all hover:border-white/40"
              >
                ดูผลงานที่ผ่านมา
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
