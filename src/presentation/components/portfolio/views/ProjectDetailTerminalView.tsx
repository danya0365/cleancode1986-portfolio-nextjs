"use client";

import Link from "next/link";
import { ProjectDetailViewModel } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { TerminalProjectManifest } from "../components/terminal/TerminalProjectManifest";
import { TerminalProjectGallery } from "../components/terminal/TerminalProjectGallery";
import { TerminalProjectRelated } from "../components/terminal/TerminalProjectRelated";

interface Props {
  viewModel: ProjectDetailViewModel;
}

export function ProjectDetailTerminalView({ viewModel }: Props) {
  const { project, relatedProjects } = viewModel;

  return (
    <div className="bg-gray-950 min-h-screen text-green-500 font-mono p-4 sm:p-8 md:p-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Navigation / Header */}
        <div className="mb-2 border-b border-green-900 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-1">Module Execution Environment</h1>
            <p className="text-green-700 text-sm">Target: {project.slug}</p>
          </div>
          <Link href="/portfolio" className="text-green-600 hover:text-green-400 border border-green-800 px-3 py-1 hover:bg-green-900/30 transition-colors">
            [cd ..]
          </Link>
        </div>

        {/* Project Manifest (JSON style) */}
        <TerminalProjectManifest project={project} />

        {/* Assets Viewer */}
        <TerminalProjectGallery project={project} />

        {/* Related Modules */}
        <TerminalProjectRelated projects={relatedProjects} />
        
        {/* Blinking Cursor at the end */}
        <div className="flex items-center text-sm sm:text-base mt-4">
          <span className="text-green-500 font-bold mr-2">guest@cleancode1986:~/projects$</span>
          <span className="w-3 h-5 bg-green-500 animate-pulse" />
        </div>

      </div>
    </div>
  );
}
