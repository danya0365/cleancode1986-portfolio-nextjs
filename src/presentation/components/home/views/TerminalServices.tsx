import { Service } from "@/src/application/repositories/IServiceRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function TerminalServices({ services }: { services: Service[] }) {
  if (!services || services.length === 0) return null;

  return (
    <TerminalBlock command="systemctl list-units --type=service" path="~">
      <div className="mt-4 flex flex-col gap-6 font-mono text-sm sm:text-base">
        {services.map((service) => (
          <div key={service.id} className="border border-green-900 bg-black/50 p-4">
            <div className="flex gap-4 items-start sm:items-center border-b border-green-900/50 pb-4 mb-4">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex outline outline-1 outline-green-500 bg-gray-900 items-center justify-center text-3xl">
                {service.icon}
              </div>
              
              <div className="flex-1">
                <div className="text-amber-400 font-bold text-lg">{service.title.toLowerCase().replace(/\s+/g, '-')}.service</div>
                <div className="text-green-600">group={service.category} status=active(running)</div>
                <div className="text-gray-500 mt-1">/lib/systemd/system/{service.id}.service</div>
              </div>
            </div>

            <div className="text-green-300 mb-4 leading-relaxed">
              {service.description}
            </div>

            {service.features && service.features.length > 0 && (
              <div className="mb-4">
                <span className="text-gray-500">Loaded Modules:</span>
                <div className="mt-1 flex flex-col gap-1 text-green-400 pl-4 border-l border-green-900">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-green-700">&gt;</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.pricingInfo && (
               <div className="border-t border-green-900/30 pt-3 flex gap-4 text-sm mt-4">
                 <span className="text-gray-500">Pricing:</span>
                 <span className="text-amber-400">{service.pricingInfo}</span>
               </div>
            )}
          </div>
        ))}
      </div>
    </TerminalBlock>
  );
}
