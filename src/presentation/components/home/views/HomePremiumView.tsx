import type { HomeViewModel } from "@/src/presentation/presenters/home/HomePresenter";
import { CTASection } from "../components/premium/CTASection";
import { FeaturedProjects } from "../components/premium/FeaturedProjects";
import { HeroSection } from "../components/premium/HeroSection";
import { ServicesPreview } from "../components/premium/ServicesPreview";
import { StatsSection } from "../components/premium/StatsSection";
import { TestimonialsSection } from "../components/premium/TestimonialsSection";

interface Props {
  viewModel: HomeViewModel;
}

export function HomePremiumView({ viewModel }: Props) {
  return (
    <>
      <HeroSection technologies={viewModel.technologies} />
      <StatsSection stats={viewModel.stats} />
      <FeaturedProjects projects={viewModel.featuredProjects} />
      <ServicesPreview services={viewModel.services} />
      <TestimonialsSection testimonials={viewModel.testimonials} />
      <CTASection />
    </>
  );
}
