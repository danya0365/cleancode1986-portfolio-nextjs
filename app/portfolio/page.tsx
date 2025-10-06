import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { PortfolioList } from "@/src/presentation/components/portfolio/PortfolioList";
import { PortfolioPresenterFactory } from "@/src/presentation/presenters/portfolio/PortfolioPresenter";
import type { Metadata } from "next";

/**
 * Generate metadata for portfolio page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await PortfolioPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
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
  const presenter = await PortfolioPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <PortfolioList initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return (
      <MainLayout>
        <PortfolioList />
      </MainLayout>
    );
  }
}
