"use client";

import Link from "next/link";
import { useState } from "react";
import { type Project } from "@/src/data/mock/projects.mock";
import { usePortfolioPresenter } from "@/src/presentation/presenters/portfolio/usePortfolioPresenter";
import type { PortfolioViewModel, CategoryFilter } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";

interface PortfolioListProps {
  initialViewModel?: PortfolioViewModel;
}

export function PortfolioList({ initialViewModel }: PortfolioListProps) {
  const { viewModel, loading, error } = usePortfolioPresenter(initialViewModel);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Loading state
  if (loading && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">กำลังโหลด...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <p className="text-red-600 dark:text-red-400 font-medium mb-2">
                เกิดข้อผิดพลาด
              </p>
              <p className="text-gray-600 dark:text-gray-400">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  const filteredProjects = viewModel.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ผลงานของเรา
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            โปรเจคที่เราได้พัฒนาให้กับลูกค้า
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="ค้นหาโปรเจค..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {viewModel.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ไม่พบผลงาน
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ลองเปลี่ยนคำค้นหาหรือหมวดหมู่
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          แสดง {filteredProjects.length} โปรเจค
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-50">
          {project.category === "Web" && "💻"}
          {project.category === "Mobile" && "📱"}
          {project.category === "UI/UX" && "🎨"}
          {project.category === "Full-stack" && "🚀"}
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-sm font-medium rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {project.isFeatured && (
            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-medium rounded-full">
              ⭐ Featured
            </span>
          )}
          {project.status === "draft" && (
            <span className="px-3 py-1 bg-orange-400 text-orange-900 text-sm font-medium rounded-full">
              📝 Draft
            </span>
          )}
          {project.status === "archived" && (
            <span className="px-3 py-1 bg-gray-400 text-gray-900 text-sm font-medium rounded-full">
              📦 Archived
            </span>
          )}
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
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>👁️ {project.viewCount} views</span>
          {project.client && <span>👤 {project.client}</span>}
        </div>
      </div>
    </Link>
  );
}
