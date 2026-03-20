/**
 * StaticTestimonialRepository
 * Implementation of ITestimonialRepository using static predefined data
 * Following Clean Architecture - Infrastructure layer
 */

import {
  ITestimonialRepository,
  Testimonial,
  TestimonialStats,
  TestimonialFilterParams,
} from "@/src/application/repositories/ITestimonialRepository";
import { PaginatedResult, QueryParams } from "@/src/application/repositories/types";
import { applyQueryParams } from "./utils";
import { TESTIMONIALS as STATIC_TESTIMONIALS } from "@/src/data/static/testimonials.static";

export class StaticTestimonialRepository implements ITestimonialRepository {
  private items: Testimonial[] = [...STATIC_TESTIMONIALS];

  async getById(id: string): Promise<Testimonial | null> {
    await this.delay(100);
    return this.items.find((item) => item.id === id) || null;
  }

  async getByIds(ids: string[]): Promise<Testimonial[]> {
    await this.delay(100);
    return this.items.filter((item) => ids.includes(item.id));
  }

  async getAll(): Promise<Testimonial[]> {
    await this.delay(100);
    return [...this.items];
  }

  async query(params: QueryParams<TestimonialFilterParams>): Promise<PaginatedResult<Testimonial>> {
    await this.delay(100);
    
    return applyQueryParams(
      this.items,
      params,
      (item, search) =>
        item.clientName.toLowerCase().includes(search) ||
        item.company.toLowerCase().includes(search) ||
        item.content.toLowerCase().includes(search),
      (item, filters) => {
        if (filters.isFeatured !== undefined && item.isFeatured !== filters.isFeatured) return false;
        if (filters.projectId && item.projectId !== filters.projectId) return false;
        return true;
      }
    );
  }

  async getFeatured(): Promise<Testimonial[]> {
    await this.delay(100);
    return this.items.filter((item) => item.isFeatured);
  }

  async getStats(): Promise<TestimonialStats> {
    await this.delay(100);
    const total = this.items.length;
    const featured = this.items.filter((item) => item.isFeatured).length;
    return {
      totalTestimonials: total,
      featuredTestimonials: featured,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
