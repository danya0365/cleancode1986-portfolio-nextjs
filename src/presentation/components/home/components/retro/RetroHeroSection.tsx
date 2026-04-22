import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";

export function RetroHeroSection() {
  return (
    <RetroCard
      borderSize="lg"
      shadowSize="lg"
      className="relative p-8 sm:p-16 bg-[#Fdfdf5] z-0"
    >
      {/* --- Playful Background Overlay --- */}
      <div className="absolute inset-x-0 inset-y-0 overflow-hidden pointer-events-none z-0">
        {/* Grain Texture (SVG noise filter) */}
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Halftone Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Vibrant Geometric Shapes (pushed out on mobile to prevent blocking text) */}
        <div className="absolute top-[-5%] right-[-15%] sm:top-[-10%] sm:right-[-10%] w-[180px] h-[180px] sm:w-[500px] sm:h-[500px] bg-[#39FF14] rounded-full border-4 sm:border-8 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] opacity-70 sm:opacity-100"></div>
        <div className="absolute bottom-[5%] right-[-5%] sm:top-[40%] sm:right-[10%] sm:bottom-auto w-24 h-24 sm:w-48 sm:h-48 bg-[#FF00FF] border-4 sm:border-8 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-12 opacity-80 sm:opacity-100"></div>
        <div className="absolute top-[40%] left-[-10%] sm:bottom-[10%] sm:right-[30%] sm:top-auto sm:left-auto w-16 h-16 sm:w-32 sm:h-32 bg-[#00FFFF] rounded-full border-4 sm:border-8 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform -rotate-[15deg] opacity-80 sm:opacity-100"></div>

        {/* Brutalist Typographic Accents */}
        <div className="absolute top-[10%] left-[80%] font-black text-4xl sm:text-8xl text-black select-none opacity-40 sm:opacity-80">
          +
        </div>
        <div className="absolute bottom-[10%] left-[10%] font-black text-4xl sm:text-6xl text-black select-none opacity-40 sm:opacity-80">
          *
        </div>
        <div className="absolute top-[50%] right-[5%] font-black text-4xl sm:text-6xl text-black select-none opacity-40 sm:opacity-80 rotate-45">
          ~
        </div>
      </div>
      {/* --- End Playful Background Overlay --- */}

      <RetroBadge
        variant="skew"
        color="magenta"
        className="absolute -top-6 -left-6 z-20"
      >
        ISSUE #01
      </RetroBadge>

      <div className="relative max-w-4xl z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter mb-8 flex flex-col items-start gap-2 sm:gap-3">
          <span>จ้างทำเว็บ</span>
          <span className="inline-block bg-[#00FFFF] px-3 sm:px-4 py-0 sm:py-1 border-4 sm:border-[6px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] -rotate-1 z-10">
            ราคาถูก
          </span>
          <span className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
            <span>คุณภาพสูงด้วย</span>
            <span
              className="text-white"
              style={{
                WebkitTextStroke: "2px black",
                textShadow: "3px 3px 0 #FF00FF",
              }}
            >
              AI
            </span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold max-w-2xl mb-12 uppercase">
          Clean Code 1986 — ใช้ AI เขียนโค้ด + ควบคุมคุณภาพด้วย Clean
          Architecture ส่งมอบเร็ว ราคาดี
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <RetroButton href="/contact" variant="accent">
            ปรึกษาฟรี
          </RetroButton>
          <RetroButton href="/portfolio" variant="primary">
            ดูผลงาน
          </RetroButton>
        </div>
      </div>
    </RetroCard>
  );
}
