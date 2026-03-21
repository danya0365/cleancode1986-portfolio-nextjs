import React from 'react';
import Link from 'next/link';
import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  projects: Project[];
}

export function TerminalProjectRelated({ projects }: Props) {
  if (!projects || projects.length === 0) return null;

  return (
    <TerminalBlock command="ls -la ../related_modules/" path="~/projects">
      <div className="flex flex-col gap-4 mt-2">
        {projects.map((p) => {
          return (
            <div key={p.id} className="border-l-2 border-green-800 pl-4 py-2 hover:bg-green-900/20 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">[{p.category}]</span>
                    <p className="text-amber-400 font-bold">{p.title.replace(/\\s+/g, '_').toLowerCase()}.sh</p>
                  </div>
                  <p className="text-green-300 mt-1 line-clamp-1 text-sm">{p.description}</p>
                </div>
                
                <Link 
                  href={`/portfolio/${p.slug}`} 
                  className="text-blue-400 hover:text-blue-300 hover:underline whitespace-nowrap text-sm"
                >
                  $ ./execute --slug={p.slug}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </TerminalBlock>
  );
}
