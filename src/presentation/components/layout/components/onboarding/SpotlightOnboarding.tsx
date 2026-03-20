"use client";

import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { Hand } from "lucide-react";

export function SpotlightOnboarding() {
  const setHasSeenOnboarding = useTemplateStore((state) => state.setHasSeenOnboarding);

  return (
    <>
      <div 
        onClick={() => setHasSeenOnboarding(true)}
        className="fixed inset-0 z-[9900] bg-black/70 backdrop-blur-[2px] transition-opacity duration-1000 animate-in fade-in cursor-pointer" 
      />
      
      <div className="fixed left-6 bottom-24 z-[9901] animate-bounce pointer-events-none flex items-end">
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl relative max-w-[280px]">
          {/* Arrow pointing down */}
          <div className="absolute -bottom-3 left-6 w-6 h-6 bg-white transform rotate-45 rounded-sm" />
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
              <Hand className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">ลองเปลี่ยน Vibe ดูสิ!</h3>
              <p className="text-sm text-gray-600 mb-4">
                เว็บไซต์นี้รองรับธีมหลากสไตล์ ลองกดเลือกรูปแบบที่คุณชอบได้ที่มุมจอนี้ตลอดเวลาครับ
              </p>
              
              <button 
                onClick={() => setHasSeenOnboarding(true)}
                className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-bold shadow-md hover:bg-gray-800 transition-colors pointer-events-auto"
              >
                เข้าใจแล้ว, เริ่มลุยเลย!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
