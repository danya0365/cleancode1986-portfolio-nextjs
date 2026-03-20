/**
 * StaticServiceRepository
 * Implementation of IServiceRepository using static predefined data
 * Following Clean Architecture - Infrastructure layer
 */

import {
  IServiceRepository,
  Service,
  ServiceStats,
  ServiceFilterParams,
} from "@/src/application/repositories/IServiceRepository";
import { PaginatedResult, QueryParams } from "@/src/application/repositories/types";
import { applyQueryParams } from "./utils";
import { SERVICES as STATIC_SERVICES } from "@/src/data/static/services.static";

export class StaticServiceRepository implements IServiceRepository {
  private items: Service[] = [...STATIC_SERVICES];

  async getById(id: string): Promise<Service | null> {
    await this.delay(100);
    return this.items.find((item) => item.id === id) || null;
  }

  async getByIds(ids: string[]): Promise<Service[]> {
    await this.delay(100);
    return this.items.filter((item) => ids.includes(item.id));
  }

  async getAll(): Promise<Service[]> {
    await this.delay(100);
    return [...this.items].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async query(params: QueryParams<ServiceFilterParams>): Promise<PaginatedResult<Service>> {
    await this.delay(100);
    
    return applyQueryParams(
      this.items,
      { ...params, sortBy: params.sortBy || "sortOrder", sortOrder: params.sortOrder || "asc" },
      (item, search) =>
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.features.some((f) => f.toLowerCase().includes(search)),
      (item, filters) => {
        if (filters.category && item.category !== filters.category) return false;
        if (filters.isActive !== undefined && item.isActive !== filters.isActive) return false;
        return true;
      }
    );
  }

  async getActive(): Promise<Service[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getByCategory(category: string): Promise<Service[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.category === category)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getStats(): Promise<ServiceStats> {
    await this.delay(100);
    const total = this.items.length;
    const active = this.items.filter((item) => item.isActive).length;
    return {
      totalServices: total,
      activeServices: active,
      inactiveServices: total - active,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
