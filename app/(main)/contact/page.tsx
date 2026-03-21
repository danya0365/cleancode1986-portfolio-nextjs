import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ContactView } from "@/src/presentation/components/contact/ContactView";
import { createServerContactPresenter } from "@/src/presentation/presenters/contact/ContactPresenterServerFactory";
import type { Metadata } from "next";

/**
 * Generate metadata for contact page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerContactPresenter();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "รับคำปรึกษา | Clean Code 1986",
      description: "ติดต่อ Clean Code 1986",
    };
  }
}

/**
 * Contact page - Server Component for SEO optimization
 */
export default async function Contact() {
  const presenter = createServerContactPresenter();

  try {
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <ContactView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return (
      <MainLayout>
        <ContactView />
      </MainLayout>
    );
  }
}
