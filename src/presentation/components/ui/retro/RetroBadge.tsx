import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "skew";
  color?: "cyan" | "magenta" | "lime" | "black" | "white";
}

const colorStyles = {
  cyan: "bg-[#00FFFF] text-black border-black",
  magenta: "bg-[#FF00FF] text-white border-black",
  lime: "bg-[#39FF14] text-black border-black",
  black: "bg-black text-[#00FFFF] border-[#00FFFF]",
  white: "bg-white text-black border-black",
};

export function RetroBadge({ children, className = "", variant = "solid", color = "black" }: Props) {
  if (variant === "skew") {
    return (
      <div className={`font-black px-4 py-2 border-4 transform -rotate-6 text-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] inline-block w-fit ${colorStyles[color]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`font-black px-3 py-1 text-sm border-2 inline-block w-fit uppercase ${colorStyles[color]} ${className}`}>
      {children}
    </div>
  );
}
