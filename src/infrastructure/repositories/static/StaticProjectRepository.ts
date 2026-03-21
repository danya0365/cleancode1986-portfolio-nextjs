/**
 * StaticProjectRepository
 * Implementation of IProjectRepository using static predefined data
 * Following Clean Architecture - Infrastructure layer
 */

import {
  IProjectRepository,
  Project,
  ProjectStats,
  ProjectFilterParams,
} from "@/src/application/repositories/IProjectRepository";
import { PaginatedResult, QueryParams } from "@/src/application/repositories/types";
import { applyQueryParams } from "./utils";
import { PROJECTS as STATIC_PROJECTS } from "@/src/data/static/projects.static";

export class StaticProjectRepository implements IProjectRepository {
  private items: Project[] = [...STATIC_PROJECTS];

  async getById(id: string): Promise<Project | null> {
    await this.delay(100);
    return this.items.find((item) => item.id === id) || null;
  }

  async getBySlug(slug: string): Promise<Project | null> {
    await this.delay(100);
    return this.items.find((item) => item.slug === slug) || null;
  }

  async getByIds(ids: string[]): Promise<Project[]> {
    await this.delay(100);
    return this.items.filter((item) => ids.includes(item.id));
  }

  async getAll(): Promise<Project[]> {
    await this.delay(100);
    return [...this.items].sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async query(params: QueryParams<ProjectFilterParams>): Promise<PaginatedResult<Project>> {
    await this.delay(100);
    
    return applyQueryParams(
      this.items,
      { ...params, sortBy: params.sortBy || "displayOrder", sortOrder: params.sortOrder || "asc" },
      (item, search) =>
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.technologies.some((tech) => tech.toLowerCase().includes(search)),
      (item, filters) => {
        if (filters.category && item.category !== filters.category) return false;
        if (filters.isFeatured !== undefined && item.isFeatured !== filters.isFeatured) return false;
        if (filters.isCleanCode !== undefined && item.isCleanCode !== filters.isCleanCode) return false;
        if (filters.isFuture !== undefined && item.isFuture !== filters.isFuture) return false;
        if (filters.status && item.status !== filters.status) return false;
        return true;
      }
    );
  }

  async getFeatured(): Promise<Project[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.isFeatured)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }



  async getCleanCodeProjects(): Promise<Project[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.isCleanCode)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getStats(): Promise<ProjectStats> {
    await this.delay(100);

    const total = this.items.length;
    const published = this.items.filter((item) => item.status === "published").length;
    const draft = this.items.filter((item) => item.status === "draft").length;

    return {
      totalProjects: total,
      publishedProjects: published,
      draftProjects: draft,
    };
  }

  /**
   * Simulate network delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
