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
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
          พัฒนา <br/>
          <span className="bg-[#00FFFF] px-2 border-y-8 border-black">เว็บไซต์</span> <br/>
          และ <span className="text-white styling-stroke" style={{ WebkitTextStroke: '2px black' }}>แอปพลิเคชัน</span>
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
