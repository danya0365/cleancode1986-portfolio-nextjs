import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ServicesView } from "@/src/presentation/components/services/ServicesView";
import { createServerServicesPresenter } from "@/src/presentation/presenters/services/ServicesPresenterServerFactory";
import type { Metadata } from "next";

/**
 * Generate metadata for services page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerServicesPresenter();

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
  const presenter = createServerServicesPresenter();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <ServicesView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching services data:", error);
    return (
      <MainLayout>
        <ServicesView />
      </MainLayout>
    );
  }
}
