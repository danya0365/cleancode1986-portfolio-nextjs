"use client";

import type { AboutViewModel } from "@/src/presentation/presenters/about/AboutPresenter";
import { AboutPremiumView } from "./AboutPremiumView";

interface Props {
  viewModel: AboutViewModel;
}

export function AboutTerminalView({ viewModel }: Props) {
  // Terminal view wraps the premium UI and relies on the CSS overrides 
  // from MainTerminalTemplate to enforce its aesthetic presentation.
  return <AboutPremiumView viewModel={viewModel} />;
}
