"use client";

import { FC } from "react";
import { TeamMemberCVViewModel } from "@/src/presentation/presenters/about/TeamMemberCVPresenter";
import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { CVPremiumView } from "./views/CVPremiumView";
import { CVTerminalView } from "./views/CVTerminalView";
import { CVRetroTechMagazineView } from "./views/CVRetroTechMagazineView";

interface CVPageProps {
  viewModel: TeamMemberCVViewModel;
}

export const CVPage: FC<CVPageProps> = ({ viewModel }) => {
  const template = useTemplateStore((state) => state.template);

  if (template === "retroTechMagazine") {
    return <CVRetroTechMagazineView viewModel={viewModel} />;
  }
  if (template === "terminal") {
    return <CVTerminalView viewModel={viewModel} />;
  }

  return <CVPremiumView viewModel={viewModel} />;
};
