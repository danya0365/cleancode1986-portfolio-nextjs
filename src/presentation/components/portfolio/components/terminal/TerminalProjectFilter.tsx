import React from 'react';
import { CategoryFilter } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: CategoryFilter;
  setSelectedCategory: (category: CategoryFilter) => void;
  categories: readonly CategoryFilter[];
}

export function TerminalProjectFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  categories
}: Props) {
  return (
    <div className="flex flex-wrap items-center text-green-500 mb-8 text-sm sm:text-base gap-y-2">
      <span className="font-bold mr-2 whitespace-nowrap">guest@cleancode1986:~/projects$</span>
      <span className="whitespace-nowrap">grep -i &quot;</span>
      <input 
        type="text"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="bg-transparent outline-none border-b border-green-500/50 text-amber-400 w-24 sm:w-32 focus:w-48 transition-all px-1"
        placeholder="*"
        autoComplete="off"
        spellCheck="false"
      />
      <span className="whitespace-nowrap">&quot; ./* --category=&quot;</span>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value as CategoryFilter)}
        className="bg-gray-900 text-amber-400 border border-green-800 rounded outline-none appearance-none px-2 cursor-pointer font-mono text-sm py-1"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <span className="whitespace-nowrap">&quot;</span>
      <span className="w-2 h-5 bg-green-500 animate-pulse ml-2" />
    </div>
  );
}
