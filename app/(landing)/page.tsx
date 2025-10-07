import { HomeView } from "@/src/presentation/components/home/HomeView";
import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { HomePresenterFactory } from "@/src/presentation/presenters/home/HomePresenter";
import type { Metadata } from "next";

/**
 * Generate metadata for the home page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await HomePresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata
    return {
      title: "Clean Code 1986 | พัฒนาเว็บไซต์และแอปพลิเคชัน",
      description: "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ",
    };
  }
}

/**
 * Home/Landing page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function Home() {
  const presenter = await HomePresenterFactory.createServer();

  try {
    // Get view model from presenter
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <HomeView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);

    // Fallback UI - let View component handle error state
    return (
      <MainLayout>
        <HomeView />
      </MainLayout>
    );
  }
}
