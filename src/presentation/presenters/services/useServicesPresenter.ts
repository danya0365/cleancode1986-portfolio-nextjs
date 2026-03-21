"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ServicesViewModel, ServicesPresenter } from "./ServicesPresenter";
import { createClientServicesPresenter } from "./ServicesPresenterClientFactory";

export interface ServicesPresenterState {
  viewModel: ServicesViewModel | null;
  loading: boolean;
  error: string | null;
}

export interface ServicesPresenterActions {
  loadData: () => Promise<void>;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Services presenter
 * Provides state management and actions for Services operations
 */
export function useServicesPresenter(
  initialViewModel?: ServicesViewModel | null,
  presenterOverride?: ServicesPresenter
): [ServicesPresenterState, ServicesPresenterActions] {
  // ✅ Create presenter inside hook with useMemo
  // Accept override for easier testing (Dependency Injection)
  const presenter = useMemo(
    () => presenterOverride ?? createClientServicesPresenter(),
    [presenterOverride]
  );
  
  // ✅ Track mounted state for memory leak protection
  const isMountedRef = useRef(true);
  
  // ✅ AbortController ref for canceling ongoing requests
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<ServicesViewModel | null>(
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
        console.error("Error loading services data:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [presenter]);

  // Load data on mount or when dependencies change
  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
  }, [initialViewModel, loadData]);

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
