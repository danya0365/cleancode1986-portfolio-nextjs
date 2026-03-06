import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AboutPresenter, AboutViewModel } from "./AboutPresenter";
import { createClientAboutPresenter } from "./AboutPresenterClientFactory";

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
  initialViewModel: AboutViewModel | null = null,
  presenterOverride?: AboutPresenter
): AboutPresenterHook {
  const [viewModel, setViewModel] = useState<AboutViewModel | null>(
    initialViewModel
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const presenter = useMemo(
    () => presenterOverride ?? createClientAboutPresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const loadData = useCallback(async () => {
    if (initialViewModel) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await presenter.getViewModel();
      if (isMountedRef.current) {
        setViewModel(data);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      if (isMountedRef.current) {
        setError(errorMessage);
      }
      console.error("Error loading about data:", err);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [initialViewModel, presenter]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await presenter.getViewModel();
      if (isMountedRef.current) {
        setViewModel(data);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      if (isMountedRef.current) {
        setError(errorMessage);
      }
      console.error("Error refreshing about data:", err);
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [presenter]);

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
