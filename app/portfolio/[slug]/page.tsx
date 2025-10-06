import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ProjectDetail } from "@/src/presentation/components/portfolio/ProjectDetail";
import { ProjectDetailPresenterFactory } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenter";
import { MOCK_PROJECTS } from "@/src/data/mock/projects.mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate metadata for project detail page
 */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const presenter = await ProjectDetailPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata(slug);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "โปรเจค | Clean Code 1986",
      description: "รายละเอียดโปรเจค",
    };
  }
}

/**
 * Generate static params for all projects
 */
export async function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Project Detail page - Server Component for SEO optimization
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const presenter = await ProjectDetailPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel(slug);

    return (
      <MainLayout>
        <ProjectDetail slug={slug} initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching project detail:", error);
    notFound();
  }
}
