"use client";

import type { ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { useContactPresenter } from "@/src/presentation/presenters/contact/useContactPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { ContactPremiumView } from "./views/ContactPremiumView";
import { ContactTerminalView } from "./views/ContactTerminalView";
import { ContactRetroTechMagazineView } from "./views/ContactRetroTechMagazineView";

interface ContactViewProps {
  initialViewModel?: ContactViewModel;
}

export function ContactView({ initialViewModel }: ContactViewProps) {
  const [state] = useContactPresenter(initialViewModel);
  const { template } = useTemplateStore();

  const {
    viewModel,
    loading,
    error,
  } = state;

  if (loading && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error && !viewModel) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
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
      {template === "premium" && (
        <ContactPremiumView viewModel={viewModel} />
      )}
      {template === "terminal" && (
        <ContactTerminalView viewModel={viewModel} />
      )}
      {template === "retroTechMagazine" && (
        <ContactRetroTechMagazineView viewModel={viewModel} />
      )}
    </>
  );
}
