import React from 'react';
import Link from 'next/link';
import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  project: Project;
}

export function TerminalProjectManifest({ project }: Props) {
  const date = new Date(project.projectDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <TerminalBlock command={`cat ./${project.slug}.json`} path="~/projects">
      <div className="text-blue-300 bg-gray-900 border border-gray-800 p-4 rounded text-sm sm:text-base font-mono overflow-x-auto">
        <div>{`{`}</div>
        <div className="pl-4">
          <div><span className="text-green-400">&quot;id&quot;</span>: <span className="text-amber-400">&quot;{project.id}&quot;</span>,</div>
          <div><span className="text-green-400">&quot;title&quot;</span>: <span className="text-amber-400">&quot;{project.title}&quot;</span>,</div>
          <div><span className="text-green-400">&quot;category&quot;</span>: <span className="text-amber-400">&quot;{project.category}&quot;</span>,</div>
          <div><span className="text-green-400">&quot;createdAt&quot;</span>: <span className="text-amber-400">&quot;{date}&quot;</span>,</div>
          <div><span className="text-green-400">&quot;status&quot;</span>: <span className="text-amber-400">&quot;Production&quot;</span>,</div>
          <div>
            <span className="text-green-400">&quot;description&quot;</span>: <span className="text-amber-400">&quot;{project.description}&quot;</span>,
          </div>
          <div><span className="text-green-400">&quot;technologies&quot;</span>: [</div>
          <div className="pl-4">
            {project.technologies.map((tech, idx) => (
              <div key={idx}>
                <span className="text-amber-400">&quot;{tech}&quot;</span>{idx < project.technologies.length - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div>],</div>
          <div><span className="text-green-400">&quot;links&quot;</span>: {`{`}</div>
          <div className="pl-4">
            <div>
              <span className="text-green-400">&quot;liveDemo&quot;</span>: {
                project.liveUrl ? (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                    &quot;{project.liveUrl}&quot;
                  </Link>
                ) : <span className="text-purple-400">null</span>
              },
            </div>
            <div>
              <span className="text-green-400">&quot;sourceCode&quot;</span>: {
                project.githubUrl ? (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                    &quot;{project.githubUrl}&quot;
                  </Link>
                ) : <span className="text-purple-400">null</span>
              }
            </div>
          </div>
          <div>{`}`}</div>
        </div>
        <div>{`}`}</div>
      </div>
    </TerminalBlock>
  );
}
