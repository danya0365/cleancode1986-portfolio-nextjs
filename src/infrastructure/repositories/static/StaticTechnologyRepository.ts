/**
 * StaticTechnologyRepository
 * Implementation of ITechnologyRepository using static predefined data
 * Following Clean Architecture - Infrastructure layer
 */

import {
  ITechnologyRepository,
  Technology,
  TechnologyStats,
  TechnologyFilterParams,
} from "@/src/application/repositories/ITechnologyRepository";
import { PaginatedResult, QueryParams } from "@/src/application/repositories/types";
import { applyQueryParams } from "./utils";
import { TECHNOLOGIES as STATIC_TECHNOLOGIES } from "@/src/data/static/technologies.static";

export class StaticTechnologyRepository implements ITechnologyRepository {
  private items: Technology[] = [...STATIC_TECHNOLOGIES];

  async getById(id: string): Promise<Technology | null> {
    await this.delay(100);
    return this.items.find((item) => item.id === id) || null;
  }

  async getByIds(ids: string[]): Promise<Technology[]> {
    await this.delay(100);
    return this.items.filter((item) => ids.includes(item.id));
  }

  async getAll(): Promise<Technology[]> {
    await this.delay(100);
    return [...this.items].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async query(params: QueryParams<TechnologyFilterParams>): Promise<PaginatedResult<Technology>> {
    await this.delay(100);
    
    return applyQueryParams(
      this.items,
      { ...params, sortBy: params.sortBy || "sortOrder", sortOrder: params.sortOrder || "asc" },
      (item, search) =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search),
      (item, filters) => {
        if (filters.category && item.category !== filters.category) return false;
        if (filters.isActive !== undefined && item.isActive !== filters.isActive) return false;
        return true;
      }
    );
  }

  async getActive(): Promise<Technology[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getByCategory(category: Technology["category"]): Promise<Technology[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.category === category && item.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getStats(): Promise<TechnologyStats> {
    await this.delay(100);
    const total = this.items.length;
    const active = this.items.filter((item) => item.isActive).length;
    return {
      totalTechnologies: total,
      activeTechnologies: active,
      inactiveTechnologies: total - active,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
