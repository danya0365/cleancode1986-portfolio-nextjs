import { useEffect, useState, useCallback } from "react";
import {
  ContactViewModel,
  ContactPresenterFactory,
  ContactFormData,
} from "./ContactPresenter";

export interface ContactPresenterHook {
  viewModel: ContactViewModel | null;
  loading: boolean;
  error: string | null;
  submitting: boolean;
  submitStatus: { success: boolean; message: string } | null;
  refreshData: () => Promise<void>;
  submitContactForm: (data: ContactFormData) => Promise<void>;
}

/**
 * Custom hook for Contact presenter
 */
export function useContactPresenter(
  initialViewModel: ContactViewModel | null = null
): ContactPresenterHook {
  const [viewModel, setViewModel] = useState<ContactViewModel | null>(
    initialViewModel
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const loadData = useCallback(async () => {
    if (initialViewModel) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const presenter = await ContactPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading contact data:", err);
    } finally {
      setLoading(false);
    }
  }, [initialViewModel]);

  const refreshData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const presenter = await ContactPresenterFactory.createClient();
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error refreshing contact data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const submitContactForm = useCallback(async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const presenter = await ContactPresenterFactory.createClient();
      const result = await presenter.submitContactForm(data);
      setSubmitStatus(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
      console.error("Error submitting contact form:", err);
    } finally {
      setSubmitting(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    viewModel,
    loading,
    error,
    submitting,
    submitStatus,
    refreshData,
    submitContactForm,
  };
}
