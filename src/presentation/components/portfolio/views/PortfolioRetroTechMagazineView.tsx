"use client";

import { useState } from "react";
import type { CategoryFilter, PortfolioViewModel } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";
import Image from "next/image";
import Link from "next/link";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";

interface Props {
  viewModel: PortfolioViewModel;
}

export function PortfolioRetroTechMagazineView({ viewModel }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = viewModel.projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-12 p-4 sm:p-8 lg:p-12 pb-32">
      <RetroHeading bg="cyan" withStroke>
        Projects <span className="text-[#FF00FF] font-sans">&amp;</span> Masterpieces
      </RetroHeading>

      {/* SEARCH AND FILTER BAR */}
      <RetroCard shadowSize="sm" borderSize="md" className="p-4 sm:p-6 bg-white flex flex-col md:flex-row gap-6 items-center">
        <input
          type="text"
          placeholder="SEARCH PROJECTS..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-4 border-4 border-black font-bold uppercase text-xl focus:outline-none focus:ring-4 focus:ring-[#FF00FF] shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        />
        <div className="flex flex-wrap gap-3 flex-1 justify-center md:justify-start">
          {viewModel.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border-4 border-black px-4 py-2 font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 ${
                selectedCategory === cat ? "bg-[#39FF14] text-black" : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </RetroCard>

      {/* TOTAL PROJECTS STICKER */}
      <div className="flex justify-end pr-4">
        <RetroBadge variant="skew" color="magenta">
          {filteredProjects.length} RECORDS FOUND
        </RetroBadge>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.id} className="group block">
              <RetroCard hoverEffect borderSize="lg" shadowSize="md" className="h-full flex flex-col bg-white overflow-hidden">
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 border-b-8 border-black bg-gray-200">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-4xl text-gray-400">
                      NO DATA
                    </div>
                  )}
                  <RetroBadge color="cyan" className="absolute top-4 right-4">
                    {project.category}
                  </RetroBadge>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-[#FF00FF] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="font-bold line-clamp-3 mb-6 flex-1 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-4 border-black border-dashed mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-white text-black border-2 border-black text-xs font-bold px-2 py-1 uppercase">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </RetroCard>
            </Link>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
             <RetroCard className="p-16 text-center transform rotate-2">
               <h3 className="text-6xl font-black uppercase mb-4 text-gray-300">SYSTEM ERROR</h3>
               <p className="text-2xl font-bold">NO RESULTS FOUND</p>
             </RetroCard>
          </div>
        )}
      </div>
    </div>
  );
}
