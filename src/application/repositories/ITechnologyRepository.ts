/**
 * ITechnologyRepository
 * Repository interface for Technology data access
 * Following Clean Architecture - Application layer
 */

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "Design";
  description: string;
  proficiencyLevel: number;
  sortOrder: number;
  isActive: boolean;
}

export interface TechnologyStats {
  totalTechnologies: number;
  activeTechnologies: number;
  inactiveTechnologies: number;
}

import { PaginatedResult, QueryParams } from "./types";

export interface TechnologyFilterParams {
  category?: Technology["category"];
  isActive?: boolean;
}

export interface ITechnologyRepository {
  getById(id: string): Promise<Technology | null>;
  getByIds(ids: string[]): Promise<Technology[]>;
  getAll(): Promise<Technology[]>;
  query(params: QueryParams<TechnologyFilterParams>): Promise<PaginatedResult<Technology>>;
  getActive(): Promise<Technology[]>;
  getByCategory(category: Technology["category"]): Promise<Technology[]>;
  getStats(): Promise<TechnologyStats>;
}
