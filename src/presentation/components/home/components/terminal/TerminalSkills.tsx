import { Technology } from "@/src/application/repositories/ITechnologyRepository";
import { TerminalBlock } from "@/src/presentation/components/ui/terminal/TerminalBlock";

export function TerminalSkills({ technologies }: { technologies: Technology[] }) {
  // Group technologies by category
  const categorized = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <TerminalBlock command="cat /etc/core-dependencies.json">
      <div className="text-blue-300 bg-gray-900 border border-gray-800 p-4 rounded whitespace-pre">
{`{
  "system": "Clean Code 1986",
  "dependencies": {`}
        {Object.entries(categorized).map(([category, techs], index, array) => (
  `
    "${category.toLowerCase()}": [
${techs.map((t) => `      "${t.name}"`).join(",\n")}
    ]${index < array.length - 1 ? ',' : ''}`
        ))}
{`
  }
}`}
      </div>
    </TerminalBlock>
  );
}
