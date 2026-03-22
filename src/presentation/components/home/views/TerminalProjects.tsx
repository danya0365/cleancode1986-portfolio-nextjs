import { Project } from "@/src/application/repositories/IProjectRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";
import Link from "next/link";

export function TerminalProjects({ projects }: { projects: Project[] }) {
  return (
    <TerminalBlock command="ls -al ./projects/featured">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-green-800 text-green-600">
              <th className="py-1 pr-4 font-normal">Permissions</th>
              <th className="py-1 pr-4 font-normal">Category</th>
              <th className="py-1 pr-4 font-normal">Size</th>
              <th className="py-1 pr-4 font-normal">Date</th>
              <th className="py-1 font-normal">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 pr-4 whitespace-nowrap">drwxr-xr-x</td>
              <td className="py-1 pr-4 whitespace-nowrap text-green-600">dir</td>
              <td className="py-1 pr-4 whitespace-nowrap">4096</td>
              <td className="py-1 pr-4 whitespace-nowrap">Jan  1 00:00</td>
              <td className="py-1 text-blue-400">.</td>
            </tr>
            <tr>
              <td className="py-1 pr-4 whitespace-nowrap">drwxr-xr-x</td>
              <td className="py-1 pr-4 whitespace-nowrap text-green-600">dir</td>
              <td className="py-1 pr-4 whitespace-nowrap">4096</td>
              <td className="py-1 pr-4 whitespace-nowrap">Jan  1 00:00</td>
              <td className="py-1 text-blue-400">..</td>
            </tr>
            {projects.map((project, idx) => {
              const date = new Date(project.projectDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              const size = (project.title.length * 1024 + 4096).toString();
              return (
                <tr key={project.id} className="hover:bg-green-900/30 transition-colors">
                  <td className="py-1 pr-4 whitespace-nowrap">-rw-r--r--</td>
                  <td className="py-1 pr-4 whitespace-nowrap">{project.category}</td>
                  <td className="py-1 pr-4 whitespace-nowrap">{size}</td>
                  <td className="py-1 pr-4 whitespace-nowrap">{date}</td>
                  <td className="py-1">
                    <Link href={`/portfolio/${project.slug}`} className="text-amber-400 hover:text-amber-300 hover:underline">
                      {project.title.replace(/\s+/g, '_').toLowerCase()}.exe
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="mt-2 text-green-600">Type &apos;./[filename].exe&apos; (or click) to execute project viewer.</p>
    </TerminalBlock>
  );
}
