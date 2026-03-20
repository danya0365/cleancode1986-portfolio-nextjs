"use client";

import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { TermsPremiumView } from "./views/TermsPremiumView";
import { TermsTerminalView } from "./views/TermsTerminalView";
import { TermsRetroTechMagazineView } from "./views/TermsRetroTechMagazineView";

export function TermsPage() {
  const template = useTemplateStore((state) => state.template);

  if (template === "retroTechMagazine") {
    return <TermsRetroTechMagazineView />;
  }
  if (template === "terminal") {
    return <TermsTerminalView />;
  }

  return <TermsPremiumView />;
}
