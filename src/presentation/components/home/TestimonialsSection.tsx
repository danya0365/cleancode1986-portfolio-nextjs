import type { Testimonial } from "@/src/data/mock/testimonials.mock";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

import { XRayWrapper } from "../ui/XRayWrapper";

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const codeSnippet = `
// TestimonialsSection.tsx
export function TestimonialsSection({ testimonials }) {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
        {testimonials.map((testimonial) => (
          {/* Glassmorphism Card */}
          <div className="group bg-white/70 backdrop-blur-xl rounded-[2.5rem] 
                          hover:-translate-y-2 transition-all duration-500">
            {/* Dynamic Stars */}
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map(() => "★")}
            </div>

            <p className="italic leading-relaxed font-medium">
              "{testimonial.content}"
            </p>

            {/* Avatar with Animated Gradient */}
            <div className="relative w-14 h-14 rounded-full p-0.5 
                            bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="bg-white rounded-full flex items-center justify-center">
                {testimonial.clientName.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`.trim();

  return (
    <XRayWrapper componentName="TestimonialsSection.tsx" codeSnippet={codeSnippet}>
      <section className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 -left-64 w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -right-64 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 drop-shadow-sm">
            ลูกค้าพูดถึงเรา
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            ความไว้วางใจจากลูกค้าคือสิ่งที่ขับเคลื่อนให้เราสร้างสรรค์ผลงานระดับ Masterpiece
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative flex flex-col p-8 sm:p-10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-[2.5rem] border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-8 right-8 text-8xl leading-none font-serif text-gray-100 dark:text-gray-800/50 opacity-50 group-hover:text-pink-100 dark:group-hover:text-pink-900/20 transition-colors duration-500 select-none pointer-events-none">
                &quot;
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span 
                    key={i} 
                    className="text-yellow-400 text-lg drop-shadow-sm"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 relative z-10 italic mb-8 flex-1 leading-relaxed font-medium">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent dark:from-gray-800 dark:via-gray-800 mb-6 relative z-10" />

              {/* Client Info */}
              <div className="flex items-center relative z-10">
                {/* Avatar with animated gradient border effect */}
                <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 group-hover:from-pink-400 group-hover:to-blue-500 transition-colors duration-500 mr-4 shrink-0">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                      {testimonial.clientName.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 dark:text-white truncate group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {testimonial.clientName}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium truncate">
                    {testimonial.clientRole}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </XRayWrapper>
  );
}
