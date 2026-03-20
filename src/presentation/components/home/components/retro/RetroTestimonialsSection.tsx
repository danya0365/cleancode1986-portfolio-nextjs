import type { Testimonial } from "@/src/data/mock/testimonials.mock";

interface Props {
  testimonials: Testimonial[];
}

export function RetroTestimonialsSection({ testimonials }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black pb-4 inline-block w-fit bg-[#00FFFF] px-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-t-8 border-x-8">
        Client <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>Voices</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <div key={testimonial.id} className="bg-white border-4 border-black p-8 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
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
          </div>
        ))}
      </div>
    </section>
  );
}
