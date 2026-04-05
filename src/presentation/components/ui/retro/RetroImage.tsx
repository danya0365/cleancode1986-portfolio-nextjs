"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RetroImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  fallbackIcon?: React.ReactNode;
}

export function RetroImage({ 
  src, 
  alt, 
  className = "", 
  imageClassName = "object-cover",
  fallbackIcon = <span className="text-6xl">👾</span>
}: RetroImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`overflow-hidden bg-gray-200 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${className}`}>
      {/* Fallback Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="grayscale opacity-50">{fallbackIcon}</div>
      </div>
      
      {/* Actual Image Layer */}
      {src && !hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`absolute inset-0 z-10 ${imageClassName}`}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
