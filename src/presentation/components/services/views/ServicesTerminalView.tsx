"use client";

import type { ServicesViewModel } from "@/src/presentation/presenters/services/ServicesPresenter";
import { ServicesPremiumView } from "./ServicesPremiumView";

interface Props {
  viewModel: ServicesViewModel;
}

export function ServicesTerminalView({ viewModel }: Props) {
  // Terminal view wraps the premium UI and applies MainTerminalTemplate CSS overrides
  return <ServicesPremiumView viewModel={viewModel} />;
}
