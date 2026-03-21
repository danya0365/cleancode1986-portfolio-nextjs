"use client";

import type { ServicesViewModel } from "@/src/presentation/presenters/services/ServicesPresenter";
import { TerminalServiceStatus } from "../components/terminal/TerminalServiceStatus";

interface Props {
  viewModel: ServicesViewModel;
}

/**
 * Authentic Terminal UI implementation for the Services Page
 */
export function ServicesTerminalView({ viewModel }: Props) {
  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-6 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Cleancode Daemon Supervisor</h1>
          <p className="text-green-700 text-sm">Inspecting active service units deployed in production...</p>
        </div>

        {/* Detailed Service Units Output */}
        <TerminalServiceStatus services={viewModel.services} />
        
        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~/services$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
