import React from 'react';
import { TerminalPrompt, TerminalPromptProps } from './TerminalPrompt';

export interface TerminalBlockProps extends Omit<TerminalPromptProps, 'command'> {
  command: string;
  children: React.ReactNode;
  className?: string; // Optional internal wrapper classes
}

export function TerminalBlock({ 
  command, 
  user, 
  host, 
  path, 
  children,
  className = ""
}: TerminalBlockProps) {
  return (
    <div className="flex flex-col mb-8 text-sm sm:text-base">
      <TerminalPrompt command={command} user={user} host={host} path={path} />
      <div className={`pl-2 mt-2 text-green-400 overflow-x-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}
