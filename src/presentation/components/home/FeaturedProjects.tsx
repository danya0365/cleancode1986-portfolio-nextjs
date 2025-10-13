import type { Project } from "@/src/data/mock/projects.mock";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ผลงานที่น่าภูมิใจ
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            โปรเจคที่เราได้พัฒนาให้กับลูกค้า
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                {project.thumbnail ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-9xl opacity-50">
                        {project.category === "Web" && "💻"}
                        {project.category === "Mobile" && "📱"}
                        {project.category === "UI/UX" && "🎨"}
                        {project.category === "Full-stack" && "🚀"}
                      </div>
                    </div>
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover object-center"
                      priority
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-50">
                      {project.category === "Web" && "💻"}
                      {project.category === "Mobile" && "📱"}
                      {project.category === "UI/UX" && "🎨"}
                      {project.category === "Full-stack" && "🚀"}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            ดูผลงานทั้งหมด
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
