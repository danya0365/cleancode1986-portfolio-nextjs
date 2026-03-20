import { SITE } from "@/src/data/master/site";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";

export function RetroCTASection() {
  return (
    <RetroCard borderSize="lg" shadowSize="lg" className="bg-[#FF00FF] p-8 sm:p-16 text-center">
      <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-black uppercase tracking-tighter mb-8 leading-none">
        Ready To <br/>
        <span className="text-white styling-stroke" style={{ WebkitTextStroke: '2px black' }}>Upgrade</span>?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <RetroButton href={`mailto:${SITE.contact.email}`} variant="white">
          Email Us Now
        </RetroButton>
        <RetroButton href={`tel:${SITE.contact.phone}`} variant="secondary">
          Call Direct
        </RetroButton>
      </div>
    </RetroCard>
  );
}
