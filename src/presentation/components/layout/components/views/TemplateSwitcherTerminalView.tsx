"use client";

import React, { useState } from "react";
import type { TemplateType } from "../../../../store/useTemplateStore";

interface Props {
  currentTemplate: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export function TemplateSwitcherTerminalView({ setTemplate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100] sm:bottom-10 sm:left-10 flex flex-col items-start font-mono selection:bg-[#39FF14] selection:text-black">
      {/* Options Panel */}
      <div 
        className={`mb-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 origin-bottom-left
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <button
          onClick={() => { setTemplate("premium"); setIsOpen(false); }}
          className="px-4 py-2 border border-[#39FF14]/30 bg-black/80 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors flex items-center gap-3 text-left w-full backdrop-blur-sm"
        >
          <span className="text-gray-500">{'>'}</span> Premium UI
        </button>

        <button
          onClick={() => { setTemplate("terminal"); setIsOpen(false); }}
          className="px-4 py-2 border border-[#39FF14] bg-[#39FF14]/20 text-[#39FF14] flex items-center gap-3 text-left w-full backdrop-blur-sm font-bold shadow-[0_0_10px_rgba(57,255,20,0.5)]"
        >
          <span className="text-white animate-pulse">_</span> Terminal UI [Active]
        </button>

        <button
          onClick={() => { setTemplate("retroTechMagazine"); setIsOpen(false); }}
          className="px-4 py-2 border border-[#39FF14]/30 bg-black/80 text-[#39FF14] hover:bg-[#39FF14]/10 transition-colors flex items-center gap-3 text-left w-full backdrop-blur-sm"
        >
          <span className="text-gray-500">{'>'}</span> Retro Tech Mag
        </button>
      </div>

      {/* Hacker Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 h-12 border border-[#39FF14] bg-black/80 text-[#39FF14] font-bold hover:bg-[#39FF14]/20 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all flex items-center gap-2 backdrop-blur-sm"
        aria-label="Toggle Template Selector"
      >
        <span>[</span>
        <span className={isOpen ? "text-white" : ""}>SWITCH_THEME</span>
        <span>]</span>
        <span className="animate-pulse font-normal ml-1">_</span>
      </button>
    </div>
  );
}
