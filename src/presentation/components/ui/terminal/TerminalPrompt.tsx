import React from 'react';

export interface TerminalPromptProps {
  command: string;
  user?: string;
  host?: string;
  path?: string;
}

export function TerminalPrompt({ 
  command, 
  user = "guest", 
  host = "cleancode1986", 
  path = "~" 
}: TerminalPromptProps) {
  return (
    <div className="flex items-center text-green-500 mb-2 break-all">
      <span className="font-bold mr-2 whitespace-nowrap">{user}@{host}:{path}$</span>
      <span>{command}</span>
    </div>
  );
}
