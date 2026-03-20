"use client";

import type { PortfolioViewModel } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";
import { usePortfolioPresenter } from "@/src/presentation/presenters/portfolio/usePortfolioPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { PortfolioPremiumView } from "./views/PortfolioPremiumView";
import { PortfolioTerminalView } from "./views/PortfolioTerminalView";
import { PortfolioRetroTechMagazineView } from "./views/PortfolioRetroTechMagazineView";

interface PortfolioListProps {
  initialViewModel?: PortfolioViewModel;
}

export function PortfolioList({ initialViewModel }: PortfolioListProps) {
  const { viewModel, loading, error } = usePortfolioPresenter(initialViewModel);
  const { template } = useTemplateStore();

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

  return (
    <>
      {template === "premium" && <PortfolioPremiumView viewModel={viewModel} />}
      {template === "terminal" && <PortfolioTerminalView viewModel={viewModel} />}
      {template === "retroTechMagazine" && <PortfolioRetroTechMagazineView viewModel={viewModel} />}
    </>
  );
}
