"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PremiumImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  fallbackIcon?: React.ReactNode;
}

export function PremiumImage({ 
  src, 
  alt, 
  className = "", 
  imageClassName = "object-cover",
  fallbackIcon = <span className="text-4xl">📸</span>
}: PremiumImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Fallback Layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="opacity-50 drop-shadow-sm">{fallbackIcon}</div>
      </div>
      
      {/* Actual Image Layer */}
      {src && !hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`absolute inset-0 transition-opacity duration-500 ${imageClassName}`}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
