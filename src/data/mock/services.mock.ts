export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricingInfo?: string;
  sortOrder: number;
  isActive: boolean;
}

export const MOCK_SERVICES: Service[] = [
  {
    id: "1",
    title: "พัฒนาเว็บไซต์",
    description:
      "ใช้ AI สร้างเว็บไซต์ทันสมัย รวดเร็ว SEO-friendly ด้วย Next.js + Clean Architecture — ส่งมอบเร็ว ราคาดี",
    icon: "💻",
    category: "Web Development",
    features: [
      "AI Code Generation + Quality Check",
      "Clean Architecture ทุกโปรเจค",
      "Responsive Design ทุกหน้าจอ",
      "SEO Optimization",
      "Performance Optimization",
    ],
    pricingInfo: "เริ่มต้น 9,900 บาท",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "2",
    title: "พัฒนาแอปพลิเคชันมือถือ",
    description:
      "ใช้ AI + React Native สร้างแอป iOS & Android ในโค้ดเดียว — ลดต้นทุน ส่งมอบเร็วกว่าเดิม",
    icon: "📱",
    category: "Mobile Development",
    features: [
      "AI-Powered Development",
      "Cross-platform (iOS & Android)",
      "Clean Architecture + Offline Support",
      "Push Notifications",
      "App Store Submission",
    ],
    pricingInfo: "เริ่มต้น 19,900 บาท",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "3",
    title: "ออกแบบ UI/UX",
    description:
      "ใช้ AI ช่วยออกแบบ UI/UX ที่สวยงาม ใช้งานง่าย เพิ่ม Conversion — ได้ Design System พร้อมใช้",
    icon: "🎨",
    category: "UI/UX Design",
    features: [
      "AI-Assisted Design",
      "Wireframing & Prototyping",
      "Visual Design + Design System",
      "User Research & Analysis",
      "Usability Testing",
    ],
    pricingInfo: "เริ่มต้น 5,900 บาท",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "4",
    title: "พัฒนา Backend & API",
    description:
      "ใช้ AI สร้าง Backend ที่มั่นคง ปลอดภัย Scalable ด้วย NestJS + Clean Architecture — Auto-generated API Docs",
    icon: "⚙️",
    category: "Backend Development",
    features: [
      "AI Code Generation + Testing",
      "Clean Architecture Pattern",
      "RESTful API / GraphQL",
      "Authentication & Authorization",
      "Auto API Documentation",
    ],
    pricingInfo: "เริ่มต้น 15,900 บาท",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "5",
    title: "E-Commerce Solutions",
    description:
      "ใช้ AI สร้างร้านค้าออนไลน์ครบวงจร ระบบชำระเงิน + หลังบ้าน — ราคาดีกว่าจ้างทีมทำเอง",
    icon: "🛒",
    category: "E-Commerce",
    features: [
      "AI-Powered Development",
      "Shopping Cart & Payment Gateway",
      "Product & Order Management",
      "Admin Dashboard",
      "Clean Architecture + Scalable",
    ],
    pricingInfo: "เริ่มต้น 25,900 บาท",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "6",
    title: "Full-Stack Development",
    description:
      "ใช้ AI พัฒนาระบบครบวงจร Frontend + Backend + Database — Clean Architecture ทุกชั้น ส่งมอบเร็ว",
    icon: "🚀",
    category: "Full-Stack Development",
    features: [
      "AI End-to-end Development",
      "Clean Architecture ทุกชั้น",
      "Frontend & Backend & Database",
      "DevOps & Deployment",
      "AI-Generated Documentation",
    ],
    pricingInfo: "เริ่มต้น 35,900 บาท",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "7",
    title: "Technical Consulting",
    description:
      "ใช้ AI วิเคราะห์ + ให้คำปรึกษา Architecture Design, Code Review — แก้ปัญหาเร็วกว่าเดิม",
    icon: "💡",
    category: "Consulting",
    features: [
      "AI-Assisted Architecture Review",
      "Code Review & Refactoring",
      "Performance Optimization",
      "Technology Stack Selection",
      "Team Training + AI Workflow",
    ],
    pricingInfo: "ชั่วโมงละ 1,500 บาท",
    sortOrder: 7,
    isActive: true,
  },
  {
    id: "8",
    title: "Maintenance & Support",
    description:
      "ใช้ AI ดูแลระบบ แก้บัค อัปเดต Security + เพิ่มฟีเจอร์ใหม่ — ประหยัดค่าดูแลรายเดือน",
    icon: "🛠️",
    category: "Maintenance",
    features: [
      "AI-Powered Bug Detection",
      "Security Updates",
      "Feature Updates",
      "Performance Monitoring",
      "AI-Generated Changelog",
    ],
    pricingInfo: "เริ่มต้น 5,900 บาท/เดือน",
    sortOrder: 8,
    isActive: true,
  },
];

export const getActiveServices = (): Service[] => {
  return MOCK_SERVICES.filter((service) => service.isActive).sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );
};

export const getServicesByCategory = (category: string): Service[] => {
  return MOCK_SERVICES.filter((service) => service.category === category);
};
