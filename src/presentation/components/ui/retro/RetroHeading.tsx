import React from "react";
import { cn } from "@/src/presentation/utils/cn";

type HeadingColor = "white" | "cyan" | "magenta" | "lime" | "transparent";

interface Props {
  children: React.ReactNode;
  bg?: HeadingColor;
  className?: string;
  withStroke?: boolean;
}

const bgStyles: Record<HeadingColor, string> = {
  white: "bg-white",
  cyan: "bg-[#00FFFF]",
  magenta: "bg-[#FF00FF]",
  lime: "bg-[#39FF14]",
  transparent: "bg-transparent",
};

export function RetroHeading({ children, bg = "white", className = "", withStroke = false }: Props) {
  const borderClasses = bg !== "transparent" ? "border-b-8 border-t-8 border-x-8 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-6 pb-4 pt-2" : "";
  
  return (
    <h2 
      className={cn(
        "text-4xl md:text-6xl font-black uppercase inline-block w-fit",
        bgStyles[bg],
        borderClasses,
        withStroke ? "text-white styling-stroke" : "text-black",
        className
      )}
      style={withStroke ? { WebkitTextStroke: '2px black' } : undefined}
    >
      {children}
    </h2>
  );
}
