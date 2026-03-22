"use client";

import { useMemo } from "react";
// Import figlet and the specific font to avoid 'fs' issues in browser/Next.js
import figlet from "figlet";

import standardFont from "figlet/importable-fonts/Standard.js";

// Initialize font globally
figlet.parseFont("Standard", standardFont);

interface Props {
  text: string;
  className?: string;
}

export function TerminalAsciiLogo({ text, className = "" }: Props) {
  const asciiArt = useMemo(() => {
    try {
      return figlet.textSync(text, { font: "Standard" });
    } catch (e) {
      console.error("Figlet generation failed:", e);
      return text;
    }
  }, [text]);

  return (
    <pre className={`whitespace-pre font-bold leading-tight ${className}`}>
      {asciiArt}
    </pre>
  );
}
