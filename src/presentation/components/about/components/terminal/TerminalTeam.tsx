import React from 'react';
import Link from 'next/link';
import { TeamMember } from "@/src/application/repositories/ITeamMemberRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import Image from 'next/image';

interface Props {
  members: TeamMember[];
}

export function TerminalTeam({ members }: Props) {
  if (!members || members.length === 0) return null;

  return (
    <TerminalBlock command="cat /etc/passwd | grep team_core" path="~/about">
      <div className="mt-4 flex flex-col gap-6 font-mono text-sm sm:text-base">
        {members.map((member) => (
          <div key={member.id} className="border border-green-900 bg-black/50 p-4">
            <div className="flex gap-4 items-start sm:items-center border-b border-green-900/50 pb-4 mb-4">
              <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 relative border border-green-500 bg-gray-900 overflow-hidden">
                {member.avatar ? (
                  <Image 
                    src={member.avatar} 
                    alt={member.name}
                    fill
                    className="object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-green-700 font-bold text-2xl">?</div>
                )}
                <div className="absolute inset-0 bg-green-500/10 pointer-events-none"></div>
              </div>
              
              <div className="flex-1">
                <div className="text-amber-400 font-bold text-lg">{member.name.toLowerCase().replace(/\s+/g, '_')}</div>
                <div className="text-green-600">uid=1000({member.name}) gid=1000({member.role})</div>
                <div className="text-gray-500 mt-1">/bin/bash</div>
              </div>
            </div>

            <div className="text-green-300 mb-4 leading-relaxed">
              {member.bio}
            </div>

            {(member.githubUrl || member.linkedinUrl || member.twitterUrl) && (
              <div className="border-t border-green-900/30 pt-3 flex flex-wrap gap-4 text-sm mt-4">
                <span className="text-gray-500">External nodes:</span>
                {member.githubUrl && (
                  <Link href={member.githubUrl} target="_blank" className="text-blue-400 hover:underline">
                    [GitHub]
                  </Link>
                )}
                {member.linkedinUrl && (
                  <Link href={member.linkedinUrl} target="_blank" className="text-blue-400 hover:underline">
                    [LinkedIn]
                  </Link>
                )}
                {member.twitterUrl && (
                  <Link href={member.twitterUrl} target="_blank" className="text-blue-400 hover:underline">
                    [Twitter]
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </TerminalBlock>
  );
}
