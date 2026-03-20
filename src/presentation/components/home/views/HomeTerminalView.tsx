import type { HomeViewModel } from "@/src/presentation/presenters/home/HomePresenter";
import { HomePremiumView } from "./HomePremiumView";

interface Props {
  viewModel: HomeViewModel;
}

/**
 * For the Terminal view, we re-use the Premium structure but rely on the 
 * MainTerminalTemplate's aggressive CSS filter (.terminal-content-filter)
 * to radically transform the UI into a hacker theme without duplicate code.
 */
export function HomeTerminalView({ viewModel }: Props) {
  return <HomePremiumView viewModel={viewModel} />;
}
