"use client";

import React, { useEffect, useState } from "react";
import { useTemplateStore } from "../../store/useTemplateStore";
import { MainPremiumTemplate } from "./templates/MainPremiumTemplate";
import { MainTerminalTemplate } from "./templates/MainTerminalTemplate";
import { MainRetroTechMagazineTemplate } from "./templates/MainRetroTechMagazineTemplate";
import { TemplateOnboarding } from "./components/onboarding/TemplateOnboarding";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Main Layout Switcher
 * This replaces the original MainLayout and dynamically renders the requested template.
 * All pages using <MainLayout> will automatically inherit the global template system.
 */
export function MainLayout({ children }: MainLayoutProps) {
  const template = useTemplateStore((state) => state.template);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration fallback to prevent server/client HTML mismatch
  if (!mounted) {
    return <MainPremiumTemplate>{children}</MainPremiumTemplate>;
  }

  const renderTemplate = () => {
    if (template === "retroTechMagazine") {
      return <MainRetroTechMagazineTemplate>{children}</MainRetroTechMagazineTemplate>;
    }

    if (template === "terminal") {
      return <MainTerminalTemplate>{children}</MainTerminalTemplate>;
    }

    return <MainPremiumTemplate>{children}</MainPremiumTemplate>;
  };

  return (
    <>
      <TemplateOnboarding />
      {renderTemplate()}
    </>
  );
}
