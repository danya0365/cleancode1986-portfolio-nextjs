"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PromoViewModel, PromoPresenter } from "./PromoPresenter";
import { createClientPromoPresenter } from "./PromoPresenterClientFactory";

export interface PromoPresenterState {
  viewModel: PromoViewModel | null;
  loading: boolean;
  error: string | null;
}

export interface PromoPresenterActions {
  loadData: () => Promise<void>;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Promo presenter
 * Provides state management and actions for Promo operations
 */
export function usePromoPresenter(
  initialViewModel?: PromoViewModel | null,
  presenterOverride?: PromoPresenter
): [PromoPresenterState, PromoPresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientPromoPresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<PromoViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
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
      if (err instanceof Error && err.name === "AbortError") return;

      if (isMountedRef.current) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        console.error("Error loading promo data:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [presenter]);

  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
  }, [initialViewModel, loadData]);

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
