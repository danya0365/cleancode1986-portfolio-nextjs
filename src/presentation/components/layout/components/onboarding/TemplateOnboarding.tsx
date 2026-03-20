"use client";

import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { SITE } from "@/src/data/master/site";
import { useEffect, useState } from "react";
import { BootSequenceOnboarding } from "./BootSequenceOnboarding";
import { SpotlightOnboarding } from "./SpotlightOnboarding";
import { GlitchOnboarding } from "./GlitchOnboarding";
import { MascotOnboarding } from "./MascotOnboarding";
import { createPortal } from "react-dom";

export function TemplateOnboarding() {
  const [mounted, setMounted] = useState(false);
  const hasSeenOnboarding = useTemplateStore((state) => state.hasSeenOnboarding);
  const onboardingType = SITE.templateSwitch.onboardingType;

  // Wait for client mount to avoid hydration mismatch with local storage
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (hasSeenOnboarding) return null;
  if (onboardingType === "none") return null;

  let content = null;

  if (onboardingType === "boot") {
    content = <BootSequenceOnboarding />;
  } else if (onboardingType === "spotlight") {
    content = <SpotlightOnboarding />;
  } else if (onboardingType === "glitch") {
    content = <GlitchOnboarding />;
  } else if (onboardingType === "mascot") {
    content = <MascotOnboarding />;
  }

  if (!content) return null;

  return createPortal(content, document.body);
}
