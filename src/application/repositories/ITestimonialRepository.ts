/**
 * ITestimonialRepository
 * Repository interface for Testimonial data access
 * Following Clean Architecture - Application layer
 */

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  projectId?: string;
  isFeatured: boolean;
}

export interface TestimonialStats {
  totalTestimonials: number;
  featuredTestimonials: number;
}

import { PaginatedResult, QueryParams } from "./types";

export interface TestimonialFilterParams {
  isFeatured?: boolean;
  projectId?: string;
}

export interface ITestimonialRepository {
  getById(id: string): Promise<Testimonial | null>;
  getByIds(ids: string[]): Promise<Testimonial[]>;
  getAll(): Promise<Testimonial[]>;
  query(params: QueryParams<TestimonialFilterParams>): Promise<PaginatedResult<Testimonial>>;
  getFeatured(): Promise<Testimonial[]>;
  getStats(): Promise<TestimonialStats>;
}
