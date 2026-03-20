import type { Project } from "@/src/data/mock/projects.mock";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Project[];
}

export function RetroFeaturedProjects({ projects }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl md:text-6xl font-black uppercase border-b-8 border-black pb-4 inline-block w-fit bg-white px-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        Featured <span className="text-[#FF00FF]">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link href={`/portfolio/${project.slug}`} key={project.id} className="group block bg-white border-8 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] transition-all">
            <div className="relative h-64 sm:h-80 w-full border-b-8 border-black overflow-hidden bg-gray-200">
              <Image src={project.thumbnail} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-4 right-4 bg-black text-[#00FFFF] font-black px-3 py-1 text-sm border-2 border-[#00FFFF]">
                {project.category}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 group-hover:text-[#FF00FF] transition-colors">{project.title}</h3>
              <p className="font-bold line-clamp-2">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="bg-gray-100 border-2 border-black text-xs font-bold px-2 py-1 uppercase">{tech}</span>
                ))}
                {project.technologies.length > 3 && <span className="bg-gray-100 border-2 border-black text-xs font-bold px-2 py-1 uppercase">+{project.technologies.length - 3}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
