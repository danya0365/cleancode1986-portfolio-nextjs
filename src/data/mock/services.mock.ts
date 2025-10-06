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
      "สร้างเว็บไซต์ที่ทันสมัย รวดเร็ว และ SEO-friendly ด้วย Next.js, React และเทคโนโลยีล่าสุด",
    icon: "💻",
    category: "Web Development",
    features: [
      "Responsive Design ทุกหน้าจอ",
      "SEO Optimization",
      "Performance Optimization",
      "Modern UI/UX",
      "Scalable Architecture",
    ],
    pricingInfo: "เริ่มต้น 30,000 บาท",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "2",
    title: "พัฒนาแอปพลิเคชันมือถือ",
    description:
      "สร้างแอปมือถือ iOS และ Android ด้วย React Native รองรับทั้ง 2 แพลตฟอร์มในโค้ดเดียว",
    icon: "📱",
    category: "Mobile Development",
    features: [
      "Cross-platform (iOS & Android)",
      "Native Performance",
      "Offline Support",
      "Push Notifications",
      "App Store Submission",
    ],
    pricingInfo: "เริ่มต้น 50,000 บาท",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "3",
    title: "ออกแบบ UI/UX",
    description:
      "ออกแบบ User Interface และ User Experience ที่สวยงาม ใช้งานง่าย และเพิ่ม Conversion",
    icon: "🎨",
    category: "UI/UX Design",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design System",
      "Usability Testing",
    ],
    pricingInfo: "เริ่มต้น 20,000 บาท",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "4",
    title: "พัฒนา Backend & API",
    description:
      "สร้าง Backend ที่มั่นคง ปลอดภัย และ Scalable ด้วย Node.js, NestJS และ Database ที่เหมาะสม",
    icon: "⚙️",
    category: "Backend Development",
    features: [
      "RESTful API / GraphQL",
      "Database Design",
      "Authentication & Authorization",
      "Microservices Architecture",
      "API Documentation",
    ],
    pricingInfo: "เริ่มต้น 40,000 บาท",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "5",
    title: "E-Commerce Solutions",
    description:
      "สร้างร้านค้าออนไลน์ครบวงจร พร้อมระบบชำระเงิน จัดการสินค้า และระบบหลังบ้าน",
    icon: "🛒",
    category: "E-Commerce",
    features: [
      "Product Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management",
      "Admin Dashboard",
    ],
    pricingInfo: "เริ่มต้น 60,000 บาท",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "6",
    title: "Full-Stack Development",
    description:
      "พัฒนาระบบแบบครบวงจร ทั้ง Frontend, Backend และ Database ในโปรเจคเดียว",
    icon: "🚀",
    category: "Full-Stack Development",
    features: [
      "End-to-end Development",
      "Frontend & Backend",
      "Database Design",
      "DevOps & Deployment",
      "Maintenance & Support",
    ],
    pricingInfo: "เริ่มต้น 80,000 บาท",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "7",
    title: "Technical Consulting",
    description:
      "ให้คำปรึกษาด้านเทคนิค Architecture Design, Code Review และแก้ปัญหาทางเทคนิค",
    icon: "💡",
    category: "Consulting",
    features: [
      "Architecture Review",
      "Code Review & Refactoring",
      "Performance Optimization",
      "Technology Stack Selection",
      "Team Training",
    ],
    pricingInfo: "ชั่วโมงละ 2,000 บาท",
    sortOrder: 7,
    isActive: true,
  },
  {
    id: "8",
    title: "Maintenance & Support",
    description:
      "บริการดูแลและอัพเดทระบบ แก้ไขบัค และเพิ่มฟีเจอร์ใหม่",
    icon: "🛠️",
    category: "Maintenance",
    features: [
      "Bug Fixes",
      "Security Updates",
      "Feature Updates",
      "Performance Monitoring",
      "24/7 Support (Premium)",
    ],
    pricingInfo: "เริ่มต้น 10,000 บาท/เดือน",
    sortOrder: 8,
    isActive: true,
  },
];

export const getActiveServices = (): Service[] => {
  return MOCK_SERVICES.filter((service) => service.isActive).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
};

export const getServicesByCategory = (category: string): Service[] => {
  return MOCK_SERVICES.filter((service) => service.category === category);
};
