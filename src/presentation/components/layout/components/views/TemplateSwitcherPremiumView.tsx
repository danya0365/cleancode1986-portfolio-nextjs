"use client";

import { useState } from "react";
import { Palette, X } from "lucide-react";
import type { TemplateType } from "../../../../store/useTemplateStore";

interface Props {
  currentTemplate: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export function TemplateSwitcherPremiumView({ currentTemplate, setTemplate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100] sm:bottom-10 sm:left-10 flex flex-col items-start">
      {/* Options Panel */}
      <div 
        className={`mb-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 origin-bottom-left
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"}
        `}
      >
        <button
          onClick={() => { setTemplate("premium"); setIsOpen(false); }}
          className={`px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md transition-all shadow-lg border
            ${currentTemplate === "premium" 
              ? "bg-indigo-600 border-indigo-500 text-white" 
              : "bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black"
            }`}
        >
          <span className="text-xl">✨</span>
          <div className="text-left">
            <div className="font-bold text-sm">Premium UI</div>
            <div className={`text-[10px] ${currentTemplate === "premium" ? "text-indigo-200" : "text-gray-500"}`}>Glassmorphism & Smooth</div>
          </div>
        </button>

        <button
          onClick={() => { setTemplate("terminal"); setIsOpen(false); }}
          className={`px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md transition-all shadow-lg border
            ${currentTemplate === "terminal" 
              ? "bg-[#0f0f0f] border-green-500 text-green-400" 
              : "bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black"
            }`}
        >
          <span className="text-xl">💻</span>
          <div className="text-left">
            <div className="font-bold font-mono text-sm">Terminal UI</div>
            <div className={`text-[10px] ${currentTemplate === "terminal" ? "text-green-600" : "text-gray-500"}`}>Hacker / Neobrutalism</div>
          </div>
        </button>

        <button
          onClick={() => { setTemplate("retroTechMagazine"); setIsOpen(false); }}
          className={`px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md transition-all shadow-lg border
            ${currentTemplate === "retroTechMagazine" 
              ? "bg-[#f4f4f0] border-black border-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-black" 
              : "bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black"
            }`}
        >
          <span className="text-xl">📰</span>
          <div className="text-left">
            <div className="font-bold font-sans uppercase tracking-tighter text-sm">Retro Mag</div>
            <div className={`text-[10px] uppercase font-bold ${currentTemplate === "retroTechMagazine" ? "text-[#FF00FF]" : "text-gray-500"}`}>Brutalist Editorial</div>
          </div>
        </button>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ease-out shadow-xl backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-800/50 hover:bg-white dark:hover:bg-black hover:border-indigo-500/50 grayscale hover:grayscale-0 text-gray-800 dark:text-gray-200"
        aria-label="Toggle Template Selector"
      >
        <span className="transition-transform duration-300 hover:scale-110">
          {isOpen ? <X className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
        </span>
      </button>
    </div>
  );
}
