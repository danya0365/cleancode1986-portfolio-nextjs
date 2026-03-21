"use client";

import type { ProjectDetailViewModel } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { useProjectDetailPresenter } from "@/src/presentation/presenters/portfolio/useProjectDetailPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import Link from "next/link";
import { ProjectDetailPremiumView } from "./views/ProjectDetailPremiumView";
import { ProjectDetailTerminalView } from "./views/ProjectDetailTerminalView";
import { ProjectDetailRetroTechMagazineView } from "./views/ProjectDetailRetroTechMagazineView";

interface ProjectDetailViewProps {
  slug: string;
  initialViewModel?: ProjectDetailViewModel;
}

export function ProjectDetailView({ slug, initialViewModel }: ProjectDetailViewProps) {
  const [state, actions] = useProjectDetailPresenter(slug, initialViewModel);
  const { template } = useTemplateStore();

  const { viewModel, loading, error } = state;

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

  return (
    <>
      {template === "premium" && <ProjectDetailPremiumView viewModel={viewModel} />}
      {template === "terminal" && <ProjectDetailTerminalView viewModel={viewModel} />}
      {template === "retroTechMagazine" && <ProjectDetailRetroTechMagazineView viewModel={viewModel} />}
    </>
  );
}
