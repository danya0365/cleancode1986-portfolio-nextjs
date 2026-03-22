"use client";

import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import { TerminalTeam } from "../components/terminal/TerminalTeam";

interface Props {
  viewModel: AboutViewModel;
}

/**
 * Authentic Terminal UI implementation for the About Page
 */
export function AboutTerminalView({ viewModel }: Props) {
  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* CLI Header */}
        <div className="mb-6 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">System Operators Identification</h1>
          <p className="text-green-700 text-sm">Validating core team engineering personnel records...</p>
        </div>

        {/* Detailed Team Output */}
        <TerminalTeam members={viewModel.teamMembers} />
        
        {/* Interactive CLI End Prompt Block */}
        <div className="flex items-center text-sm sm:text-base mt-2">
          <span className="text-green-500 font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~/about$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
