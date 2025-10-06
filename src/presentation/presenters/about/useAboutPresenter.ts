import { useEffect, useState, useCallback } from "react";
import { AboutViewModel, AboutPresenterFactory } from "./AboutPresenter";

export interface AboutPresenterHook {
  viewModel: AboutViewModel | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for About presenter
 */
export function useAboutPresenter(
  initialViewModel: AboutViewModel | null = null
): AboutPresenterHook {
  const [viewModel, setViewModel] = useState<AboutViewModel | null>(
    initialViewModel
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    if (initialViewModel) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const presenter = await AboutPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading about data:", err);
    } finally {
      setLoading(false);
    }
  }, [initialViewModel]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await AboutPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing about data:", err);
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
