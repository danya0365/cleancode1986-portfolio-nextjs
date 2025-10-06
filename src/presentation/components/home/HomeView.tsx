"use client";

import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { FeaturedProjects } from "./FeaturedProjects";
import { ServicesPreview } from "./ServicesPreview";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";
import { useHomePresenter } from "@/src/presentation/presenters/home/useHomePresenter";
import type { HomeViewModel } from "@/src/presentation/presenters/home/HomePresenter";

interface HomeViewProps {
  initialViewModel?: HomeViewModel;
}

export function HomeView({ initialViewModel }: HomeViewProps) {
  const { viewModel, loading, error } = useHomePresenter(initialViewModel);

  // Show loading state
  if (loading && !viewModel) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">กำลังโหลด...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Show error state
  if (error && !viewModel) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-red-600 dark:text-red-400 font-medium mb-2">
              เกิดข้อผิดพลาด
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Show empty state
  if (!viewModel) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <p className="text-gray-600 dark:text-gray-400">ไม่มีข้อมูล</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <HeroSection technologies={viewModel.technologies} />
      <StatsSection stats={viewModel.stats} />
      <FeaturedProjects projects={viewModel.featuredProjects} />
      <ServicesPreview services={viewModel.services} />
      <TestimonialsSection testimonials={viewModel.testimonials} />
      <CTASection />
    </MainLayout>
  );
}
