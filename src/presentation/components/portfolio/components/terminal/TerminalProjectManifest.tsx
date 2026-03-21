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
          <div><span className="text-green-400">"id"</span>: <span className="text-amber-400">"{project.id}"</span>,</div>
          <div><span className="text-green-400">"title"</span>: <span className="text-amber-400">"{project.title}"</span>,</div>
          <div><span className="text-green-400">"category"</span>: <span className="text-amber-400">"{project.category}"</span>,</div>
          <div><span className="text-green-400">"createdAt"</span>: <span className="text-amber-400">"{date}"</span>,</div>
          <div><span className="text-green-400">"status"</span>: <span className="text-amber-400">"Production"</span>,</div>
          <div>
            <span className="text-green-400">"description"</span>: <span className="text-amber-400">"{project.description}"</span>,
          </div>
          <div><span className="text-green-400">"technologies"</span>: [</div>
          <div className="pl-4">
            {project.technologies.map((tech, idx) => (
              <div key={idx}>
                <span className="text-amber-400">"{tech}"</span>{idx < project.technologies.length - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          <div>],</div>
          <div><span className="text-green-400">"links"</span>: {`{`}</div>
          <div className="pl-4">
            <div>
              <span className="text-green-400">"liveDemo"</span>: {
                project.liveUrl ? (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                    "{project.liveUrl}"
                  </Link>
                ) : <span className="text-purple-400">null</span>
              },
            </div>
            <div>
              <span className="text-green-400">"sourceCode"</span>: {
                project.githubUrl ? (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                    "{project.githubUrl}"
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
