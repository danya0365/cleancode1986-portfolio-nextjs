/**
 * Shared types for repositories
 */

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export type SortOrder = "asc" | "desc";

export interface QueryParams<FilterType = Record<string, unknown>> {
  /**
   * Page number (1-indexed)
   */
  page?: number;
  
  /**
   * Items per page. Use 0 or -1 for unlimited (depending on implementation).
   */
  perPage?: number;
  
  /**
   * General search term
   */
  search?: string;
  
  /**
   * Field to sort by
   */
  sortBy?: string;
  
  /**
   * Sort direction
   */
  sortOrder?: SortOrder;
  
  /**
   * Entity-specific filters
   */
  filters?: FilterType;
}
