"use client";

import React, { useState, useEffect } from "react";
import { useXRay } from "../../providers/xray-provider";
import { cn } from "@/src/presentation/utils/cn";

export function XRayToggle() {
  const { isXRayMode, toggleXRayMode } = useXRay();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Magnetic effect logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget.getBoundingClientRect();
    const centerX = btn.left + btn.width / 2;
    const centerY = btn.top + btn.height / 2;
    
    // Calculate distance from center
    const x = (e.clientX - centerX) * 0.3;
    const y = (e.clientY - centerY) * 0.3;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] sm:bottom-10 sm:right-10">
      <div 
        className="relative group cursor-pointer p-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Helper Tooltip label */}
        <div className={`absolute top-1/2 -translate-y-1/2 right-full mr-4 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow-md`}>
          {isXRayMode ? "ซ่อน X-Ray Mode" : "เปิด X-Ray Mode"}
        </div>
        
        {/* Magical Magnetic Button */}
        <button
          onClick={toggleXRayMode}
          className={cn(
            "relative flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 ease-out shadow-xl backdrop-blur-xl",
            isXRayMode 
              ? "bg-indigo-600/90 border-indigo-400/50 shadow-[0_0_30px_rgba(79,70,229,0.5)] text-white" 
              : "bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-800/50 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-gray-200 hover:border-indigo-500/50"
          )}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          aria-label="Toggle X-Ray Mode"
        >
          {isXRayMode ? (
            <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
