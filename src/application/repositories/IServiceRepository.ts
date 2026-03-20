/**
 * IServiceRepository
 * Repository interface for Service data access
 * Following Clean Architecture - Application layer
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricingInfo?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface ServiceStats {
  totalServices: number;
  activeServices: number;
  inactiveServices: number;
}

import { PaginatedResult, QueryParams } from "./types";

export interface ServiceFilterParams {
  category?: string;
  isActive?: boolean;
}

export interface IServiceRepository {
  getById(id: string): Promise<Service | null>;
  getByIds(ids: string[]): Promise<Service[]>;
  getAll(): Promise<Service[]>;
  query(params: QueryParams<ServiceFilterParams>): Promise<PaginatedResult<Service>>;
  getActive(): Promise<Service[]>;
  getByCategory(category: string): Promise<Service[]>;
  getStats(): Promise<ServiceStats>;
}
