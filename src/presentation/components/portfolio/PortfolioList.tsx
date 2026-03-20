"use client";

import { type Project } from "@/src/data/mock/projects.mock";
import type {
  CategoryFilter,
  PortfolioViewModel,
} from "@/src/presentation/presenters/portfolio/PortfolioPresenter";
import { usePortfolioPresenter } from "@/src/presentation/presenters/portfolio/usePortfolioPresenter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface PortfolioListProps {
  initialViewModel?: PortfolioViewModel;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export function PortfolioList({ initialViewModel }: PortfolioListProps) {
  const { viewModel, loading, error } = usePortfolioPresenter(initialViewModel);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex justify-center items-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-2">เกิดข้อผิดพลาด</p>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!viewModel) return null;

  const filteredProjects = viewModel.projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100/50 dark:bg-purple-900/30 backdrop-blur text-purple-600 dark:text-purple-400 rounded-full text-sm font-bold mb-6 border border-purple-200 dark:border-purple-800/50 shadow-sm">
            <span className="mr-2">💡</span>
            <span>Masterpieces</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            ผลงานที่น่าภูมิใจ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            โปรเจคระดับท็อปที่สร้างการเปลี่ยนแปลงและมอบคุณค่าสูงสุดให้ธุรกิจ
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div 
          className="mb-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">🔍</span>
              </div>
              <input
                type="text"
                placeholder="ค้นหาโปรเจค (ชื่อ, เทคโนโลยี, รายละเอียด)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm transition-all text-lg"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {viewModel.categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-6 py-2.5 rounded-full font-bold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "text-white shadow-md shadow-blue-500/30 scale-105"
                      : "bg-white/60 dark:bg-gray-800/60 backdrop-blur border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div 
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-24 bg-white/40 dark:bg-gray-800/40 backdrop-blur rounded-3xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-6xl mb-6 animate-bounce">🛸</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  ไม่พบผลงานที่ค้นหา
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  ลองเปลี่ยนคำค้นหา หรือหมวดหมู่เพื่อให้ครอบคลุมมากขึ้นครับ
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          layout
          className="mt-12 text-center text-sm font-medium text-gray-500 dark:text-gray-500 px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 inline-block mx-auto rounded-full"
        >
          แสดง {filteredProjects.length} โปรเจค
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group flex flex-col h-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative h-64 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          {/* Beautiful Fallback UI (Visible if no thumbnail or if Image errors out and gets hidden) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/5 to-purple-500/10">
            <span className="text-6xl mb-4 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500">
              {project.category === "Web" && "💻"}
              {project.category === "Mobile" && "📱"}
              {project.category === "UI/UX" && "🎨"}
              {project.category === "Full-stack" && "🚀"}
              {!["Web", "Mobile", "UI/UX", "Full-stack"].includes(project.category) && "📁"}
            </span>
            <div className="px-4 py-1.5 bg-white/60 dark:bg-black/30 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50 opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                ไม่มีภาพประกอบ
              </span>
            </div>
          </div>

          {project.thumbnail && (
            <div className="absolute inset-0 z-10 transition-opacity duration-500">
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-indigo-600 dark:text-indigo-400 shadow-sm">
              {project.category}
            </span>
          </div>
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            {project.isFeatured && (
              <span className="px-3 py-1 bg-yellow-400/90 backdrop-blur text-yellow-900 text-xs font-bold rounded-full shadow-sm">
                ⭐ Featured
              </span>
            )}
            {project.status === "draft" && (
              <span className="px-3 py-1 bg-gray-100/90 backdrop-blur text-gray-600 text-xs font-bold rounded-full shadow-sm">
                📝 Draft
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow relative">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-gray-500 dark:text-gray-500 text-xs font-semibold">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Details Link */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
              ดูรายละเอียด &rarr;
            </span>
            <span className="text-xs text-gray-400">
              {project.client ? `👤 ${project.client}` : "💼 Internal"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
