import Link from "next/link";

export function RetroHeroSection() {
  return (
    <section className="relative border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
      <div className="absolute -top-6 -left-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black transform -rotate-6 text-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        ISSUE #01
      </div>
      
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
          พัฒนา <br/>
          <span className="bg-[#00FFFF] px-2 border-y-8 border-black">เว็บไซต์</span> <br/>
          และ <span className="text-white styling-stroke" style={{ WebkitTextStroke: '2px black' }}>แอปพลิเคชัน</span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold max-w-2xl mb-12 uppercase">
          Clean Code 1986 - ทีมนักพัฒนามืออาชีพพร้อมสร้างโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ ด้วยสถาปัตยกรรมระดับโลก เกรดเดียวกับบริษัท Tech ชั้นนำ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 font-black text-xl uppercase tracking-widest">
          <Link href="/portfolio" className="bg-[#39FF14] border-4 border-black px-8 py-4 text-center hover:bg-black hover:text-[#39FF14] transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] active:scale-95">
            ดูผลงานของเรา
          </Link>
          <Link href="/contact" className="bg-[#FF00FF] text-white border-4 border-black px-8 py-4 text-center hover:bg-black hover:text-[#FF00FF] transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] active:scale-95">
            รับคำปรึกษา
          </Link>
        </div>
      </div>
    </section>
  );
}
