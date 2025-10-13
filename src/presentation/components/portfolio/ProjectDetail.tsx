"use client";

import type { ProjectDetailViewModel } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { useProjectDetailPresenter } from "@/src/presentation/presenters/portfolio/useProjectDetailPresenter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "../ui/Lightbox";

interface ProjectDetailProps {
  slug: string;
  initialViewModel?: ProjectDetailViewModel;
}

export function ProjectDetail({ slug, initialViewModel }: ProjectDetailProps) {
  const { viewModel, loading, error } = useProjectDetailPresenter(
    slug,
    initialViewModel
  );

  // Lightbox state
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Render lightbox if open
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
              <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
              <Link
                href="/portfolio"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                กลับไปหน้าผลงาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  const { project, relatedProjects } = viewModel;

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            หน้าแรก
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/portfolio"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            ผลงาน
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">{project.title}</span>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium rounded-full">
                {project.category}
              </span>
              {project.isFeatured && (
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 font-medium rounded-full">
                  ⭐ Featured
                </span>
              )}
              {project.status === "draft" && (
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium rounded-full">
                  📝 Draft
                </span>
              )}
              {project.status === "archived" && (
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 font-medium rounded-full">
                  📦 Archived
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {project.client && (
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    ลูกค้า
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {project.client}
                  </div>
                </div>
              )}
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  วันที่
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {new Date(project.projectDate).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  หมวดหมู่
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {project.category}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Views
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {project.viewCount}
                </div>
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    🌐 ดูเว็บไซต์
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                  >
                    🐙 GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500">
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ฟีเจอร์หลัก
              </h2>
              <div className="space-y-6">
                {project.features.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.images.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  แกลเลอรี่
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageClick(index)}
                      className="h-48 relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-4xl text-white transition-opacity">
                        <span className="bg-black/50 p-2 rounded-full">📸</span>
                      </div>
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-zoom-in hover:opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement>
                        ) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                เทคโนโลยี
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">สนใจทำโปรเจคแบบนี้?</h3>
              <p className="mb-6 text-blue-100">
                ปรึกษาฟรี! เราพร้อมช่วยคุณสร้างโซลูชันที่ตอบโจทย์
              </p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-colors"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              โปรเจคที่เกี่ยวข้อง
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl relative">
                    {relatedProject.thumbnail ? (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-9xl opacity-50">
                            {relatedProject.category === "Web" && "💻"}
                            {relatedProject.category === "Mobile" && "📱"}
                            {relatedProject.category === "UI/UX" && "🎨"}
                            {relatedProject.category === "Full-stack" && "🚀"}
                          </div>
                        </div>
                        <Image
                          src={relatedProject.thumbnail}
                          alt={`${relatedProject.title} thumbnail`}
                          fill
                          className="object-cover object-center"
                          priority
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement>
                          ) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-9xl opacity-50">
                          {relatedProject.category === "Web" && "💻"}
                          {relatedProject.category === "Mobile" && "📱"}
                          {relatedProject.category === "UI/UX" && "🎨"}
                          {relatedProject.category === "Full-stack" && "🚀"}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {renderLightbox()}
    </div>
  );
}
