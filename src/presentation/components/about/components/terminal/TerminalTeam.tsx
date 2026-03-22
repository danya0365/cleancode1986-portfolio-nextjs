import React from 'react';
import Link from 'next/link';
import { TeamMember } from "@/src/application/repositories/ITeamMemberRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import { TerminalImage } from "@/src/presentation/components/ui/terminal/TerminalImage";

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
              <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 border border-green-500 relative">
                <TerminalImage 
                  src={member.avatar} 
                  alt={member.name} 
                  fallbackText={member.avatar ? "?" : "?"}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-amber-400 font-bold text-lg">{member.name.toLowerCase().replace(/\s+/g, '_')}</span>
                  <span className={`px-2 py-0.5 text-xs font-bold ${member.id === '1' ? 'bg-blue-900 text-blue-300 border border-blue-500' : 'bg-purple-900 text-purple-300 border border-purple-500'}`}>
                    {member.id === "1" ? "HUMAN_OPERATOR" : "AI_DAEMON"}
                  </span>
                </div>
                <div className="text-green-600">uid=1000({member.name}) gid=1000({member.role})</div>
                <div className="text-gray-500 mt-1">/bin/bash</div>
              </div>
            </div>

            <div className="text-green-300 mb-4 leading-relaxed">
              {member.bio}
            </div>

            <div className="border-t border-green-900/30 pt-3 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-4">
              {(member.githubUrl || member.linkedinUrl || member.twitterUrl) ? (
                <div className="flex flex-wrap gap-4 text-sm mt-4 sm:mt-0">
                  <span className="text-gray-500">External nodes:</span>
                  {member.githubUrl && (
                    <Link href={member.githubUrl} target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline">
                      [GitHub]
                    </Link>
                  )}
                  {member.linkedinUrl && (
                    <Link href={member.linkedinUrl} target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline">
                      [LinkedIn]
                    </Link>
                  )}
                  {member.twitterUrl && (
                    <Link href={member.twitterUrl} target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline">
                      [Twitter]
                    </Link>
                  )}
                </div>
              ) : <div />}
              
              {member.hasCV && (
                <Link 
                  href={`/about/cv/${member.id}`} 
                  className="inline-block mt-4 sm:mt-0 bg-green-900/20 text-green-400 font-bold px-4 py-2 text-sm hover:bg-green-500 hover:text-black transition-colors border border-green-500/50"
                >
                  [ EXEC ./extract_cv.sh --id={member.id} ]
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </TerminalBlock>
  );
}
