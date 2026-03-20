"use client";

import { TeamMemberCVViewModel } from "@/src/presentation/presenters/about/TeamMemberCVPresenter";
import { FC } from "react";
import { CVPremiumView } from "./CVPremiumView";

interface CVTerminalViewProps {
  viewModel: TeamMemberCVViewModel;
}

export const CVTerminalView: FC<CVTerminalViewProps> = ({ viewModel }) => {
  // Sharing Premium View as fallback until Terminal View is implemented
  return <CVPremiumView viewModel={viewModel} />;
};
