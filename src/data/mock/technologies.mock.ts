export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "Design";
  description: string;
  proficiencyLevel: number;
  sortOrder: number;
  isActive: boolean;
}

export const MOCK_TECHNOLOGIES: Technology[] = [
  // Frontend
  { id: "1", name: "Next.js", icon: "⚡", category: "Frontend", description: "React Framework", proficiencyLevel: 5, sortOrder: 1, isActive: true },
  { id: "2", name: "React", icon: "⚛️", category: "Frontend", description: "UI Library", proficiencyLevel: 5, sortOrder: 2, isActive: true },
  { id: "3", name: "TypeScript", icon: "📘", category: "Frontend", description: "Type-safe JavaScript", proficiencyLevel: 5, sortOrder: 3, isActive: true },
  { id: "4", name: "Tailwind CSS", icon: "🎨", category: "Frontend", description: "Utility-first CSS", proficiencyLevel: 5, sortOrder: 4, isActive: true },
  
  // Mobile
  { id: "5", name: "React Native", icon: "📱", category: "Mobile", description: "Cross-platform Mobile", proficiencyLevel: 5, sortOrder: 5, isActive: true },
  
  // Backend
  { id: "6", name: "Node.js", icon: "🟢", category: "Backend", description: "JavaScript Runtime", proficiencyLevel: 5, sortOrder: 6, isActive: true },
  { id: "7", name: "NestJS", icon: "🐱", category: "Backend", description: "Progressive Node.js Framework", proficiencyLevel: 5, sortOrder: 7, isActive: true },
  
  // Database
  { id: "8", name: "PostgreSQL", icon: "🐘", category: "Database", description: "Relational Database", proficiencyLevel: 5, sortOrder: 8, isActive: true },
  { id: "9", name: "MongoDB", icon: "🍃", category: "Database", description: "NoSQL Database", proficiencyLevel: 5, sortOrder: 9, isActive: true },
  { id: "10", name: "Supabase", icon: "⚡", category: "Database", description: "Firebase Alternative", proficiencyLevel: 5, sortOrder: 10, isActive: true },
  
  // DevOps
  { id: "11", name: "Docker", icon: "🐳", category: "DevOps", description: "Containerization", proficiencyLevel: 4, sortOrder: 11, isActive: true },
  { id: "12", name: "Vercel", icon: "▲", category: "DevOps", description: "Deployment Platform", proficiencyLevel: 5, sortOrder: 12, isActive: true },
];

export const getTechnologiesByCategory = (category: Technology["category"]): Technology[] => {
  return MOCK_TECHNOLOGIES.filter((tech) => tech.category === category && tech.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
};

export const getAllActiveTechnologies = (): Technology[] => {
  return MOCK_TECHNOLOGIES.filter((tech) => tech.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
};
