"use client";

import { SITE } from "@/src/data/master/site";
import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import { useAboutPresenter } from "@/src/presentation/presenters/about/useAboutPresenter";
import Image from "next/image";
import Link from "next/link";

interface AboutPageProps {
  initialViewModel?: AboutViewModel;
}

export function AboutPage({ initialViewModel }: AboutPageProps) {
  const { viewModel, loading, error } = useAboutPresenter(initialViewModel);

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

  const { teamMembers: team } = viewModel;

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ทีมนักพัฒนามืออาชีพที่พร้อมสร้างโซลูชันดิจิทัลคุณภาพสูง
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                เรื่องราวของเรา
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Clean Code 1986 ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะสร้างซอฟต์แวร์คุณภาพสูง
                ที่ช่วยให้ธุรกิจเติบโตได้อย่างยั่งยืน
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                เราเชื่อว่าโค้ดที่ดีต้องมีความสะอาด อ่านง่าย และดูแลรักษาได้ในระยะยาว
                ทุกโปรเจคที่เราทำเราให้ความสำคัญกับคุณภาพและประสิทธิภาพ
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                ด้วยประสบการณ์กว่า 5 ปีในวงการพัฒนาซอฟต์แวร์
                เราพร้อมเป็นพันธมิตรที่เชื่อถือได้สำหรับธุรกิจของคุณ
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-9xl">
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              พันธกิจ
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              สร้างซอฟต์แวร์คุณภาพสูงที่ตอบโจทย์ธุรกิจและช่วยให้ลูกค้าประสบความสำเร็จ
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              วิสัยทัศน์
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              เป็นบริษัทพัฒนาซอฟต์แวร์ชั้นนำที่ลูกค้าไว้วางใจและเชื่อมั่นในคุณภาพ
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ค่านิยม
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              คุณภาพ ความซื่อสัตย์ นวัตกรรม และการพัฒนาอย่างต่อเนื่อง
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ทำไมต้องเลือกเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚡",
                title: "เทคโนโลยีทันสมัย",
                description: "ใช้เทคโนโลยีล่าสุดที่เหมาะสมกับโปรเจค",
              },
              {
                icon: "🎨",
                title: "UI/UX ที่ดี",
                description: "ออกแบบให้ใช้งานง่ายและสวยงาม",
              },
              {
                icon: "🚀",
                title: "Performance สูง",
                description: "โหลดเร็ว ใช้งานลื่น ประสบการณ์ที่ดี",
              },
              {
                icon: "🔒",
                title: "ปลอดภัย",
                description: "ให้ความสำคัญกับความปลอดภัยของข้อมูล",
              },
              {
                icon: "📱",
                title: "Responsive",
                description: "รองรับทุกอุปกรณ์ ทั้งมือถือ แท็บเล็ต คอมพิวเตอร์",
              },
              {
                icon: "💬",
                title: "สื่อสารชัดเจน",
                description: "อัพเดทความคืบหน้าสม่ำเสมอ รับฟังความคิดเห็น",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24 relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-4xl bg-blue-500/10 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              The Digital Workforce
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
              ขับเคลื่อนความสำเร็จด้วยทีมระดับแนวหน้า
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ผสานความเชี่ยวชาญของมนุษย์เข้ากับศักยภาพไร้ขีดจำกัดของ AI เพื่อสร้างสรรค์นวัตกรรมซอฟต์แวร์ที่ดีที่สุดให้ธุรกิจคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
            {/* Human CEO Card (Featured) */}
            {team.filter(m => m.id === "1").map((member) => (
              <div
                key={member.id}
                className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden mb-8 transform hover:-translate-y-2 transition-transform duration-500 relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 relative z-10">
                  <div className="flex-shrink-0 relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-xl group-hover:border-white/40 transition-colors duration-500">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, 224px"
                      priority
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm font-semibold tracking-wide mb-4 backdrop-blur-sm border border-white/10">
                       HUMAN LEADERSHIP 
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-300 font-medium text-lg md:text-xl mb-6">
                      {member.role}
                    </div>
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center md:justify-start gap-4">
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                      {member.githubUrl && (
                        <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                    </div>

                    {/* View CV Button */}
                    <div className="mt-8 flex justify-center md:justify-start">
                      <Link 
                        href={`/about/cv/${member.id}`}
                        className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-blue-900 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:shadow-lg hover:shadow-white/20"
                      >
                         <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                         </svg>
                         <span className="font-bold tracking-wide">ดู RESUME / CV</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* AI Team Grid */}
            {team.filter(m => m.id !== "1").map((member) => (
              <div
                key={member.id}
                className="group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 md:p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Decorative background glow for AI */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                   <div className="flex justify-between items-start mb-6">
                     <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 dark:border-gray-600/50 transform group-hover:rotate-3 transition-transform duration-300">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                     </div>
                     <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg">
                       AI AGENT
                     </span>
                   </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700/50">
                    {member.role}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {SITE.hiring.isHiring && (
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              มาร่วมงานกับเราสิ!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              เรากำลังมองหาคนเก่งๆ มาร่วมทีม
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-colors"
            >
              ติดต่อเรา
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
