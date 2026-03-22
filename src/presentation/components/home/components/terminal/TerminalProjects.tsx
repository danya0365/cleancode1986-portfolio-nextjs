import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import Link from "next/link";
import { TerminalImage } from "@/src/presentation/components/ui/terminal/TerminalImage";

export function TerminalProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <TerminalBlock command="ls -la ./projects/featured" path="~">
      <div className="mt-4 flex flex-col gap-6 font-mono text-sm sm:text-base">
        {projects.map((project) => {
          const date = new Date(project.projectDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
          const displayImage = project.images && project.images.length > 0 ? project.images[0] : null;

          return (
            <div key={project.id} className="border border-green-900 bg-black/50 p-4">
              <div className="flex gap-4 items-start sm:items-center border-b border-green-900/50 pb-4 mb-4">
                  <div className="shrink-0 w-24 h-20 sm:w-32 sm:h-24 border border-green-500 relative">
                    <TerminalImage 
                      src={displayImage} 
                      alt={project.title} 
                      fallbackText={displayImage ? "IMG_ERR" : "NO_IMG"}
                    />
                  </div>
                
                <div className="flex-1">
                  <div className="text-amber-400 font-bold text-lg">{project.title.toLowerCase().replace(/\s+/g, '_')}</div>
                  <div className="text-green-600">type={project.category} date={date}</div>
                  <div className="text-gray-500 mt-1">./execute --slug={project.slug}</div>
                </div>
              </div>

              <div className="text-green-300 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-4">
                  <span className="text-gray-500">Dependencies:</span>
                  <div className="mt-1 flex flex-wrap gap-2 text-green-400">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-green-900/30 px-2 py-0.5 border border-green-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-green-900/30 pt-3 flex flex-wrap gap-4 text-sm mt-4">
                <span className="text-gray-500">Actions:</span>
                <Link href={`/portfolio/${project.slug}`} className="text-blue-400 hover:underline">
                  [View Detail]
                </Link>
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="text-blue-400 hover:underline">
                    [Live Demo]
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" className="text-blue-400 hover:underline">
                    [Source Code]
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </TerminalBlock>
  );
}
