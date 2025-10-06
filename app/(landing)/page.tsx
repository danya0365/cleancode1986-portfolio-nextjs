import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { HeroSection } from "@/src/presentation/components/home/HeroSection";
import { StatsSection } from "@/src/presentation/components/home/StatsSection";
import { FeaturedProjects } from "@/src/presentation/components/home/FeaturedProjects";
import { ServicesPreview } from "@/src/presentation/components/home/ServicesPreview";
import { TestimonialsSection } from "@/src/presentation/components/home/TestimonialsSection";
import { CTASection } from "@/src/presentation/components/home/CTASection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
}
