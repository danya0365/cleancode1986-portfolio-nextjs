import { useEffect, useState, useCallback } from "react";
import { HomeViewModel, HomePresenterFactory } from "./HomePresenter";

export interface HomePresenterHook {
  viewModel: HomeViewModel | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for Home presenter
 * Provides state management for home page
 */
export function useHomePresenter(
  initialViewModel: HomeViewModel | null = null
): HomePresenterHook {
  const [viewModel, setViewModel] = useState<HomeViewModel | null>(
    initialViewModel
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load data from presenter
   */
  const loadData = useCallback(async () => {
    if (initialViewModel) {
      // If we have initial data, don't load again
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const presenter = await HomePresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading home data:", err);
    } finally {
      setLoading(false);
    }
  }, [initialViewModel]);

  /**
   * Refresh data (force reload)
   */
  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await HomePresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing home data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    viewModel,
    loading,
    error,
    refreshData,
  };
}
