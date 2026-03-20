"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface XRayContextType {
  isXRayMode: boolean;
  toggleXRayMode: () => void;
}

const XRayContext = createContext<XRayContextType | undefined>(undefined);

export function XRayProvider({ children }: { children: React.ReactNode }) {
  const [isXRayMode, setIsXRayMode] = useState(false);

  // Keyboard shortcut (Ctrl+Shift+X or Cmd+Shift+X)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "x") {
        e.preventDefault();
        setIsXRayMode((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Add a class to body when X-Ray is active for global CSS hooks if needed
  useEffect(() => {
    if (isXRayMode) {
      document.body.classList.add("xray-active");
    } else {
      document.body.classList.remove("xray-active");
    }
  }, [isXRayMode]);

  const toggleXRayMode = () => setIsXRayMode((prev) => !prev);

  return (
    <XRayContext.Provider value={{ isXRayMode, toggleXRayMode }}>
      {children}
    </XRayContext.Provider>
  );
}

export function useXRay() {
  const context = useContext(XRayContext);
  if (context === undefined) {
    throw new Error("useXRay must be used within an XRayProvider");
  }
  return context;
}
