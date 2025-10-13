import { PROJECTS } from "./projects";

export { PROJECTS };
export * from "./types";

// Helper function to get project by slug
export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

// Helper function to get featured projects
export function getFeaturedProjects(limit = 3) {
  return PROJECTS.filter((project) => project.isFeatured).slice(0, limit);
}
