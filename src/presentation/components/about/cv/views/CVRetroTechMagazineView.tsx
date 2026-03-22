"use client";

import { TeamMemberCVViewModel } from "@/src/presentation/presenters/about/TeamMemberCVPresenter";
import { ArrowLeft, Briefcase, Code, GraduationCap, Languages, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThaiPrint = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-print",
  display: "swap",
});

interface CVRetroTechMagazineViewProps {
  viewModel: TeamMemberCVViewModel;
}

export const CVRetroTechMagazineView: FC<CVRetroTechMagazineViewProps> = ({ viewModel }) => {
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
        * {
          box-shadow: none !important;
          font-family: var(--font-noto-print), monospace, sans-serif !important;
        }
      }
    `,
  });

  return (
    <div className="bg-[#f4f4f0] text-black font-sans pb-24 min-h-screen">
      
      {/* Top Banner with Navigation */}
      <div className="border-b-8 border-black bg-[#FF00FF] px-6 py-6 border-t-8 mt-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center shadow-[8px_8px_0_0_#000]">
        <Link 
          href="/about" 
          className="flex items-center text-white font-black text-xl hover:underline underline-offset-4 decoration-4 uppercase tracking-wider mb-4 md:mb-0"
        >
          <ArrowLeft className="w-6 h-6 mr-2 font-bold" />
          BACK TO CREW
        </Link>

        <button
          onClick={() => handlePrint()}
          className="bg-[#00FFFF] text-black border-4 border-black px-6 py-3 font-black text-xl uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3"
        >
          <Printer className="w-5 h-5 font-bold" />
          PRINT_CV
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-16 px-4">
        <div ref={contentRef} className={`print-container ${notoSansThaiPrint.variable}`}>
          
          {/* Brutalist Header Area */}
          <div className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] relative overflow-hidden mb-16">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
              backgroundSize: '16px 16px'
            }} />
            
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
              {/* Avatar Box */}
              <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 border-8 border-black shadow-[8px_8px_0_0_#00FFFF] bg-[#FF00FF] relative transform -rotate-2">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                />
              </div>

              {/* Identity Details */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0_#39FF14]">
                  {member.name}
                </h1>
                <div className="bg-black text-[#00FFFF] font-black uppercase text-2xl md:text-3xl px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#FF00FF] w-fit mx-auto md:mx-0 transform rotate-1">
                  {member.role}
                </div>
                
                <p className="mt-8 font-bold text-lg leading-relaxed bg-gray-100 p-6 border-4 border-black border-dashed">
                  {cv.professionalSummary}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Main Content (Left/Center Column) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Experience Section */}
              <section className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] p-8 md:p-12 relative overflow-hidden print:shadow-none print:border-4">
                <div className="flex items-center gap-4 mb-10 border-b-8 border-black pb-6">
                  <div className="p-4 bg-[#FF00FF] border-4 border-black shadow-[4px_4px_0_0_#000] text-black transform -rotate-6">
                    <Briefcase className="w-8 h-8 font-bold" />
                  </div>
                  <RetroHeading className="text-4xl md:text-5xl" bg="transparent">EXP_LOGS</RetroHeading>
                </div>
                
                <div className="space-y-12">
                  {cv.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0 border-l-8 md:border-l-0 border-black print:break-inside-avoid">
                      <div className="md:bg-[#f4f4f0] md:border-4 md:border-black md:p-8 md:shadow-[8px_8px_0_0_#000] relative">
                        {/* Time period badge */}
                        <div className="absolute top-0 right-0 md:-top-4 md:-right-4 px-4 py-2 bg-[#00FFFF] border-4 border-black font-black uppercase text-sm shadow-[4px_4px_0_0_#FF00FF] transform rotate-3">
                          {exp.period}
                        </div>
                        
                        <h4 className="text-2xl font-black uppercase mb-2 mt-6 md:mt-0">{exp.role}</h4>
                        <h5 className="text-xl font-bold bg-black text-[#39FF14] inline-block px-3 py-1 mb-4 border-2 border-black">
                          {exp.company}
                        </h5>
                        <p className="text-lg font-medium mb-6">{exp.description}</p>
                        
                        <ul className="space-y-3">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start text-base font-bold bg-white p-3 border-2 border-black border-dashed">
                              <span className="text-[#FF00FF] mr-3 font-black text-xl leading-none">►</span>
                              <span>{ach}</span>
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
            <div className="space-y-12">
              
              {/* Skills */}
              <section className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] p-8 print:break-inside-avoid print:shadow-none print:border-4">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                  <div className="p-3 bg-[#39FF14] border-4 border-black shadow-[4px_4px_0_0_#000] text-black">
                    <Code className="w-6 h-6 font-bold" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">SKILLS</h3>
                </div>
                
                <div className="space-y-8">
                  {cv.skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold uppercase bg-black text-white px-3 py-1 mb-4 inline-block transform -rotate-1">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, i) => (
                          <RetroBadge key={i} color="cyan">
                            {skill}
                          </RetroBadge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] p-8 print:break-inside-avoid print:shadow-none print:border-4 print:mt-8">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
                  <div className="p-3 bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] text-black">
                    <GraduationCap className="w-6 h-6 font-bold" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">EDUCATION</h3>
                </div>
                
                <div className="space-y-6">
                  {cv.education.map((edu, index) => (
                    <div key={index} className="bg-gray-100 p-4 border-4 border-black border-double">
                      <span className="text-sm font-black bg-[#FF00FF] px-2 py-1 border-2 border-black inline-block mb-3 shadow-[2px_2px_0_0_#000] text-white">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-black uppercase">{edu.degree}</h4>
                      <p className="font-bold underline decoration-wavy decoration-[#00FFFF] underline-offset-4 mt-2">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-sm font-medium mt-3 border-t-2 border-black border-dashed pt-2">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section className="bg-[#39FF14] border-8 border-black shadow-[16px_16px_0_0_#000] p-8 print:break-inside-avoid print:shadow-none print:border-4 print:bg-white print:mt-8">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4 bg-white px-4 border-x-4 border-t-4 shadow-[4px_4px_0_0_#000]">
                  <Languages className="w-8 h-8 font-black py-2" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter py-2">LANGUAGES</h3>
                </div>
                
                <div className="space-y-4">
                  {cv.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#FF00FF]">
                      <span className="font-black text-xl uppercase tracking-wider">{lang.language}</span>
                      <span className="text-sm font-bold bg-black text-[#00FFFF] px-3 py-1 border-2 border-black">
                        {lang.proficiency}
                      </span>
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
