"use client";

import type { ProjectDetailViewModel } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { RetroImage } from "../../ui/retro/RetroImage";
import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "../../ui/Lightbox";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";
import { RetroButton } from "@/src/presentation/components/ui/retro/RetroButton";

interface Props {
  viewModel: ProjectDetailViewModel;
}

export function ProjectDetailRetroTechMagazineView({ viewModel }: Props) {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const renderLightbox = () => {
    if (isLightboxOpen && viewModel?.project?.images) {
      return (
        <Lightbox
          images={viewModel.project.images}
          currentIndex={lightboxImageIndex}
          onClose={handleCloseLightbox}
        />
      );
    }
    return null;
  };

  const { project, relatedProjects } = viewModel;

  return (
    <div className="flex flex-col gap-12 p-4 sm:p-8 lg:p-12 pb-32">
      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 font-black uppercase text-sm border-2 border-black p-2 bg-white w-fit shadow-[4px_4px_0_0_#FF00FF]">
        <Link href="/" className="hover:text-[#FF00FF]">หน้าแรก</Link>
        <span>/</span>
        <Link href="/portfolio" className="hover:text-[#FF00FF]">ผลงาน</Link>
        <span>/</span>
        <span className="text-[#FF00FF] truncate max-w-[200px]">{project.title}</span>
      </div>

      {/* HEADER CARDS */}
      <RetroCard shadowSize="lg" borderSize="lg" className="bg-[#00FFFF] p-8 sm:p-12 mb-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <RetroBadge color="white" className="text-sm">{project.category}</RetroBadge>
          {project.isFeatured && (
            <RetroBadge color="magenta" className="text-sm">⭐ FEATURED</RetroBadge>
          )}
          {project.status === "draft" && (
            <RetroBadge color="black" className="text-sm text-[#00FFFF]">📝 DRAFT</RetroBadge>
          )}
          {project.status === "archived" && (
            <RetroBadge color="black" className="text-sm text-gray-400">📦 ARCHIVED</RetroBadge>
          )}
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-black tracking-tight" style={{ WebkitTextStroke: '1px white' }}>
          {project.title}
        </h1>

        <p className="text-xl md:text-2xl font-bold uppercase mb-12 max-w-4xl border-l-[16px] border-black pl-6 py-2 bg-white p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          {project.description}
        </p>

        {/* METADATA GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {project.client && (
            <div className="bg-white p-4 border-4 border-black text-center shadow-[4px_4px_0_0_#FF00FF] transform -rotate-1">
              <div className="text-sm font-black text-gray-400 mb-1 uppercase">CLIENT</div>
              <div className="font-bold text-lg text-black uppercase">{project.client}</div>
            </div>
          )}
          <div className="bg-white p-4 border-4 border-black text-center shadow-[4px_4px_0_0_#39FF14] transform rotate-1">
            <div className="text-sm font-black text-gray-400 mb-1 uppercase">DATE</div>
            <div className="font-bold text-lg text-black uppercase">
              {new Date(project.projectDate).toLocaleDateString("th-TH", { year: "numeric", month: "short" })}
            </div>
          </div>
          <div className="bg-white p-4 border-4 border-black text-center shadow-[4px_4px_0_0_#00FFFF] transform -rotate-2">
            <div className="text-sm font-black text-gray-400 mb-1 uppercase">CATEGORY</div>
            <div className="font-bold text-lg text-black uppercase">{project.category}</div>
          </div>
          <div className="bg-white p-4 border-4 border-black text-center shadow-[4px_4px_0_0_#000] transform rotate-2">
            <div className="text-sm font-black text-gray-400 mb-1 uppercase">VIEWS</div>
            <div className="font-bold text-lg text-black uppercase">{project.viewCount}</div>
          </div>
        </div>

        {/* CTA BUTTONS */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-6 border-t-8 border-black pt-8">
            {project.liveUrl && (
               <RetroButton href={project.liveUrl} variant="primary">
                 🌐 ดูเว็บไซต์ (LIVE)
               </RetroButton>
            )}
            {project.githubUrl && (
               <RetroButton href={project.githubUrl} variant="white">
                 🐙 GITHUB REPO
               </RetroButton>
            )}
          </div>
        )}
      </RetroCard>

      {/* HERO IMAGE */}
      <div className="w-full relative border-8 border-black shadow-[16px_16px_0_0_rgba(0,0,0,1)] bg-white h-[60vh] min-h-[400px]">
        <RetroImage 
          src={project.thumbnail} 
          alt={`${project.title} thumbnail`} 
          className="w-full h-full"
          fallbackIcon={
            <span className="text-9xl">
              {project.category === "Web" ? "💻" : project.category === "Mobile" ? "📱" : project.category === "UI/UX" ? "🎨" : "🚀"}
            </span>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* FEATURES */}
          <RetroCard shadowSize="md" className="bg-white p-8 sm:p-12 mb-8">
            <RetroHeading bg="lime" className="mb-8">ฟีเจอร์หลัก (FEATURES)</RetroHeading>
            <div className="space-y-8">
              {project.features.map((feature, index) => (
                <div key={index} className="border-l-[12px] border-black pl-6 pb-6 border-b-4 border-b-black border-dashed">
                  <h3 className="text-2xl font-black uppercase text-black mb-2 flex items-center gap-4">
                    <span className="text-[#FF00FF]">{index + 1}.</span> {feature.title}
                  </h3>
                  <p className="font-bold text-gray-700 uppercase">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </RetroCard>

          {/* GALLERY */}
          {project.images.length > 0 && (
            <RetroCard shadowSize="md" className="bg-[#39FF14] p-8 sm:p-12 border-t-[16px]">
              <div className="flex justify-between items-center mb-8 bg-white p-4 border-4 border-black shadow-[4px_4px_0_0_#FF00FF] flex-wrap gap-4">
                <RetroHeading bg="transparent" className="">แกลเลอรี่ (GALLERY)</RetroHeading>
                <span className="font-black text-xl uppercase bg-black text-white px-4 py-2">
                  CLICK TO VIEW 👀
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className="relative pb-[75%] border-8 border-black bg-white cursor-pointer hover:shadow-[12px_12px_0_0_#FF00FF] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 group overflow-hidden"
                  >
                     <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-6xl text-white transform scale-50 group-hover:scale-100 transition-transform">🔍</span>
                     </div>
                     <RetroImage 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="absolute inset-0 w-full h-full"
                        fallbackIcon={<span className="text-6xl">📸</span>}
                     />
                  </div>
                ))}
              </div>
            </RetroCard>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-12">
           
           {/* TECHNOLOGIES */}
           <RetroCard shadowSize="md" className="bg-white p-8">
             <RetroBadge color="white" className="mb-6 mb-4 text-sm w-full block text-center border-b-8 border-black pb-4">TECH STACK</RetroBadge>
             <div className="flex flex-wrap gap-3 justify-center">
               {project.technologies.map(tech => (
                 <span key={tech} className="px-4 py-2 border-2 border-black font-black uppercase text-sm bg-gray-100 hover:bg-[#00FFFF] transition-colors shadow-[2px_2px_0_0_#000]">
                   {tech}
                 </span>
               ))}
             </div>
           </RetroCard>

           {/* CTA */}
           <RetroCard shadowSize="md" className="bg-[#FF00FF] p-8 text-center text-white">
             <h3 className="text-3xl font-black uppercase mb-4 text-black bg-white inline-block px-4 py-2 transform -rotate-2 border-4 border-black">
               สนใจทำโปรเจคแบบนี้?
             </h3>
             <p className="font-bold text-lg mb-8 uppercase bg-black p-4 inline-block">
               ปรึกษาฟรี! เราพร้อมช่วยคุณสร้างโซลูชันที่ตอบโจทย์
             </p>
             <RetroButton href="/contact" variant="secondary" className="w-full justify-center">
               📞 ติดต่อเราด่วน
             </RetroButton>
           </RetroCard>

        </div>
      </div>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
         <div className="mt-24">
            <RetroHeading bg="cyan" className="mb-12 border-b-[16px] border-black pb-4 inline-block w-full">โปรเจคที่เกี่ยวข้อง</RetroHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {relatedProjects.map(related => (
                <Link
                  key={related.id}
                  href={`/portfolio/${related.slug}`}
                  className="block group"
                >
                  <RetroCard hoverEffect shadowSize="md" className="bg-white flex flex-col h-full border-4 group-hover:bg-yellow-200 transition-colors duration-300">
                     <div className="relative pb-[60%] border-b-4 border-black bg-gray-200 overflow-hidden">
                       <RetroImage 
                          src={related.thumbnail} 
                          alt={related.title} 
                          className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                          fallbackIcon={
                            <span className="text-6xl">
                              {related.category === "Web" ? "💻" : related.category === "Mobile" ? "📱" : related.category === "UI/UX" ? "🎨" : "🚀"}
                            </span>
                          }
                       />
                       <div className="absolute top-4 left-4 z-20">
                         <RetroBadge color="lime" className="text-xs shadow-[2px_2px_0_0_#000]">{related.category}</RetroBadge>
                       </div>
                     </div>
                     <div className="p-6 flex-1 flex flex-col">
                       <h3 className="text-2xl font-black uppercase mb-3 line-clamp-2">
                         {related.title}
                       </h3>
                       <p className="font-bold text-sm uppercase text-gray-700 line-clamp-3 mb-6">
                         {related.description}
                       </p>
                       <div className="mt-auto font-black flex items-center gap-2 text-[#FF00FF]">
                         VIEW PROJECT <span>→</span>
                       </div>
                     </div>
                  </RetroCard>
                </Link>
              ))}
            </div>
         </div>
      )}

      {renderLightbox()}
    </div>
  );
}
