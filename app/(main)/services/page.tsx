import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ServicesPage } from "@/src/presentation/components/services/ServicesPage";
import { ServicesPresenterFactory } from "@/src/presentation/presenters/services/ServicesPresenter";
import type { Metadata } from "next";

/**
 * Generate metadata for services page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await ServicesPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "บริการ | Clean Code 1986",
      description: "บริการพัฒนาเว็บไซต์และแอปมือถือ",
    };
  }
}

/**
 * Services page - Server Component for SEO optimization
 */
export default async function Services() {
  const presenter = await ServicesPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <ServicesPage initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching services data:", error);
    return (
      <MainLayout>
        <ServicesPage />
      </MainLayout>
    );
  }
}
