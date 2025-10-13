export type ProjectCategory = 
  | 'web-development' 
  | 'mobile-app' 
  | 'ecommerce' 
  | 'saas' 
  | 'ui-ux';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  featuredImage: string;
  images?: string[];
  client?: string;
  year: number;
  isFeatured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  content?: {
    overview: string;
    challenge: string;
    solution: string;
    results: string;
  };
  features?: string[];
  testimonials?: string[]; // IDs of related testimonials
}
