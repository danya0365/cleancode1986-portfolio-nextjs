import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ProjectDetailView } from "@/src/presentation/components/portfolio/ProjectDetailView";
import { createServerProjectDetailPresenter } from "@/src/presentation/presenters/portfolio/ProjectDetailPresenterServerFactory";
import { StaticProjectRepository } from "@/src/infrastructure/repositories/static/StaticProjectRepository";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const presenter = createServerProjectDetailPresenter();

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
  const repository = new StaticProjectRepository();
  const projects = await repository.getAll();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Project Detail page - Server Component for SEO optimization
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const presenter = createServerProjectDetailPresenter();

  try {
    const viewModel = await presenter.getViewModel(slug);

    return (
      <MainLayout>
        <ProjectDetailView slug={slug} initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching project detail:", error);
    notFound();
  }
}
