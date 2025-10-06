import { useEffect, useState, useCallback } from "react";
import { ServicesViewModel, ServicesPresenterFactory } from "./ServicesPresenter";

export interface ServicesPresenterHook {
  viewModel: ServicesViewModel | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for Services presenter
 */
export function useServicesPresenter(
  initialViewModel: ServicesViewModel | null = null
): ServicesPresenterHook {
  const [viewModel, setViewModel] = useState<ServicesViewModel | null>(
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
      const presenter = await ServicesPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading services data:", err);
    } finally {
      setLoading(false);
    }
  }, [initialViewModel]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await ServicesPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing services data:", err);
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
