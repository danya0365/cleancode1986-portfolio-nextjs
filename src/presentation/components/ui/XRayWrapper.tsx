"use client";

import React, { useState } from "react";
import { useXRay } from "../../providers/xray-provider";

interface XRayWrapperProps {
  children: React.ReactNode;
  codeSnippet: string;
  componentName: string;
}

export function XRayWrapper({ children, codeSnippet, componentName }: XRayWrapperProps) {
  const { isXRayMode } = useXRay();
  const [isHovered, setIsHovered] = useState(false);

  // If X-Ray is off, just render children completely normally with no wrappers or overhead
  if (!isXRayMode) return <>{children}</>;

  return (
    <div 
      className={`relative rounded-3xl transition-all duration-300 z-10 
        ${isHovered ? "ring-2 ring-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.2)]" : "ring-1 ring-white/10 dark:ring-white/5"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The original component */}
      <div className={`transition-all duration-500 ${isHovered ? "opacity-10 blur-md grayscale scale-[0.98]" : "opacity-100"}`}>
        {children}
      </div>

      {/* The X-Ray Code Reveal Overlay */}
      <div 
        className={`absolute inset-0 m-4 flex items-center justify-center p-6 bg-gray-900/90 dark:bg-black/90 backdrop-blur-xl rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 
          ${isHovered ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}
        `}
      >
        <div className="absolute top-4 left-6 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-4 text-xs font-mono font-bold text-gray-400 tracking-wider">
            {componentName}
          </span>
        </div>
        
        {/* Mock Syntax Highlighted Code Viewer */}
        <div className="w-full max-h-full overflow-y-auto no-scrollbar mt-8 text-left">
          <pre className="text-sm md:text-base font-mono leading-relaxed p-4 rounded-xl bg-gray-950/50 border border-gray-800/50 shadow-inner">
            <code className="text-gray-300 selection:bg-indigo-500/30">
              {codeSnippet.split('\\n').map((line, i) => {
                // Extremely simple "Syntax Highlighting" logic just for WOW effect
                const highlightedLine = line
                  .replace(/<([a-zA-Z0-9]+)/g, '<span class="text-pink-400">&lt;$1</span>')
                  .replace(/<\/([a-zA-Z0-9]+)>/g, '<span class="text-pink-400">&lt;/$1&gt;</span>')
                  .replace(/className=/g, '<span class="text-indigo-300">className</span>=')
                  .replace(/"([^"]*)"/g, '<span class="text-green-300">"$1"</span>')
                  .replace(/>/g, '<span class="text-gray-500">&gt;</span>');
                  
                return (
                  <div key={i} className="flex hover:bg-white/5 transition-colors px-2 rounded">
                    <span className="w-8 shrink-0 text-gray-600 select-none border-r border-gray-800 mr-4">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full font-bold text-xs uppercase tracking-widest border border-indigo-500/30 backdrop-blur-md">
          Clean Code Architecture
        </div>
      </div>
    </div>
  );
}
