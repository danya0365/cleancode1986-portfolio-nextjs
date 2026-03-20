import Link from "next/link";
import React from "react";

type ColorVariant = "primary" | "secondary" | "accent" | "white";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ColorVariant;
  className?: string;
}

const colorStyles: Record<ColorVariant, string> = {
  primary: "bg-[#FF00FF] text-white hover:text-[#FF00FF]", // Magenta
  secondary: "bg-[#00FFFF] text-black hover:text-[#00FFFF]", // Cyan
  accent: "bg-[#39FF14] text-black hover:text-[#39FF14]", // Lime
  white: "bg-white text-black hover:text-white", // White
};

export function RetroButton({ href, variant = "primary", className = "", children, ...props }: Props) {
  const baseClasses = `border-4 border-black px-8 py-4 font-black uppercase text-xl text-center hover:bg-black transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] active:scale-95 ${colorStyles[variant]} ${className}`;
  
  if (href) {
    // If it's an external link (tel, mailto, http) use normal <a>
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} className={baseClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
