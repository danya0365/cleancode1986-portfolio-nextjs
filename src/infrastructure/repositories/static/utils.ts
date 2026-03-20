import { PaginatedResult, QueryParams } from "@/src/application/repositories/types";

export function applyQueryParams<T, F>(
  items: T[],
  params: QueryParams<F>,
  searchFn?: (item: T, search: string) => boolean,
  filterFn?: (item: T, filters: F) => boolean
): PaginatedResult<T> {
  let result = [...items];

  // 1. Filter
  if (params.filters && filterFn) {
    result = result.filter((item) => filterFn(item, params.filters!));
  }

  // 2. Search
  if (params.search && searchFn) {
    const searchLower = params.search.toLowerCase();
    result = result.filter((item) => searchFn(item, searchLower));
  }

  // 3. Sort
  if (params.sortBy) {
    const sortBy = params.sortBy as keyof T;
    const orderMultiplier = params.sortOrder === "desc" ? -1 : 1;

    result.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];

      if (valA === valB) return 0;
      if (valA == null) return orderMultiplier;
      if (valB == null) return -orderMultiplier;

      return valA < valB ? -1 * orderMultiplier : 1 * orderMultiplier;
    });
  }

  // 4. Paginate
  const total = result.length;
  const page = params.page || 1;
  const perPage = params.perPage !== undefined ? params.perPage : 10;

  if (perPage > 0) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    result = result.slice(startIndex, endIndex);
  }

  const totalPages = perPage > 0 ? Math.ceil(total / perPage) : 1;

  return {
    data: result,
    total,
    page,
    perPage: perPage > 0 ? perPage : total,
    totalPages,
  };
}
