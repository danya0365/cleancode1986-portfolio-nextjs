import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ContactPage } from "@/src/presentation/components/contact/ContactPage";
import { ContactPresenterFactory } from "@/src/presentation/presenters/contact/ContactPresenter";
import type { Metadata } from "next";

/**
 * Generate metadata for contact page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await ContactPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "ติดต่อเรา | Clean Code 1986",
      description: "ติดต่อ Clean Code 1986",
    };
  }
}

/**
 * Contact page - Server Component for SEO optimization
 */
export default async function Contact() {
  const presenter = await ContactPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <ContactPage initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return (
      <MainLayout>
        <ContactPage />
      </MainLayout>
    );
  }
}
