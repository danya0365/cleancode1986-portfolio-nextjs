"use client";

import { SITE } from "@/src/data/master/site";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { useChatStore } from "@/src/presentation/stores/chat-store";

export function RetroCTASection() {
  const { openChat } = useChatStore();

  return (
    <RetroCard borderSize="lg" shadowSize="lg" className="bg-[#FF00FF] p-8 sm:p-16 text-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-50 transform -rotate-12 select-none pointer-events-none mix-blend-overlay">💬</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-50 transform rotate-12 select-none pointer-events-none mix-blend-overlay">⚡</div>
      
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-6 leading-tight flex flex-col items-center gap-4">
          <span className="bg-white px-6 py-2 border-4 sm:border-[6px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] -rotate-2">
            มีโปรเจกต์
          </span>
          <span className="text-white styling-stroke" style={{ WebkitTextStroke: '2px black', textShadow: '4px 4px 0px #00FFFF' }}>
            ในใจแล้วใช่ไหม?
          </span>
        </h2>
        
        <p className="text-lg sm:text-2xl font-bold bg-black text-white p-4 inline-block mb-12 shadow-[6px_6px_0_0_#00FFFF] sm:shadow-[8px_8px_0_0_#00FFFF] rotate-1">
          ทักแชทคุยกับ AI Assistant หรือทีมงานของเราได้ทันที!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 w-full max-w-3xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
          <button 
            onClick={openChat}
            className="flex-1 bg-[#39FF14] text-black border-4 sm:border-[6px] border-black px-6 py-4 font-black uppercase text-2xl sm:text-3xl text-center hover:bg-[#00FFFF] transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:scale-95 flex items-center justify-center gap-3 group"
          >
            <span className="group-hover:animate-bounce">⚡</span> เริ่มแชททันที
          </button>
          
          <RetroButton href="/contact" variant="white" className="sm:flex-none border-4 sm:border-[6px] py-4 px-6 text-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            ช่องทางอื่น
          </RetroButton>
        </div>
      </div>
    </RetroCard>
  );
}
