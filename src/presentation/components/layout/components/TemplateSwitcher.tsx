"use client";

import React, { useEffect, useState } from "react";
import { useTemplateStore } from "../../../store/useTemplateStore";
import { TemplateSwitcherPremiumView } from "./views/TemplateSwitcherPremiumView";
import { TemplateSwitcherTerminalView } from "./views/TemplateSwitcherTerminalView";
import { TemplateSwitcherRetroTechMagazineView } from "./views/TemplateSwitcherRetroTechMagazineView";

export function TemplateSwitcher() {
  const template = useTemplateStore((state) => state.template);
  const setTemplate = useTemplateStore((state) => state.setTemplate);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (template === "retroTechMagazine") {
    return <TemplateSwitcherRetroTechMagazineView currentTemplate={template} setTemplate={setTemplate} />;
  }

  if (template === "terminal") {
    return <TemplateSwitcherTerminalView currentTemplate={template} setTemplate={setTemplate} />;
  }

  // Default to Premium View
  return <TemplateSwitcherPremiumView currentTemplate={template} setTemplate={setTemplate} />;
}
