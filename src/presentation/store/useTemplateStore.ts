import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TemplateType = "premium" | "terminal";

interface TemplateState {
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
}

export const useTemplateStore = create<TemplateState>()(
  persist(
    (set) => ({
      template: "premium",
      setTemplate: (template) => set({ template }),
    }),
    {
      name: "clean-code-template-storage",
    }
  )
);
