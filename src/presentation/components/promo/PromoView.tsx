"use client";

import type { PromoViewModel } from "@/src/presentation/presenters/promo/PromoPresenter";
import { usePromoPresenter } from "@/src/presentation/presenters/promo/usePromoPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { PromoPremiumView } from "./views/PromoPremiumView";
import { PromoTerminalView } from "./views/PromoTerminalView";
import { PromoRetroTechMagazineView } from "./views/PromoRetroTechMagazineView";

interface PromoViewProps {
  initialViewModel?: PromoViewModel;
}

export function PromoView({ initialViewModel }: PromoViewProps) {
  const [state] = usePromoPresenter(initialViewModel);
  const { template } = useTemplateStore();

  const { viewModel, loading, error } = state;

  if (loading && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"></div>
      </div>
    );
  }

  if (error && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
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
      {template === "premium" && <PromoPremiumView viewModel={viewModel} />}
      {template === "terminal" && <PromoTerminalView viewModel={viewModel} />}
      {template === "retroTechMagazine" && <PromoRetroTechMagazineView viewModel={viewModel} />}
    </>
  );
}
