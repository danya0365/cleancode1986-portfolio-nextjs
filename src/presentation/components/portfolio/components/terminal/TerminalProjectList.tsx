import React from 'react';
import Link from 'next/link';
import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  projects: Project[];
}

export function TerminalProjectList({ projects }: Props) {
  return (
    <TerminalBlock command="ls -la ./results | format --verbose" path="~/projects">
      {projects.length === 0 ? (
        <p className="text-red-500">grep: no matching files found. Exit status 1.</p>
      ) : (
        <div className="flex flex-col gap-6 mt-2">
          {projects.map((p) => {
            const date = new Date(p.projectDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            return (
              <div key={p.id} className="border-l-2 border-green-800 pl-4 py-2 hover:bg-green-900/20 transition-colors group">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">[{p.category}]</span>
                  <p className="text-amber-400 font-bold text-lg">{p.title.replace(/\\s+/g, '_').toLowerCase()}.sh</p>
                </div>
                
                <p className="text-green-600 text-xs sm:text-sm mt-1">
                  Owner: root | Size: {Math.floor(Math.random() * 8000 + 4096)} B | MTime: {date}
                </p>
                
                <p className="text-green-300 mt-3 line-clamp-3 leading-relaxed">
                  {p.description}
                </p>
                
                <div className="mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Link 
                    href={`/portfolio/${p.slug}`} 
                    className="text-blue-400 hover:text-blue-300 hover:underline bg-blue-900/20 px-2 py-1 rounded border border-blue-800/50"
                  >
                    $ ./execute --slug={p.slug}
                  </Link>
                </div>
              </div>
            );
          })}
          
          <div className="mt-4 pt-4 border-t border-green-900 text-green-600 text-sm">
            Total files: {projects.length}
          </div>
        </div>
      )}
    </TerminalBlock>
  );
}
