import { Service } from "@/src/application/repositories/IServiceRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function TerminalServices({ services }: { services: Service[] }) {
  return (
    <TerminalBlock command="systemctl status cleancode-services.target">
        <p className="text-green-300 font-bold mb-2">● cleancode-services.target - Clean Code 1986 Core Services</p>
        <p className="mb-2">   Loaded: loaded (/lib/systemd/system/cleancode-services.target; enabled)</p>
        <p className="mb-4 text-green-500">   Active: active (running) since Boot</p>

        <div className="flex flex-col gap-3 border-l-2 border-green-800 pl-4 py-2">
          {services.map((service) => (
            <div key={service.id}>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">●</span>
                <span className="font-bold text-amber-500">{service.id}.service</span>
                <span className="mx-2">-</span>
                <span>{service.title}</span>
              </div>
              <div className="text-green-600 pl-5 text-xs sm:text-sm mt-1">
                <p>&gt; Description: {service.description}</p>
                <p>&gt; Status: <span className="text-green-400">Online & Accepting Requests</span></p>
              </div>
            </div>
          ))}
        </div>
    </TerminalBlock>
  );
}
