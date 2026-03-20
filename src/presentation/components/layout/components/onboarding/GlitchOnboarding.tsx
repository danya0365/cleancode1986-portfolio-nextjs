"use client";

import { useTemplateStore, TemplateType } from "@/src/presentation/store/useTemplateStore";
import { useEffect, useState } from "react";
import { Sparkles, TerminalSquare, Zap } from "lucide-react";

export function GlitchOnboarding() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const setTemplate = useTemplateStore((state) => state.setTemplate);
  const setHasSeenOnboarding = useTemplateStore((state) => state.setHasSeenOnboarding);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasTriggered && window.scrollY > 300) {
        setHasTriggered(true);
        triggerGlitchEvent();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  const triggerGlitchEvent = () => {
    setIsGlitching(true);
    
    // Simulate glitch duration
    setTimeout(() => {
      setIsGlitching(false);
      setShowModal(true);
      document.body.style.overflow = "hidden"; // Lock background naturally
    }, 1200);
  };

  const handleSelectReality = (theme: TemplateType) => {
    setTemplate(theme);
    setHasSeenOnboarding(true);
    document.body.style.overflow = "unset";
  };

  const handleSkip = () => {
    setHasSeenOnboarding(true);
    document.body.style.overflow = "unset";
  };

  if (!hasTriggered && !isGlitching && !showModal) return null;

  return (
    <>
      {/* Glitch Effect Overlay */}
      {isGlitching && (
        <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-difference overflow-hidden">
          <div className="absolute inset-0 bg-[#FF00FF] mix-blend-screen opacity-50 animate-[ping_0.1s_linear_infinite_alternate]" />
          <div className="absolute inset-0 bg-[#00FFFF] mix-blend-screen opacity-50 animate-[ping_0.15s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-black text-9xl uppercase tracking-tighter opacity-80 blur-sm scale-150 animate-pulse">
            GLITCH
          </div>
          <div className="absolute top-1/4 w-full h-8 bg-black/50 animate-[bounce_0.2s_infinite]" />
          <div className="absolute bottom-1/4 w-full h-16 bg-white/20 animate-[bounce_0.3s_infinite_reverse]" />
        </div>
      )}

      {/* Modal Selection */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={handleSkip}
            className="absolute top-6 right-6 px-4 py-2 border-2 border-white text-white font-bold hover:bg-white hover:text-black uppercase transition-colors"
          >
            [ X ] SKIP
          </button>
          
          <div className="bg-white border-8 border-black p-8 max-w-2xl w-full shadow-[16px_16px_0_0_#FF00FF] transform rotate-1 animate-in fade-in zoom-in duration-300">
            <div className="bg-black text-white font-black text-2xl uppercase p-4 mb-8 transform -rotate-2 -ml-4 shadow-[4px_4px_0_0_#00FFFF]">
              🚨 SYSTEM BOREDOM DETECTED!
            </div>
            
            <p className="text-xl font-bold mb-8">
              Looks like you have been scrolling in Normal Mode for too long. Want to change your reality?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button
                onClick={() => handleSelectReality("premium")}
                className="flex flex-col items-center bg-gray-100 p-4 border-2 border-black hover:bg-gray-200 transition-colors"
              >
                <Sparkles className="w-8 h-8 mb-2" />
                <span className="font-bold">STAY NORMAL</span>
              </button>

              <button
                onClick={() => handleSelectReality("retroTechMagazine")}
                className="flex flex-col items-center bg-[#39FF14] p-4 border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Zap className="w-8 h-8 font-bold mb-2" />
                <span className="font-black uppercase tracking-wider">GO BRUTAL</span>
              </button>

              <button
                onClick={() => handleSelectReality("terminal")}
                className="flex flex-col items-center bg-black text-[#00FFFF] p-4 border-2 border-[#00FFFF] hover:bg-gray-900 transition-colors"
              >
                <TerminalSquare className="w-8 h-8 mb-2" />
                <span className="font-mono font-bold">START HACKING</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
