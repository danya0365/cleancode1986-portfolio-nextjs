"use client";

import { useTemplateStore, TemplateType } from "@/src/presentation/store/useTemplateStore";
import { Bot, Sparkles, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MascotOnboarding() {
  const [step, setStep] = useState<"enter" | "dialog" | "magic" | "exit">("enter");
  const setTemplate = useTemplateStore((state) => state.setTemplate);
  const setHasSeenOnboarding = useTemplateStore((state) => state.setHasSeenOnboarding);

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setStep("dialog");
    }, 1200); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSelect = (theme: TemplateType) => {
    setStep("magic");
    
    // Magic animation lasts 1.5s
    setTimeout(() => {
      setTemplate(theme);
      
      // Delay before flying away
      setTimeout(() => {
        setStep("exit");
        
        // Destroy component
        setTimeout(() => {
          setHasSeenOnboarding(true);
          document.body.style.overflow = "unset";
        }, 1000);
      }, 800);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center p-4">
      
      {/* Dark Overlay when dialog is active */}
      <AnimatePresence>
        {(step === "dialog" || step === "magic") && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* The Dialog Bubble */}
        <AnimatePresence>
          {step === "dialog" && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl mb-8 max-w-md w-full mx-4 pointer-events-auto relative"
            >
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 rounded-sm" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                สวัสดีนักเดินทาง!
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                ผมคือผู้ช่วยส่วนตัวของคุณ เราสามารถปรับหน้าตาเว็บไซต์ให้เข้ากับสไตล์คุณได้นะ 
                <br /><strong>วันนี้อยากได้ Vibe แบบไหนดีครับ?</strong>
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => handleSelect("premium")}
                  className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-blue-50 rounded-2xl font-bold text-gray-700 hover:text-blue-700 transition-all border-2 border-transparent hover:border-blue-200 flex items-center shadow-sm hover:shadow-md"
                >
                  <span className="text-2xl mr-3">✨</span> 
                  <span className="text-lg">Premium โหมดหรูหรา</span>
                </button>
                <button
                   onClick={() => handleSelect("retroTechMagazine")}
                   className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-[#FF00FF]/10 rounded-2xl font-bold text-gray-700 hover:text-[#FF00FF] transition-all border-2 border-transparent hover:border-[#FF00FF]/30 uppercase flex items-center shadow-sm hover:shadow-md"
                >
                  <span className="text-2xl mr-3">⚡</span> 
                  <span className="text-lg">Retro Tech จัดจ้าน</span>
                </button>
                <button
                   onClick={() => handleSelect("terminal")}
                   className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-black rounded-2xl font-bold text-gray-700 hover:text-[#39FF14] transition-all border-2 border-transparent hover:border-[#39FF14] font-mono flex items-center shadow-sm hover:shadow-md group"
                >
                  <span className="text-2xl mr-3 opacity-70 group-hover:opacity-100">&gt;_</span> 
                  <span className="text-lg">Terminal สายเทค</span>
                </button>
                
                <div className="pt-2 pb-1">
                  <button 
                    onClick={() => {
                       setHasSeenOnboarding(true); 
                       document.body.style.overflow = "unset";
                    }}
                    className="w-full text-center text-sm font-medium text-gray-400 hover:text-gray-600 underline underline-offset-4"
                  >
                    ข้ามไปก่อน (Skip)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Mascot Container */}
        <div className="relative pointer-events-auto">
          <motion.div
             initial={{ y: 800, scale: 0.5, rotate: -20 }}
             animate={
               step === "enter"
                 ? { y: 0, scale: 1, rotate: 0 }
                 : step === "dialog"
                 ? { y: [0, -15, 0], scale: 1, rotate: 0 }
                 : step === "magic"
                 ? { y: -50, scale: [1, 1.2, 1], rotate: 1080 }
                 : { y: -1000, x: 200, scale: 0, rotate: 45 } // exit
             }
             transition={{
               duration: step === "magic" ? 1.5 : step === "exit" ? 1 : 1,
               y: step === "dialog" ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { type: "spring", bounce: 0.4 },
               rotate: step === "magic" ? { duration: 1.5, ease: "easeInOut" } : undefined
             }}
             className="relative z-10 cursor-pointer"
             whileHover={step === "dialog" ? { scale: 1.1 } : undefined}
             whileTap={step === "dialog" ? { scale: 0.95 } : undefined}
          >
             {/* Magic Sparkles Burst */}
             <AnimatePresence>
               {step === "magic" && (
                 <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 2 }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 flex items-center justify-center pointer-events-none"
                 >
                   <Sparkles className="w-32 h-32 text-yellow-400 absolute animate-[ping_0.6s_linear_infinite]" />
                   <Sparkles className="w-24 h-24 text-blue-400 absolute animate-[spin_1s_linear_infinite_reverse]" />
                   <Sparkles className="w-40 h-40 text-[#FF00FF] absolute animate-[pulse_0.4s_linear_infinite]" />
                 </motion.div>
               )}
             </AnimatePresence>

             <div className="w-28 h-28 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 rounded-[2rem] border-4 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
               {/* Visor Reflection */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 transform -skew-y-6" />
               <Bot className="w-14 h-14 text-white relative z-10" />
             </div>
          </motion.div>
          
          {/* Mascot Floor Shadow */}
          <AnimatePresence>
            {step === "dialog" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.2, 0.4], scaleX: [1, 0.8, 1] }}
                exit={{ opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-20 h-4 bg-black rounded-[100%] blur-md mx-auto mt-8 absolute -bottom-16 left-1/2 transform -translate-x-1/2" 
              />
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
