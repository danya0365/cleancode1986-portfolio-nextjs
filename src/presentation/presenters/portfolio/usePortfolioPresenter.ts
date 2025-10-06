import { useEffect, useState, useCallback } from "react";
import { PortfolioViewModel, PortfolioPresenterFactory } from "./PortfolioPresenter";

export interface PortfolioPresenterHook {
  viewModel: PortfolioViewModel | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for Portfolio presenter
 */
export function usePortfolioPresenter(
  initialViewModel: PortfolioViewModel | null = null
): PortfolioPresenterHook {
  const [viewModel, setViewModel] = useState<PortfolioViewModel | null>(
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
      const presenter = await PortfolioPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading portfolio data:", err);
    } finally {
      setLoading(false);
    }
  }, [initialViewModel]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await PortfolioPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing portfolio data:", err);
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
