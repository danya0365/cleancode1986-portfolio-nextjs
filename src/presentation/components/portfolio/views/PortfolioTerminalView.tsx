"use client";

import type { PortfolioTemplateProps } from "./PortfolioPremiumView";
import { TerminalProjectFilter } from "../components/terminal/TerminalProjectFilter";
import { TerminalProjectList } from "../components/terminal/TerminalProjectList";

/**
 * Authentic Terminal UI implementation for the Portfolio Page
 */
export function PortfolioTerminalView(props: PortfolioTemplateProps) {
  const { viewModel, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = props;

  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Boot Header */}
        <div className="mb-6 border-b border-green-900 pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Portfolio System Archive</h1>
          <p className="text-green-700 text-sm">Accessing classified project records...</p>
        </div>

        {/* Interactive CLI Filter */}
        <TerminalProjectFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={viewModel.categories}
        />

        {/* CLI Results Output */}
        <TerminalProjectList projects={viewModel.projects} />
        
      </div>
    </div>
  );
}
