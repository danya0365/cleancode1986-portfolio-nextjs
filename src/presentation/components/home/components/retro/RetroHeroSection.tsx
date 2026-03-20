import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";

export function RetroHeroSection() {
  return (
    <RetroCard borderSize="lg" shadowSize="lg" className="relative p-8 sm:p-16">
      <RetroBadge variant="skew" color="magenta" className="absolute -top-6 -left-6">
        ISSUE #01
      </RetroBadge>
      
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tighter mb-8 flex flex-col items-start gap-2 sm:gap-4">
          <span>พัฒนา</span>
          <span className="inline-block bg-[#00FFFF] px-4 py-0 sm:py-2 border-4 sm:border-8 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] -rotate-1 z-10">
            เว็บไซต์
          </span>
          <span className="flex flex-wrap items-center gap-3 sm:gap-6 mt-2">
            <span>และ</span> 
            <span 
              className="text-white" 
              style={{ WebkitTextStroke: '2px black', textShadow: '4px 4px 0 #FF00FF' }}
            >
              แอปพลิเคชัน
            </span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold max-w-2xl mb-12 uppercase">
          Clean Code 1986 - ทีมนักพัฒนามืออาชีพพร้อมสร้างโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ ด้วยสถาปัตยกรรมระดับโลก เกรดเดียวกับบริษัท Tech ชั้นนำ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <RetroButton href="/portfolio" variant="accent">
            ดูผลงานของเรา
          </RetroButton>
          <RetroButton href="/contact" variant="primary">
            รับคำปรึกษา
          </RetroButton>
        </div>
      </div>
    </RetroCard>
  );
}
