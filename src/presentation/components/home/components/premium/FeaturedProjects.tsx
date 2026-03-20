import type { Project } from "@/src/application/repositories/IProjectRepository";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectsProps {
  projects: Project[];
}

import { XRayWrapper } from "@/src/presentation/components/ui/XRayWrapper";

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const codeSnippet = `
// FeaturedProjects.tsx
export function FeaturedProjects({ projects }: Props) {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text 
                       bg-gradient-to-r from-gray-900 to-gray-600">
          ผลงานที่น่าภูมิใจ
        </h2>
      </div>
      
      {/* 🔮 Dynamic Grid Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <Link href={\`/portfolio/\${project.slug}\`}>
            {/* 💎 Pure CSS Premium Glassmorphism Hover Effects */}
            <div className="group bg-white/70 backdrop-blur-xl 
                            hover:-translate-y-2 transition-all duration-500">
                <Image src={project.thumbnail} alt={project.title} fill />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
`.trim();

  return (
    <XRayWrapper componentName="FeaturedProjects.tsx" codeSnippet={codeSnippet}>
      <section className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 drop-shadow-sm">
            ผลงานที่น่าภูมิใจ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            โปรเจคระดับ Masterpiece ที่เราตั้งใจพัฒนาเพื่อยกระดับธุรกิจให้ลูกค้า
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col h-full bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                {/* Fallback pattern underneath */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/5 to-purple-500/10 transition-transform duration-500 group-hover:scale-105">
                  <span className="text-7xl mb-4 opacity-40 drop-shadow-md">
                    {project.category === "Web" && "💻"}
                    {project.category === "Mobile" && "📱"}
                    {project.category === "UI/UX" && "🎨"}
                    {project.category === "Full-stack" && "🚀"}
                    {!["Web", "Mobile", "UI/UX", "Full-stack"].includes(project.category) && "📁"}
                  </span>
                  <div className="px-4 py-1.5 bg-white/60 dark:bg-black/30 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Preview Unavailable
                    </span>
                  </div>
                </div>

                {/* Actual Thumbnail (if exists and doesn't error) */}
                {project.thumbnail && (
                  <div className="absolute inset-0 z-10 transition-opacity duration-500">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    {/* Dark gradient overlay on hover for better text contrast if we had text over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-indigo-600 dark:text-indigo-400 shadow-sm border border-white/20 dark:border-gray-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed font-medium flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-indigo-50/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-lg border border-indigo-100/50 dark:border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-50/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs font-bold rounded-lg border border-gray-100/50 dark:border-gray-700/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/portfolio"
            className="group inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:-translate-y-1"
          >
            เปิดคลังผลงานทั้งหมด
            <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
      </section>
    </XRayWrapper>
  );
}
