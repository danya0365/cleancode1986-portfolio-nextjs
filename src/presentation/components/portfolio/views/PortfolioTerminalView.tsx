"use client";

import { PortfolioPremiumView, type PortfolioTemplateProps } from "./PortfolioPremiumView";

export function PortfolioTerminalView(props: PortfolioTemplateProps) {
  // Terminal view applies global CRT filters to the Premium DOM structure
  return <PortfolioPremiumView {...props} />;
}
