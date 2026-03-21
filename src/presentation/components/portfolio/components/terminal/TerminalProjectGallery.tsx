import React from 'react';
import Image from 'next/image';
import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

interface Props {
  project: Project;
}

export function TerminalProjectGallery({ project }: Props) {
  if (!project.images || project.images.length === 0) return null;

  return (
    <TerminalBlock command="ls -la ./assets | format --viewer" path={`~/projects/${project.slug}`}>
      <div className="flex flex-col gap-8 mt-2">
        {project.images.map((imgUrl, index) => (
          <div key={index} className="border border-green-800 p-1 bg-black">
            <div className="bg-green-900/30 px-2 py-1 text-xs text-green-500 mb-1 flex justify-between">
              <span>assets/viewer_frame_{index}.png</span>
              <span>[Type: IMAGE]</span>
            </div>
            <div className="relative w-full aspect-video bg-gray-900 border border-green-900/50">
              <Image
                src={imgUrl}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover opacity-80 mix-blend-screen"
              />
            </div>
          </div>
        ))}
      </div>
    </TerminalBlock>
  );
}
