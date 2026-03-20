import type { Project } from "@/src/data/mock/projects.mock";
import Image from "next/image";
import Link from "next/link";
import { RetroCard } from "@/src/presentation/components/ui/retro/RetroCard";
import { RetroHeading } from "@/src/presentation/components/ui/retro/RetroHeading";
import { RetroBadge } from "@/src/presentation/components/ui/retro/RetroBadge";

interface Props {
  projects: Project[];
}

export function RetroFeaturedProjects({ projects }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <RetroHeading bg="white">
        Featured <span className="text-[#FF00FF]">Projects</span>
      </RetroHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link href={`/portfolio/${project.slug}`} key={project.id} className="group block">
            <RetroCard borderSize="lg" shadowSize="lg" hoverEffect className="transition-all overflow-hidden h-full flex flex-col">
              <div className="relative h-64 sm:h-80 w-full border-b-8 border-black bg-gray-200">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <RetroBadge color="black" className="absolute top-4 right-4">
                  {project.category}
                </RetroBadge>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 group-hover:text-[#FF00FF] transition-colors">{project.title}</h3>
                <p className="font-bold line-clamp-2">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-100 border-2 border-black text-xs font-bold px-2 py-1 uppercase">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && <span className="bg-gray-100 border-2 border-black text-xs font-bold px-2 py-1 uppercase">+{project.technologies.length - 3}</span>}
                </div>
              </div>
            </RetroCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
