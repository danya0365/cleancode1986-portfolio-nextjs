import { AboutView } from "@/src/presentation/components/about/AboutView";
import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { createServerAboutPresenter } from "@/src/presentation/presenters/about/AboutPresenterServerFactory";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

/**
 * Generate metadata for about page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerAboutPresenter();

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
  const presenter = createServerAboutPresenter();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <AboutView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return (
      <MainLayout>
        <AboutView />
      </MainLayout>
    );
  }
}
