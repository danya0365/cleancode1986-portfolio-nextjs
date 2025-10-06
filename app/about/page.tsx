import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { AboutPage } from "@/src/presentation/components/about/AboutPage";
import { AboutPresenterFactory } from "@/src/presentation/presenters/about/AboutPresenter";
import type { Metadata } from "next";

/**
 * Generate metadata for about page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await AboutPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "เกี่ยวกับเรา | Clean Code 1986",
      description: "ทำความรู้จักทีม Clean Code 1986",
    };
  }
}

/**
 * About page - Server Component for SEO optimization
 */
export default async function About() {
  const presenter = await AboutPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <AboutPage initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return (
      <MainLayout>
        <AboutPage />
      </MainLayout>
    );
  }
}
