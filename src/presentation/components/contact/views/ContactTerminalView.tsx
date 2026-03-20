"use client";

import type { ContactViewModel } from "@/src/presentation/presenters/contact/ContactPresenter";
import { ContactPremiumView } from "./ContactPremiumView";

interface Props {
  viewModel: ContactViewModel;
  submitting: boolean;
  submitStatus: { success: boolean; message: string; } | null;
  submitContactForm: (data: { name: string; email: string; phone?: string; projectType: string; budget?: string; message: string; }) => Promise<void>;
}

export function ContactTerminalView({ viewModel, submitting, submitStatus, submitContactForm }: Props) {
  return (
    <ContactPremiumView 
      viewModel={viewModel} 
      submitting={submitting} 
      submitStatus={submitStatus} 
      submitContactForm={submitContactForm} 
    />
  );
}
