"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HomeViewModel, HomePresenter } from "./HomePresenter";
import { createClientHomePresenter } from "./HomePresenterClientFactory";

export interface HomePresenterState {
  viewModel: HomeViewModel | null;
  loading: boolean;
  error: string | null;
}

export interface HomePresenterActions {
  loadData: () => Promise<void>;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Home presenter
 * Provides state management and actions for the Home page
 * Follows Clean Architecture Pattern 3A
 */
export function useHomePresenter(
  initialViewModel?: HomeViewModel,
  presenterOverride?: HomePresenter
): [HomePresenterState, HomePresenterActions] {
  // ✅ Create presenter inside hook with useMemo
  // Accept override for easier testing (Dependency Injection)
  const presenter = useMemo(
    () => presenterOverride ?? createClientHomePresenter(),
    [presenterOverride]
  );
  
  // ✅ Track mounted state for memory leak protection
  const isMountedRef = useRef(true);
  
  // ✅ AbortController ref for canceling ongoing requests
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<HomeViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load data from presenter
   */
  const loadData = useCallback(async () => {
    // ✅ Cancel any previous pending request
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel();
      if (isMountedRef.current) {
        setViewModel(newViewModel);
      }
    } catch (err) {
      // ✅ Ignore abort errors
      if (err instanceof Error && err.name === 'AbortError') return;
      
      if (isMountedRef.current) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        console.error("Error loading home data:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [presenter]);

  // Load data on mount if no initial data
  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
  }, [loadData, initialViewModel]);

  // ✅ Cleanup on unmount
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
    },
    {
      loadData,
      setError,
    },
  ];
}
