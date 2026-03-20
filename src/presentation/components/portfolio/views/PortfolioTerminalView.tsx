"use client";

import type { PortfolioViewModel } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";
import { PortfolioPremiumView } from "./PortfolioPremiumView";

interface Props {
  viewModel: PortfolioViewModel;
}

export function PortfolioTerminalView({ viewModel }: Props) {
  // Terminal view applies global CRT filters to the Premium DOM structure
  return <PortfolioPremiumView viewModel={viewModel} />;
}
