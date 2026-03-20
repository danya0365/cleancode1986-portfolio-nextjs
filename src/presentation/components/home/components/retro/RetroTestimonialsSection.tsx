import type { Testimonial } from "@/src/data/mock/testimonials.mock";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";

interface Props {
  testimonials: Testimonial[];
}

export function RetroTestimonialsSection({ testimonials }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <RetroHeading bg="cyan">
        Client <span className="text-white styling-stroke" style={{ WebkitTextStroke: '2px black' }}>Voices</span>
      </RetroHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <RetroCard key={testimonial.id} shadowSize="md" className="p-8 relative">
            <div className="absolute -top-5 -right-5 text-6xl opacity-20 font-serif">&quot;</div>
            <div className="flex gap-1 mb-6 text-[#FF00FF]">
              {Array.from({ length: testimonial.rating }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="font-bold italic text-lg mb-8 leading-relaxed">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="flex items-center gap-4 border-t-4 border-black pt-4">
              <div className={`w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-black ${i % 2 === 0 ? 'bg-[#39FF14]' : 'bg-[#00FFFF]'}`}>
                {testimonial.clientName.charAt(0)}
              </div>
              <div>
                <div className="font-black uppercase">{testimonial.clientName}</div>
                <div className="text-xs font-bold opacity-70 uppercase">{testimonial.clientRole}, {testimonial.company}</div>
              </div>
            </div>
          </RetroCard>
        ))}
      </div>
    </section>
  );
}
