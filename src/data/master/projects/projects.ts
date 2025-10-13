import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-featured e-commerce platform with product management, cart, and payment integration.",
    category: "ecommerce",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    featuredImage: "/images/projects/ecommerce-1.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg"
    ],
    client: "Fashion Forward",
    year: 2024,
    isFeatured: true,
    demoUrl: "https://ecommerce.example.com",
    features: [
      "Product catalog with categories and filters",
      "Shopping cart and wishlist",
      "Secure checkout with multiple payment methods",
      "Order tracking and management",
      "Admin dashboard for inventory"
    ],
    content: {
      overview: "A comprehensive e-commerce solution built with modern web technologies to provide a seamless shopping experience.",
      challenge: "The client needed a scalable e-commerce platform that could handle high traffic during sales events while maintaining fast load times.",
      solution: "We implemented a JAMstack architecture with Next.js for server-side rendering, MongoDB for the database, and Vercel for edge caching and global CDN.",
      results: "The platform handles 10,000+ concurrent users with sub-second load times and has increased conversion rates by 35%."
    },
    testimonials: ["testimonial-1", "testimonial-2"]
  },
  {
    id: "project-2",
    title: "Mobile Task Manager",
    slug: "mobile-task-manager",
    description: "A cross-platform mobile application for task management with real-time synchronization.",
    category: "mobile-app",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    featuredImage: "/images/projects/task-manager-1.jpg",
    year: 2024,
    isFeatured: true,
    githubUrl: "https://github.com/yourusername/task-manager",
    features: [
      "Task creation and management",
      "Real-time sync across devices",
      "Offline support",
      "Reminders and notifications"
    ]
  },
  {
    id: "project-3",
    title: "Corporate Website Redesign",
    slug: "corporate-website-redesign",
    description: "Complete redesign of a corporate website with improved UX and performance.",
    category: "web-development",
    technologies: ["Next.js", "Tailwind CSS", "Contentful", "Vercel"],
    featuredImage: "/images/projects/corporate-1.jpg",
    client: "TechCorp Inc.",
    year: 2023,
    isFeatured: true,
    demoUrl: "https://techcorp.example.com",
    features: [
      "Responsive design",
      "Content management system",
      "Blog integration",
      "Contact forms with validation"
    ]
  },
  {
    id: "project-4",
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    description: "Analytics dashboard for a B2B SaaS product with real-time data visualization.",
    category: "saas",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    featuredImage: "/images/projects/saas-dashboard-1.jpg",
    year: 2023,
    isFeatured: false,
    features: [
      "Interactive charts and graphs",
      "User management",
      "Data export functionality",
      "Role-based access control"
    ]
  },
  {
    id: "project-5",
    title: "UI/UX Design System",
    slug: "ui-ux-design-system",
    description: "Comprehensive design system for consistent user interfaces across products.",
    category: "ui-ux",
    technologies: ["Figma", "Storybook", "React", "Styled Components"],
    featuredImage: "/images/projects/design-system-1.jpg",
    year: 2023,
    isFeatured: true,
    features: [
      "Design tokens",
      "Component library",
      "Documentation",
      "Accessibility guidelines"
    ]
  }
] as const;
