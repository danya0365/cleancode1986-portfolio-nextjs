import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ProjectDetail } from "@/src/presentation/components/portfolio/ProjectDetail";
import { getProjectBySlug, MOCK_PROJECTS } from "@/src/data/mock/projects.mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "ไม่พบโปรเจค | Clean Code 1986",
    };
  }

  return {
    title: `${project.title} | Clean Code 1986`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      <ProjectDetail project={project} />
    </MainLayout>
  );
}
