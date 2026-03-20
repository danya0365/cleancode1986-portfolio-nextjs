"use client";

import { useTemplateStore } from "@/src/presentation/store/useTemplateStore";
import { PrivacyPremiumView } from "./views/PrivacyPremiumView";
import { PrivacyTerminalView } from "./views/PrivacyTerminalView";
import { PrivacyRetroTechMagazineView } from "./views/PrivacyRetroTechMagazineView";

export function PrivacyPage() {
  const template = useTemplateStore((state) => state.template);

  if (template === "retroTechMagazine") {
    return <PrivacyRetroTechMagazineView />;
  }
  if (template === "terminal") {
    return <PrivacyTerminalView />;
  }

  return <PrivacyPremiumView />;
}
