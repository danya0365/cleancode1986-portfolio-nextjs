"use client";

import { useTemplateStore, TemplateType } from "@/src/presentation/store/useTemplateStore";
import { Sparkles, TerminalSquare, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function BootSequenceOnboarding() {
  const [bootStep, setBootStep] = useState(0);
  const setTemplate = useTemplateStore((state) => state.setTemplate);
  const setHasSeenOnboarding = useTemplateStore((state) => state.setHasSeenOnboarding);

  useEffect(() => {
    // Lock scroll while active
    document.body.style.overflow = "hidden";
    
    // Simulate boot sequence text loading
    const timer1 = setTimeout(() => {
      setBootStep((prev) => Math.max(prev, 1));
    }, 800);
    const timer2 = setTimeout(() => {
      setBootStep((prev) => Math.max(prev, 2));
    }, 1500);
    const timer3 = setTimeout(() => {
      setBootStep((prev) => Math.max(prev, 3));
    }, 2200);
    
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSelectReality = (theme: TemplateType) => {
    setTemplate(theme);
    setHasSeenOnboarding(true);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4" style={{ backgroundColor: '#030712' }}>
      
      {/* Fallback Skip Button in case animations hang */}
      <button 
        onClick={() => setHasSeenOnboarding(true)}
        className="absolute top-6 right-6 px-4 py-2 border border-gray-700 text-gray-400 hover:text-white rounded-lg z-50 text-sm"
      >
        [ X ] SKIP INTRO
      </button>

      <div className="max-w-4xl w-full flex flex-col items-center">
        
        {/* Boot Logs */}
        <div className="font-mono mb-12 h-32 flex flex-col justify-end text-sm md:text-base w-full max-w-2xl text-left px-4" style={{ color: '#22c55e' }}>
          <p style={{ opacity: 0.7 }}>{`>`} CleanCode1986 OS (v1.0.0)</p>
          {bootStep >= 1 && <p style={{ opacity: 0.8 }}>{`>`} Loading kernel modules... [OK]</p>}
          {bootStep >= 2 && <p style={{ opacity: 0.9 }}>{`>`} Initializing reality engines... [OK]</p>}
          {bootStep >= 3 && <p className="font-bold mt-4 animate-pulse" style={{ color: '#ffffff' }}>{`>`} AWAITING REALITY SELECTION_</p>}
        </div>

        {/* Options */}
        {bootStep >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            <button
              onClick={() => handleSelectReality("premium")}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">PREMIUM</h3>
              <p className="text-gray-400 text-sm relative z-10">
                Smooth, modern, and professional. The default corporate reality.
              </p>
            </button>

            <button
              onClick={() => handleSelectReality("retroTechMagazine")}
              className="group relative bg-[#FF00FF]/10 border-4 border-transparent hover:border-[#39FF14] p-8 rounded-none transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#00FFFF] border-4 border-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-[4px_4px_0_0_#FF00FF]">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 drop-shadow-[2px_2px_0_#FF00FF]">RETRO TECH</h3>
              <p className="text-white/80 font-bold text-sm bg-black px-2 py-1">
                Brutal, loud, and nostalgic. Rule the magazine cover.
              </p>
            </button>

            <button
              onClick={() => handleSelectReality("terminal")}
              className="group relative bg-black border border-green-500/30 p-8 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex flex-col items-center text-center rounded-lg"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <TerminalSquare className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-mono text-green-500 font-bold mb-2">TERMINAL</h3>
              <p className="text-green-500/70 font-mono text-sm">
                Root access granted. No distractions. Pure code logic.
              </p>
            </button>

          </div>
        )}
      </div>
    </div>
  );
}
