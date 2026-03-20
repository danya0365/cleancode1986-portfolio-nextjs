import React from "react";
import { cn } from "@/src/presentation/utils/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  shadowSize?: "sm" | "md" | "lg";
  borderSize?: "sm" | "md" | "lg";
}

const shadowStyles = {
  sm: "shadow-[4px_4px_0_0_rgba(0,0,0,1)]",
  md: "shadow-[8px_8px_0_0_rgba(0,0,0,1)]",
  lg: "shadow-[12px_12px_0_0_rgba(0,0,0,1)]",
};

const hoverShadowStyles = {
  sm: "hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1",
  md: "hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2",
  lg: "hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] hover:translate-x-3 hover:translate-y-3",
};

const borderStyles = {
  sm: "border-2",
  md: "border-4",
  lg: "border-8",
};

export function RetroCard({ children, className = "", hoverEffect = false, shadowSize = "md", borderSize = "md", ...props }: Props) {
  const baseClasses = `bg-white border-black transition-all duration-300 ${borderStyles[borderSize]} ${shadowStyles[shadowSize]}`;
  const hoverClasses = hoverEffect ? hoverShadowStyles[shadowSize] : "";
  
  return (
    <div className={cn(baseClasses, hoverClasses, className)} {...props}>
      {children}
    </div>
  );
}
