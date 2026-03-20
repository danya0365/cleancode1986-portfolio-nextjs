import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TemplateType = "premium" | "terminal" | "retroTechMagazine";

interface TemplateState {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
  hasSeenOnboarding: boolean;
  setHasSeenOnboarding: (seen: boolean) => void;
}

export const useTemplateStore = create<TemplateState>()(
  persist(
    (set) => ({
      template: "premium",
      setTemplate: (template) => set({ template }),
      hasSeenOnboarding: false,
      setHasSeenOnboarding: (seen) => set({ hasSeenOnboarding: seen }),
    }),
    {
      name: "clean-code-template-storage",
    }
  )
);
