import type { HomeViewModel } from "@/src/presentation/presenters/home/HomePresenter";
import { RetroHeroSection } from "../components/retro/RetroHeroSection";
import { RetroStatsSection } from "../components/retro/RetroStatsSection";
import { RetroFeaturedProjects } from "../components/retro/RetroFeaturedProjects";
import { RetroServicesSection } from "../components/retro/RetroServicesSection";
import { RetroTestimonialsSection } from "../components/retro/RetroTestimonialsSection";
import { RetroCTASection } from "../components/retro/RetroCTASection";

interface Props {
  viewModel: HomeViewModel;
}

export function HomeRetroTechMagazineView({ viewModel }: Props) {
  return (
    <div className="flex flex-col gap-12 sm:gap-24 p-4 sm:p-8 lg:p-12 pb-32">
      <RetroHeroSection />
      <RetroStatsSection stats={viewModel.stats} />
      <RetroFeaturedProjects projects={viewModel.featuredProjects} />
      <RetroServicesSection services={viewModel.services} />
      <RetroTestimonialsSection testimonials={viewModel.testimonials} />
      <RetroCTASection />
    </div>
  );
}
