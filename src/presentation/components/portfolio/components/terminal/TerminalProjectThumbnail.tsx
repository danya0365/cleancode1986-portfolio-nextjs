import React from 'react';
import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import { TerminalImage } from "@/src/presentation/components/ui/terminal/TerminalImage";

interface Props {
  project: Project;
}

export function TerminalProjectThumbnail({ project }: Props) {
  if (!project.thumbnail) return null;

  return (
    <TerminalBlock command="cat ./hero_image.bin | display" path={`~/projects/${project.slug}`}>
      <div className="mt-2 border border-green-800 p-1 bg-black">
        <div className="bg-green-900/30 px-2 py-1 text-xs text-green-500 mb-1 flex justify-between">
          <span>hero_image.bin</span>
          <span>[Type: IMAGE/PRIMARY]</span>
        </div>
        <div className="relative w-full aspect-video sm:aspect-[21/9] bg-gray-900 border border-green-900/50">
          <TerminalImage
            src={project.thumbnail}
            alt={`${project.title} hero thumbnail`}
            fallbackText="IMG_ERR [HERO_UNAVAILABLE]"
          />
        </div>
      </div>
    </TerminalBlock>
  );
}
