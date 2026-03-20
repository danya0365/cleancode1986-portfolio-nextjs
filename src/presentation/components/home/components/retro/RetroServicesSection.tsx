import type { Service } from "@/src/application/repositories/IServiceRepository";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";

interface Props {
  services: Service[];
}

export function RetroServicesSection({ services }: Props) {
  return (
    <section className="bg-black text-white p-8 sm:p-12 border-8 border-white shadow-[16px_16px_0_0_rgba(255,0,255,1)]">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-[#39FF14]">
        Services <br/> & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <RetroCard 
            key={i} 
            hoverEffect 
            className={`p-6 sm:p-8 hover:bg-white hover:text-black transition-colors ${i === 1 ? 'bg-[#FF00FF] text-white' : 'bg-transparent text-white border-white'}`}
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
            <p className="font-bold text-sm opacity-90">{service.description}</p>
          </RetroCard>
        ))}
      </div>
    </section>
  );
}
