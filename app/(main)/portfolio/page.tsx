import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { PortfolioView } from "@/src/presentation/components/portfolio/PortfolioView";
import { createServerPortfolioPresenter } from "@/src/presentation/presenters/portfolio/PortfolioPresenterServerFactory";
import type { Metadata } from "next";

/**
 * Generate metadata for portfolio page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerPortfolioPresenter();

  try {
    return presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "ผลงาน | Clean Code 1986",
      description: "ผลงานพัฒนาเว็บไซต์และแอปพลิเคชัน",
    };
  }
}

/**
 * Portfolio page - Server Component for SEO optimization
 */
export default async function PortfolioPage() {
  const presenter = createServerPortfolioPresenter();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <PortfolioView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return (
      <MainLayout>
        <PortfolioView />
      </MainLayout>
    );
  }
}
