"use client";

import type { HomeViewModel } from "@/src/presentation/presenters/home/HomePresenter";
import { TerminalHero } from "../components/terminal/TerminalHero";
import { TerminalProjects } from "../components/terminal/TerminalProjects";
import { TerminalServices } from "../components/terminal/TerminalServices";
import { TerminalSkills } from "../components/terminal/TerminalSkills";
import { TerminalAsciiLogo } from "../../ui/terminal/TerminalAsciiLogo";

interface Props {
  viewModel: HomeViewModel;
}

export function HomeTerminalView({ viewModel }: Props) {
  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Boot Sequence / Header */}
        <div className="mb-8 border-b border-green-900 pb-4 overflow-x-auto">
          <TerminalAsciiLogo 
            text="CLEAN CODE 1986" 
            className="text-[10px] sm:text-[13px] md:text-sm tracking-tighter sm:tracking-normal text-green-600 mb-4" 
          />
          <p className="text-green-700 text-sm">Clean Code 1986 OS (v1.0.0)</p>
          <p className="text-green-700 text-sm">Login: {new Date().toLocaleString()}</p>
        </div>

        {/* Hero Section */}
        <TerminalHero stats={viewModel.stats} />

        {/* Skills Section */}
        <TerminalSkills technologies={viewModel.technologies} />

        {/* Projects Section */}
        <TerminalProjects projects={viewModel.featuredProjects} />

        {/* Services Section */}
        <TerminalServices services={viewModel.services} />
        
        {/* Blinking Cursor at the end */}
        <div className="flex items-center text-sm sm:text-base mt-8">
          <span className="text-green-500 font-bold mr-2">guest@cleancode1986:~$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
