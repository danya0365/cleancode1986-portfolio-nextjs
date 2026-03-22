"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TerminalImageProps {
  src?: string | null;
  alt: string;
  fill?: boolean;
  className?: string;
  fallbackText?: string;
}

export function TerminalImage({ 
  src, 
  alt, 
  fill = true, 
  className = "", 
  fallbackText = "NO_IMG" 
}: TerminalImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center w-full h-full bg-gray-900 overflow-hidden $\\{!fill ? className : ''\\}`}>
      {/* Background Fallback Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
        <span className="text-green-700 font-bold text-xs">{fallbackText}</span>
      </div>
      
      {/* Terminal Grid Scanline Underlay */}
      <div className="absolute inset-0 bg-green-500/10 pointer-events-none z-0"></div>

      {/* Actual Image Layer */}
      {src && !hasError && (
        <div className="absolute inset-0 z-10">
          <Image
            src={src}
            alt={alt}
            fill={fill}
            className={`object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity $\\{fill ? className : ''\\}`}
            onError={() => {
              setHasError(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
