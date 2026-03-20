"use client";

import { SITE } from "@/src/data/master/site";
import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import { useAboutPresenter } from "@/src/presentation/presenters/about/useAboutPresenter";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface AboutPageProps {
  initialViewModel?: AboutViewModel;
}

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

export function AboutPage({ initialViewModel }: AboutPageProps) {
  const { viewModel, loading, error } = useAboutPresenter(initialViewModel);

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

  const { teamMembers: team } = viewModel;

  return (
    <div className="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold mb-6 border border-indigo-200 dark:border-indigo-800/50 shadow-sm">
            <span className="mr-2 animate-wave inline-block">👋</span>
            <span>ยินดีที่ได้รู้จัก</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            ทำความรู้จักกับเรา
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            เบื้องหลังโค้ดที่ทรงพลัง คือทีมนักพัฒนาที่มุ่งมั่นสร้างสรรค์นวัตกรรมเพื่อความสำเร็จของธุรกิจคุณ
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div 
          className="relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700/50 p-8 md:p-16 mb-24 overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                จุดเริ่มต้นของเรา
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">Clean Code 1986</span> ก่อตั้งขึ้นจากแพสชันที่อยากเห็นซอฟต์แวร์ไทยก้าวไกลระดับโลก เราเชื่อว่า &quot;โค้ดที่ดี ไม่ใช่แค่ทำงานได้ แต่ต้องดูแลรักษาได้และพัฒนาต่อยอดได้ไม่รู้จบ&quot;
                </p>
                <p>
                  ทุกบรรทัดที่เราเขียน ถูกหล่อหลอมด้วยความใส่ใจและสถาปัตยกรรม (Architecture) ที่วางแผนมาอย่างรัดกุม เพื่อรับประกันว่า ไม่ว่าธุรกิจคุณจะสเกลไปไกลแค่ไหน ระบบของเราก็พร้อมรองรับเสมอ
                </p>
                <p>
                  ด้วยประสบการณ์รวมในวงการกว่า 5 ปี เราไม่ได้เป็นแค่คนรับจ้างเขียนโค้ด แต่เราคือสะพานเชื่อมระหว่างคุณ...และอนาคต
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
              <div className="relative w-full aspect-square max-w-[400px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl flex items-center justify-center border-8 border-white dark:border-gray-800">
                <span className="text-9xl filter drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>💻</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision & Core Values */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {[
            { icon: "🎯", title: "พันธกิจ (Mission)", desc: "สร้างสรรค์ซอฟต์แวร์คุณภาพระดับ Enterprise ที่ตอบโจทย์การใช้งานจริงและช่วยผลักดันยอดขายให้ลูกค้า" },
            { icon: "👁️", title: "วิสัยทัศน์ (Vision)", desc: "เป็น Digital Agency อันดับหนึ่งในใจลูกค้า ที่ผู้ประกอบการนึกถึงเมื่อรันโปรเจคยากๆ และต้องการผลลัพธ์ที่จับต้องได้" },
            { icon: "💎", title: "ค่านิยม (Core Values)", desc: "Code สะอาด, มุ่งเน้น Performance, ซื่อสัตย์โปร่งใส, และเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอไม่มีวันหยุด" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-6 shadow-inner text-4xl transform -rotate-3 hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="relative bg-black dark:bg-gray-900 rounded-[3rem] shadow-2xl p-8 md:p-16 mb-32 overflow-hidden text-white pattern-dots"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-purple-900/40" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

          <motion.div variants={itemVariants} className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              ทำไมเราถึงเหนือกว่า?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              นี่คือสิ่งที่คุณจะได้รับเมื่อตัดสินใจร่วมงานกับทีม Clean Code 1986
            </p>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Modern Tech Stack", description: "เราใช้เทคโนโลยีล้ำสมัยอย่าง Next.js 15, React, และ Supabase ล้ำที่สุดในตลาด" },
              { icon: "🎨", title: "Premium UI/UX", description: "งานดีไซน์หรูหรา ใช้งานง่าย พร้อม Animation แบบ Micro-interactions ที่ไหลลื่น" },
              { icon: "🚀", title: "Blazing Fast", description: "รีดแบนด์วิธให้เว็บโหลดไวติดจรวด โกยคะแนน Lighthouse ทะลุ 90+ ทุกหมวดหมู่" },
              { icon: "🔒", title: "Enterprise Security", description: "ล็อกแน่นหนา ป้องกันการโจมตีทางไซเบอร์ พร้อมระบบจัดการสิทธิ์ขั้นสูง" },
              { icon: "📱", title: "Fully Responsive", description: "แสดงผลรอดเด่นสวยงามบนทุกอุปกณ์ ตั้งแต่จอมือถือไปจนถึงจอ 4K ใหญ่ยักษ์" },
              { icon: "💬", title: "Excellent Consulting", description: "มากกว่าคนทำระบบ เราให้คำปรึกษาทางธุรกิจและชี้แจงสถานะชัดเจนทุกสัปดาห์" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-24 relative">
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
              The Digital Workforce
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
              ขับเคลื่อนความสำเร็จด้วยทีมระดับแนวหน้า
            </motion.h3>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              เราผสานพลังสมองของ <b className="text-gray-900 dark:text-white">มนุษย์ (Human Expert)</b> เข้ากับความรวดเร็วของ <b className="text-indigo-600 dark:text-indigo-400">ปัญญาประดิษฐ์ (AI Agents)</b> เพื่อทลายทุกข้อจำกัดและเสกงานให้เสร็จสมบูรณ์ระดับเทพ ไวและเนียบกว่าใคร
            </motion.p>
          </motion.div>

          {/* HUMAN LEADERSHIP */}
          <motion.div 
            className="grid grid-cols-1 gap-8 relative z-10 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {team.filter(m => m.id === "1").map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-600 to-indigo-900 dark:from-slate-800 dark:to-slate-900 rounded-[3rem] shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 relative group border border-white/10 dark:border-gray-700/50"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex flex-col lg:flex-row items-center p-8 md:p-16 gap-10 md:gap-16 relative z-10">
                  <div className="flex-shrink-0 relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl group-hover:border-white/30 transition-colors duration-500">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      sizes="(max-width: 768px) 224px, 288px"
                      priority
                    />
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cyan-200 text-sm font-bold tracking-widest mb-6 backdrop-blur-md border border-white/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </span>
                      HUMAN LEADERSHIP 
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                      {member.name}
                    </h3>
                    <div className="text-cyan-300 font-semibold text-xl md:text-2xl mb-6">
                      {member.role}
                    </div>
                    <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-[#0077b5] rounded-xl text-white font-bold transition-all backdrop-blur hover:shadow-lg hover:shadow-[#0077b5]/30 hover:-translate-y-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          LinkedIn
                        </a>
                      )}
                      {member.githubUrl && (
                        <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-black rounded-xl text-white font-bold transition-all backdrop-blur hover:shadow-lg hover:shadow-black/30 hover:-translate-y-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          GitHub
                        </a>
                      )}
                      
                      <Link 
                        href={`/about/cv/${member.id}`}
                        className="group flex items-center gap-3 px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-xl font-extrabold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                         <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                         Read Full CV
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI AGENTS GRID */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {team.filter(m => m.id !== "1").map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700/50 rounded-3xl p-8 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Decorative background glow for AI */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-48 h-48 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                   <div className="flex justify-between items-start mb-6">
                     <div className="relative w-24 h-24 rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white dark:border-gray-700 transform group-hover:rotate-3 transition-transform duration-300">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="96px"
                        />
                     </div>
                     <span className="px-3 py-1 text-xs font-black uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800/50">
                       AI AGENT ✨
                     </span>
                   </div>

                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700/50">
                    {member.role}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium flex-1">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global CTA Highlight */}
        {SITE.hiring.isHiring && (
          <motion.div 
            className="relative rounded-[3rem] shadow-xl overflow-hidden mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient-x" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">
                อยากเป็นส่วนหนึ่งของการสร้างสุดยอดเทคโนโลยีไหม?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto drop-shadow font-medium">
                เรากำลังเปิดรับคนเก่งๆ ไฟแรง ที่หลงใหลในการเขียนโค้ดและอยากเติบโตไปพร้อมกับเราแบบก้าวกระโดด
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact?topic=สมัครงาน"
                  className="px-10 py-5 bg-white text-indigo-700 hover:bg-gray-50 font-extrabold rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1"
                >
                  ยื่น Resume / สมัครร่วมทีมทันที
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
