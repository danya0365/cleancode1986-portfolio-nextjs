"use client";

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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ทีมของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
              >
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      💼
                    </a>
                  )}
                  {member.githubUrl && (
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      🐙
                    </a>
                  )}
                  {member.twitterUrl && (
                    <a
                      href={member.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      🐦
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
      </div>
    </div>
  );
}
