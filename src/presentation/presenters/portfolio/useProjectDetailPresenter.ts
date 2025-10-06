import { useEffect, useState, useCallback } from "react";
import {
  ProjectDetailViewModel,
  ProjectDetailPresenterFactory,
} from "./ProjectDetailPresenter";

export interface ProjectDetailPresenterHook {
  viewModel: ProjectDetailViewModel | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for Project Detail presenter
 */
export function useProjectDetailPresenter(
  slug: string,
  initialViewModel: ProjectDetailViewModel | null = null
): ProjectDetailPresenterHook {
  const [viewModel, setViewModel] = useState<ProjectDetailViewModel | null>(
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
      const presenter = await ProjectDetailPresenterFactory.createClient();
      const data = await presenter.getViewModel(slug);
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading project detail:", err);
    } finally {
      setLoading(false);
    }
  }, [slug, initialViewModel]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await ProjectDetailPresenterFactory.createClient();
      const data = await presenter.getViewModel(slug);
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing project detail:", err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

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
