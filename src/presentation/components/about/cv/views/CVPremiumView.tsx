"use client";

import { TeamMemberCVViewModel } from "@/src/presentation/presenters/about/TeamMemberCVPresenter";
import { ArrowLeft, Briefcase, Code, GraduationCap, Languages, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThaiPrint = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-print",
  display: "swap",
});

interface CVPremiumViewProps {
  viewModel: TeamMemberCVViewModel;
}

export const CVPremiumView: FC<CVPremiumViewProps> = ({ viewModel }) => {
  const { member, cv } = viewModel;
  
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `CV_${member.name.replace(/\s+/g, '_')}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 10mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          background-color: white !important;
        }
        /* Hide shadows and optimize for print */
        * {
          box-shadow: none !important;
          font-family: var(--font-noto-print), ui-sans-serif, system-ui, sans-serif !important;
        }
      }
    `,
  });

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls: Back & Print */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/about" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            กลับไปหน้าเกี่ยวกับเรา
          </Link>

          <button
            onClick={() => handlePrint()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Printer className="w-4 h-4" />
            <span>พิมพ์ Resume / CV</span>
          </button>
        </div>

        {/* Printable Content Area */}
        <div ref={contentRef} className={`print-container ${notoSansThaiPrint.variable}`}>
          {/* Header Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-900/40 dark:to-purple-900/40 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              
              <div className="flex-shrink-0 relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 192px"
                  priority
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
                  {member.role}
                </h2>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm shadow-sm border border-white/20 dark:border-gray-700/50">
                  {cv.professionalSummary}
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Left/Center Column) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Experience Section */}
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-600 dark:text-blue-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ประสบการณ์การทำงาน</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent print:before:hidden">
                {cv.experience.map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active print:break-inside-avoid print:mb-6">
                    {/* Circle marker */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 bg-blue-500 dark:bg-blue-400 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2" />
                    
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 p-6 bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <span className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit mb-2 md:mb-0">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                      <h5 className="text-base font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-500 mr-2 mt-1">▹</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-8">
            
            {/* Skills */}
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 print:break-inside-avoid print:shadow-none print:border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">ทักษะความเชี่ยวชาญ</h3>
              </div>
              
              <div className="space-y-6">
                {cv.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium border border-gray-200 dark:border-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 print:break-inside-avoid print:shadow-none print:border-gray-200 print:mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-xl text-green-600 dark:text-green-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">การศึกษา</h3>
              </div>
              
              <div className="space-y-4">
                {cv.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-green-200 dark:border-green-800 pl-4">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 block mb-1">{edu.period}</span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    {edu.description && <p className="text-xs text-gray-500 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 print:break-inside-avoid print:shadow-none print:border-gray-200 print:mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl text-purple-600 dark:text-purple-400">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">ภาษา</h3>
              </div>
              
              <div className="space-y-4">
                {cv.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">{lang.language}</span>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-lg">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
        </div> {/* End of Printable Content */}

      </div>
    </div>
  );
};
