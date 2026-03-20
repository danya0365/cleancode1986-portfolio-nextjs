/**
 * IProjectRepository
 * Repository interface for Project data access
 * Following Clean Architecture - Application layer
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "UI/UX" | "Full-stack";
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  features: { title: string; description: string; image?: string }[];
  client?: string;
  projectDate: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  status: "draft" | "published" | "archived";
  viewCount: number;
  displayOrder: number;
  isCleanCode: boolean;

  isFuture: boolean;
}

export interface ProjectStats {
  totalProjects: number;
  publishedProjects: number;
  draftProjects: number;
}

import { PaginatedResult, QueryParams } from "./types";

export interface ProjectFilterParams {
  category?: Project["category"];
  isFeatured?: boolean;
  isCleanCode?: boolean;
  isFuture?: boolean;
  status?: Project["status"];
}

export interface IProjectRepository {
  /**
   * Get project by ID
   */
  getById(id: string): Promise<Project | null>;

  /**
   * Get project by slug
   */
  getBySlug(slug: string): Promise<Project | null>;

  /**
   * Get multiple projects by IDs
   */
  getByIds(ids: string[]): Promise<Project[]>;

  /**
   * Get all projects (without pagination)
   */
  getAll(): Promise<Project[]>;

  /**
   * Query projects with search, sort, filter, and pagination
   */
  query(params: QueryParams<ProjectFilterParams>): Promise<PaginatedResult<Project>>;

  /**
   * Get featured projects
   */
  getFeatured(): Promise<Project[]>;

  /**
   * Get projects by category
   */
  getByCategory(category: Project["category"]): Promise<Project[]>;

  /**
   * Get purely clean code projects
   */
  getCleanCodeProjects(): Promise<Project[]>;

  /**
   * Get statistics
   */
  getStats(): Promise<ProjectStats>;
}
