"use client";

import type { ProjectDetailViewModel } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { ProjectDetailPremiumView } from "./ProjectDetailPremiumView";

interface Props {
  viewModel: ProjectDetailViewModel;
}

export function ProjectDetailTerminalView({ viewModel }: Props) {
  return <ProjectDetailPremiumView viewModel={viewModel} />;
}
