import { SITE } from "@/src/data/master/site";

export function RetroCTASection() {
  return (
    <section className="bg-[#FF00FF] border-8 border-black p-8 sm:p-16 text-center shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
      <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-black uppercase tracking-tighter mb-8 leading-none">
        Ready To <br/>
        <span className="text-white" style={{ WebkitTextStroke: '2px black' }}>Upgrade</span>?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <a href={`mailto:${SITE.contact.email}`} className="bg-white border-4 border-black px-8 py-4 font-black uppercase text-xl hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          Email Us Now
        </a>
        <a href={`tel:${SITE.contact.phone}`} className="bg-[#00FFFF] border-4 border-black px-8 py-4 font-black uppercase text-xl hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          Call Direct
        </a>
      </div>
    </section>
  );
}
