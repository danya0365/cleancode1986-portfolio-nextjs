import React from 'react';
import { Service } from "@/src/application/repositories/IServiceRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  services: Service[];
}

export function TerminalServiceStatus({ services }: Props) {
  if (!services || services.length === 0) return null;

  return (
    <TerminalBlock command="systemctl list-units --type=service --state=running | format --inspect" path="~/services">
      <div className="mt-2 text-sm sm:text-base">
        {services.map((s) => {
          const serviceName = `${s.title.toLowerCase().replace(/\s+/g, '-')}.service`;
          
          return (
            <div key={s.id} className="mb-8 border border-green-900/40 p-3 hover:bg-green-900/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold animate-pulse">●</span>
                  <span className="text-amber-400 font-bold">{serviceName}</span>
                </div>
                <span className="hidden sm:inline text-green-700">-</span>
                <span className="text-green-600 sm:ml-0 ml-5">{s.title}</span>
              </div>
              
              <div className="ml-5 font-mono text-sm">
                <div className="flex gap-4 mb-1">
                  <span className="text-green-700 w-16">Loaded:</span>
                  <span className="text-green-500">loaded (/etc/systemd/system/{serviceName}; enabled)</span>
                </div>
                <div className="flex gap-4 mb-2 border-b border-green-900/30 pb-2">
                  <span className="text-green-700 w-16">Active:</span>
                  <span className="text-green-400 font-bold">active (running)</span>
                </div>
                
                <div className="flex gap-4 mt-2">
                  <span className="text-green-700 w-16">Group:</span>
                  <span className="text-amber-500">[{s.category}]</span>
                </div>
                {s.pricingInfo && (
                  <div className="flex gap-4">
                    <span className="text-green-700 w-16">Pricing:</span>
                    <span className="text-green-500">{s.pricingInfo}</span>
                  </div>
                )}

                <div className="text-green-300 my-4 leading-relaxed max-w-2xl">
                  {s.description}
                </div>

                {s.features && s.features.length > 0 && (
                  <div className="mb-4">
                    <span className="text-green-700 mb-1 block">├─ Loaded Modules:</span>
                    <div className="pl-6 border-l border-green-900 ml-1">
                      {s.features.map((f, i) => (
                        <div key={i} className="text-green-400 flex items-start gap-2 mb-1">
                          <span className="text-green-800 mt-[2px]">&gt;</span>
                          <span className="flex-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="mt-4 pt-4 border-t border-green-900/50 text-green-700">
          {services.length} active service units listed. System functioning normally.
        </div>
      </div>
    </TerminalBlock>
  );
}
