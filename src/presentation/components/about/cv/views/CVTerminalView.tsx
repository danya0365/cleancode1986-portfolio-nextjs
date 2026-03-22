"use client";

import { TeamMemberCVViewModel } from "@/src/presentation/presenters/about/TeamMemberCVPresenter";
import { FC, useRef } from "react";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
import { TerminalAsciiLogo } from "@/src/presentation/components/ui/terminal/TerminalAsciiLogo";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import { TerminalImage } from "@/src/presentation/components/ui/terminal/TerminalImage";
import { JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";

const jetBrainsMonoPrint = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-print",
  display: "swap",
});

const notoSansThaiPrint = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-print",
  display: "swap",
});

interface CVTerminalViewProps {
  viewModel: TeamMemberCVViewModel;
}

export const CVTerminalView: FC<CVTerminalViewProps> = ({ viewModel }) => {
  const { member, cv } = viewModel;
  
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `CV_${member.name.replace(/\s+/g, '_')}`,
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      @media print {
        body, html { background-color: white !important; }
        * { 
          -webkit-print-color-adjust: exact !important; 
          print-color-adjust: exact !important; 
          font-family: var(--font-jb-print), var(--font-noto-print), "Courier New", Courier, ui-monospace, SFMono-Regular, monospace !important;
        }
        
        .print-content-wrapper { 
          background-color: white !important; 
          color: black !important; 
          padding: 0 !important;
        }
        
        .print-content-wrapper * {
          color: black !important;
          border-color: #bbb !important;
          background-color: transparent !important;
          box-shadow: none !important;
          text-shadow: none !important;
        }
        
        .terminal-block-bg { 
          border: 1px dashed #888 !important; 
          padding: 12px !important;
          margin-bottom: 12px !important;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .experience-item, .skills-item, .education-item {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        .print-hidden { display: none !important; }
      }
    `,
  });

  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Navigation & Controls */}
        <div className="flex justify-between items-end mb-2 border-b border-green-900 pb-4 print-hidden flex-wrap gap-4">
          <div>
             <Link href="/about" className="text-green-600 hover:text-green-400 border border-green-800 px-3 py-1 hover:bg-green-900/30 transition-colors">
               [cd ..]
             </Link>
          </div>
          <button 
            onClick={() => handlePrint()}
            className="text-amber-500 hover:text-amber-300 border border-amber-800 px-3 py-1 hover:bg-amber-900/30 transition-colors font-bold"
          >
            [ ./print_daemon.sh ]
          </button>
        </div>

        <div ref={contentRef} className={`print-content-wrapper flex flex-col gap-4 ${jetBrainsMonoPrint.variable} ${notoSansThaiPrint.variable}`}>
          {/* Header */}
          <div className="mb-2">
            <div className="overflow-x-auto print-hidden">
              <TerminalAsciiLogo 
                text="DOS_CV" 
                className="text-[10px] sm:text-[13px] md:text-sm tracking-tighter sm:tracking-normal text-green-600 mb-4" 
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-1 whitespace-pre-wrap">
              # USER_RECORD: {member.name}
            </h1>
            <p className="text-green-700 text-sm">Extracting curriculum vitae data payload...</p>
          </div>

          {/* Identity Block */}
          <TerminalBlock command={`cat /etc/passwd | grep ${member.id}`} path="~/cv">
            <div className="terminal-block-bg border border-green-900 bg-black/50 p-4 sm:p-6 mb-2">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 border-2 border-green-500 relative">
                  <TerminalImage src={member.avatar} alt={member.name} fallbackText="?" />
                </div>
                <div className="flex-1">
                  <div className="text-amber-400 font-bold text-xl mb-1">{member.name.toUpperCase()}</div>
                  <div className="text-green-600 font-bold mb-3 border-b border-green-900/50 pb-2 inline-block">ROLE: {member.role}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    {cv.professionalSummary}
                  </div>
                </div>
              </div>
            </div>
          </TerminalBlock>

          {/* Experience */}
          <TerminalBlock command="cat /var/log/experience.log" path="~/cv">
             <div className="terminal-block-bg p-4 bg-black border border-green-900/50">
               <div className="text-blue-400 font-bold mb-4 border-b border-green-900/50 pb-2">== EXPERIENCE_HISTORY ==</div>
               <div className="flex flex-col gap-6">
                  {cv.experience.map((exp, idx) => (
                    <div key={idx} className="experience-item border-l-2 border-green-800 pl-4 py-1">
                       <div className="text-green-500 font-bold"><span className="text-green-700">[{exp.period}]</span> {exp.role}</div>
                       <div className="text-amber-500 text-sm mb-2">@ {exp.company}</div>
                       <div className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</div>
                       <ul className="text-gray-500 text-xs sm:text-sm space-y-1">
                         {exp.achievements.map((ach, aIdx) => (
                           <li key={aIdx}>&gt; {ach}</li>
                         ))}
                       </ul>
                    </div>
                  ))}
               </div>
             </div>
          </TerminalBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {/* Skills */}
              <TerminalBlock command="tree /usr/local/skills" path="~/cv">
                <div className="terminal-block-bg p-4 bg-black border border-green-900/50">
                   <div className="text-fuchsia-400 font-bold mb-4 border-b border-green-900/50 pb-2">/usr/local/skills</div>
                   {cv.skills.map((skillGroup, idx) => (
                      <div key={idx} className="skills-item mb-4">
                        <div className="text-green-500 font-bold mb-1">├── {skillGroup.category}</div>
                        <div className="pl-6 flex flex-wrap gap-2 mt-2">
                           {skillGroup.items.map((item, iIdx) => (
                             <span key={iIdx} className="text-gray-400 text-sm border border-green-900 px-2 py-0.5">[{item}]</span>
                           ))}
                        </div>
                      </div>
                   ))}
                </div>
              </TerminalBlock>
            </div>

            <div className="flex flex-col gap-4">
              {/* Education */}
              <TerminalBlock command="cat /etc/education.info" path="~/cv">
                <div className="terminal-block-bg p-4 bg-black border border-green-900/50">
                   <div className="text-cyan-400 font-bold mb-4 border-b border-green-900/50 pb-2">== ACADEMIC_RECORDS ==</div>
                   <div className="flex flex-col gap-4">
                      {cv.education.map((edu, idx) => (
                        <div key={idx} className="education-item border-l-2 border-green-800 pl-3">
                           <div className="text-green-500 font-bold text-sm">{edu.degree}</div>
                           <div className="text-amber-500 text-xs mb-1">{edu.institution} <span className="text-green-700">({edu.period})</span></div>
                           {edu.description && <div className="text-gray-500 text-xs">{edu.description}</div>}
                        </div>
                      ))}
                   </div>
                </div>
              </TerminalBlock>

              {/* Languages */}
              <TerminalBlock command="locale -a" path="~/cv">
                <div className="terminal-block-bg p-4 bg-black border border-green-900/50">
                   <div className="text-red-400 font-bold mb-4 border-b border-green-900/50 pb-2">== LANGUAGE_LOCALES ==</div>
                   <div className="flex flex-col gap-2">
                      {cv.languages.map((lang, idx) => (
                        <div key={idx} className="skills-item flex justify-between items-center text-sm border-b border-green-900/30 pb-1">
                           <span className="text-gray-400">{lang.language}</span>
                           <span className="text-green-500 font-bold">[{lang.proficiency}]</span>
                        </div>
                      ))}
                   </div>
                </div>
              </TerminalBlock>
            </div>
          </div>

          <div className="text-center text-green-800 text-xs mt-8 print-hidden">EOF</div>
        </div>

        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2 print-hidden">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~/cv$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>

      </div>
    </div>
  );
};
