import { CVPage } from "@/src/presentation/components/about/cv/CVPage";
import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { createServerCVPresenter } from "@/src/presentation/presenters/about/TeamMemberCVPresenterServerFactory";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const presenter = createServerCVPresenter();
  
  try {
    const viewModel = await presenter.getViewModel(id);
    if (!viewModel) return { title: "Not Found" };
    
    return {
      title: `Resume / CV: ${viewModel.member.name} | Clean Code 1986`,
      description: viewModel.cv.professionalSummary.slice(0, 150) + "...",
    };
  } catch {
    return {
      title: "Resume / CV | Clean Code 1986",
    };
  }
}

export default async function TeamMemberCVRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const presenter = createServerCVPresenter();
  
  try {
    const viewModel = await presenter.getViewModel(id);
    if (!viewModel) {
      notFound();
    }
    
    return (
      <MainLayout>
        <CVPage viewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Failed to load CV:", error);
    notFound();
  }
}
