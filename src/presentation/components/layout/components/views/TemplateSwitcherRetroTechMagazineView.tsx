"use client";

import React, { useState } from "react";
import type { TemplateType } from "../../../../store/useTemplateStore";

interface Props {
  currentTemplate: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export function TemplateSwitcherRetroTechMagazineView({ setTemplate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100] sm:bottom-10 sm:left-10 flex flex-col items-start font-sans">
      {/* Options Panel */}
      <div 
        className={`mb-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 origin-bottom-left
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"}
        `}
      >
        <button
          onClick={() => { setTemplate("premium"); setIsOpen(false); }}
          className={`px-4 py-3 border-4 border-black flex items-center gap-3 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000] active:scale-95 bg-white shadow-[4px_4px_0_0_#000]`}
        >
          <span className="text-2xl">✨</span>
          <div className="text-left text-black">
            <div className="font-black uppercase tracking-tighter text-lg leading-tight">Premium UI</div>
            <div className="text-xs font-bold text-gray-500 uppercase">Glassmorphism</div>
          </div>
        </button>

        <button
          onClick={() => { setTemplate("terminal"); setIsOpen(false); }}
          className={`px-4 py-3 border-4 border-black flex items-center gap-3 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000] active:scale-95 bg-black text-[#39FF14] shadow-[4px_4px_0_0_#000]`}
        >
          <span className="text-2xl">💻</span>
          <div className="text-left">
            <div className="font-black uppercase tracking-tighter text-lg leading-tight">Terminal UI</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Hacker Effect</div>
          </div>
        </button>

        <button
          onClick={() => { setTemplate("retroTechMagazine"); setIsOpen(false); }}
          className={`px-4 py-3 border-4 border-black flex items-center gap-3 transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#000] active:scale-95 bg-[#00FFFF] shadow-[4px_4px_0_0_#FF00FF]`}
        >
          <span className="text-2xl">📰</span>
          <div className="text-left text-black">
            <div className="font-black uppercase tracking-tighter text-lg leading-tight">Retro Mag</div>
            <div className="text-xs font-bold text-[#FF00FF] uppercase">Currently Active</div>
          </div>
        </button>
      </div>

      {/* Brutalist Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-6 h-14 border-4 border-black font-black uppercase tracking-widest text-lg flex items-center justify-center transition-all bg-[#FF00FF] text-white shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2`}
        aria-label="Toggle Template Selector"
      >
        <span className="mr-3 text-2xl">{isOpen ? "×" : "☻"}</span>
        THEMES
      </button>
    </div>
  );
}
