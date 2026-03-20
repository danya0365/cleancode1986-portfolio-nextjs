"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CategoryFilter, PortfolioViewModel, PortfolioPresenter } from "./PortfolioPresenter";
import { createClientPortfolioPresenter } from "./PortfolioPresenterClientFactory";

export interface PortfolioParams {
  category?: CategoryFilter;
  search?: string;
}

export interface PortfolioPresenterState {
  viewModel: PortfolioViewModel | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategory: CategoryFilter;
}

export interface PortfolioPresenterActions {
  loadData: (params?: PortfolioParams) => Promise<void>;
  setError: (error: string | null) => void;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: CategoryFilter) => void;
}

/**
 * Custom hook for Portfolio presenter
 * Follows Clean Architecture Pattern 3A
 */
export function usePortfolioPresenter(
  initialViewModel?: PortfolioViewModel,
  presenterOverride?: PortfolioPresenter
): [PortfolioPresenterState, PortfolioPresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientPortfolioPresenter(),
    [presenterOverride]
  );
  
  const isMountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<PortfolioViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  // UI Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  
  // Track if it's the first render to skip initial debounce fetch (preventing SSR double-fetch)
  const isFirstRender = useRef(true);

  const loadData = useCallback(async (params?: PortfolioParams) => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel(params);
      if (isMountedRef.current) {
        setViewModel(newViewModel);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      
      if (isMountedRef.current) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        console.error("Error loading portfolio data:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [presenter]);

  // Load data on mount if no intial data
  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
  }, [loadData, initialViewModel]);

  // Debounced API calls for UI filters
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      loadData({ search: searchTerm, category: selectedCategory });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, loadData]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return [
    {
      viewModel,
      loading,
      error,
      searchTerm,
      selectedCategory,
    },
    {
      loadData,
      setError,
      setSearchTerm,
      setSelectedCategory,
    },
  ];
}
