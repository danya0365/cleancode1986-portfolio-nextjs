"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ProjectDetailViewModel, ProjectDetailPresenter } from "./ProjectDetailPresenter";
import { createClientProjectDetailPresenter } from "./ProjectDetailPresenterClientFactory";

export interface ProjectDetailPresenterState {
  viewModel: ProjectDetailViewModel | null;
  loading: boolean;
  error: string | null;
}

export interface ProjectDetailPresenterActions {
  loadData: () => Promise<void>;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Project Detail presenter
 * Follows strict Clean Architecture Tuple pattern 3A
 */
export function useProjectDetailPresenter(
  slug: string,
  initialViewModel?: ProjectDetailViewModel | null,
  presenterOverride?: ProjectDetailPresenter
): [ProjectDetailPresenterState, ProjectDetailPresenterActions] {
  // ✅ Create presenter inside hook with useMemo
  const presenter = useMemo(
    () => presenterOverride ?? createClientProjectDetailPresenter(),
    [presenterOverride]
  );
  
  // ✅ Track mounted state for memory leak protection
  const isMountedRef = useRef(true);
  
  // ✅ AbortController ref for canceling ongoing requests
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<ProjectDetailViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    // ✅ Cancel any previous pending request
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel(slug);
      if (isMountedRef.current) {
        setViewModel(newViewModel);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      
      if (isMountedRef.current) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        console.error("Error loading project detail data:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [slug, presenter]);

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
