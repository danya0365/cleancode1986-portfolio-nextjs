"use client";

import type { ServicesViewModel } from "@/src/presentation/presenters/services/ServicesPresenter";
import { useServicesPresenter } from "@/src/presentation/presenters/services/useServicesPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { ServicesPremiumView } from "./views/ServicesPremiumView";
import { ServicesTerminalView } from "./views/ServicesTerminalView";
import { ServicesRetroTechMagazineView } from "./views/ServicesRetroTechMagazineView";

interface ServicesViewProps {
  initialViewModel?: ServicesViewModel;
}

export function ServicesView({ initialViewModel }: ServicesViewProps) {
  const [state, actions] = useServicesPresenter(initialViewModel);
  const { template } = useTemplateStore();

  const { viewModel, loading, error } = state;

  // Loading state
  if (loading && !viewModel) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"></div>
      </div>
    );
  }

  // Error state
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
      {template === "premium" && <ServicesPremiumView viewModel={viewModel} />}
      {template === "terminal" && <ServicesTerminalView viewModel={viewModel} />}
      {template === "retroTechMagazine" && <ServicesRetroTechMagazineView viewModel={viewModel} />}
    </>
  );
}
