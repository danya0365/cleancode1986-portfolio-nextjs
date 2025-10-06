export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "UI/UX" | "Full-stack";
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  features: { title: string; description: string; image?: string }[];
  client?: string;
  projectDate: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  status: "draft" | "published" | "archived";
  viewCount: number;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform สำหรับแบรนด์แฟชั่น",
    category: "Web",
    description:
      "แพลตฟอร์มอีคอมเมิร์ซที่ทันสมัย พร้อมระบบจัดการสินค้า ตะกร้า และชำระเงิน รองรับ SEO และโหลดเร็ว",
    thumbnail: "/images/projects/ecommerce-thumb.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    features: [
      {
        title: "ระบบจัดการสินค้า",
        description: "จัดการสินค้า หมวดหมู่ และสต็อกได้ง่าย",
      },
      {
        title: "ระบบชำระเงิน",
        description: "รองรับหลายช่องทาง ปลอดภัยด้วย Stripe",
      },
      {
        title: "SEO Optimized",
        description: "โหลดเร็ว SEO ดี ติดอันดับง่าย",
      },
    ],
    client: "Fashion Brand X",
    projectDate: "2024-12-01",
    liveUrl: "https://example.com",
    isFeatured: true,
    status: "published",
    viewCount: 342,
  },
  {
    id: "2",
    slug: "food-delivery-app",
    title: "แอปสั่งอาหาร Real-time",
    category: "Mobile",
    description:
      "แอปสั่งอาหารพร้อมระบบ Real-time tracking, Push notification และระบบรีวิว",
    thumbnail: "/images/projects/food-app-thumb.jpg",
    images: [
      "/images/projects/food-app-1.jpg",
      "/images/projects/food-app-2.jpg",
      "/images/projects/food-app-3.jpg",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Google Maps API"],
    features: [
      {
        title: "Real-time Tracking",
        description: "ติดตามคนส่งแบบ Real-time",
      },
      {
        title: "Push Notifications",
        description: "แจ้งเตือนทุกสถานะออเดอร์",
      },
      {
        title: "ระบบรีวิว",
        description: "ให้คะแนนและรีวิวร้านอาหาร",
      },
    ],
    client: "Food Delivery Co.",
    projectDate: "2024-11-15",
    githubUrl: "https://github.com/example/food-app",
    isFeatured: true,
    status: "published",
    viewCount: 521,
  },
  {
    id: "3",
    slug: "fintech-dashboard",
    title: "แดชบอร์ดจัดการการเงิน Fintech",
    category: "Web",
    description:
      "ระบบแดชบอร์ดสำหรับจัดการการเงิน พร้อมกราฟ Real-time และระบบรายงาน",
    thumbnail: "/images/projects/fintech-thumb.jpg",
    images: [
      "/images/projects/fintech-1.jpg",
      "/images/projects/fintech-2.jpg",
    ],
    technologies: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
    features: [
      {
        title: "กราฟ Real-time",
        description: "แสดงข้อมูลการเงินแบบ Real-time",
      },
      {
        title: "ระบบรายงาน",
        description: "สร้างรายงานและ Export ได้",
      },
      {
        title: "Multi-user",
        description: "รองรับหลายบัญชีผู้ใช้",
      },
    ],
    client: "Fintech Startup",
    projectDate: "2024-10-20",
    liveUrl: "https://example-fintech.com",
    isFeatured: true,
    status: "published",
    viewCount: 287,
  },
  {
    id: "4",
    slug: "hotel-booking-system",
    title: "ระบบจองโรงแรม",
    category: "Full-stack",
    description:
      "ระบบจองห้องพักโรงแรมออนไลน์ พร้อมระบบจัดการห้อง ราคา และการชำระเงิน",
    thumbnail: "/images/projects/hotel-thumb.jpg",
    images: ["/images/projects/hotel-1.jpg", "/images/projects/hotel-2.jpg"],
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "จองห้องออนไลน์",
        description: "เลือกห้อง เลือกวันได้ง่าย",
      },
      {
        title: "จัดการราคา",
        description: "ตั้งราคาตามฤดูกาลได้",
      },
      {
        title: "ชำระเงินปลอดภัย",
        description: "รองรับบัตรเครดิต QR Code",
      },
    ],
    client: "Boutique Hotel Chain",
    projectDate: "2024-09-10",
    liveUrl: "https://example-hotel.com",
    isFeatured: false,
    status: "published",
    viewCount: 198,
  },
  {
    id: "5",
    slug: "fitness-tracking-app",
    title: "แอปติดตามการออกกำลังกาย",
    category: "Mobile",
    description:
      "แอปบันทึกการออกกำลังกาย พร้อมสถิติ กราฟ และระบบ Goal setting",
    thumbnail: "/images/projects/fitness-thumb.jpg",
    images: [
      "/images/projects/fitness-1.jpg",
      "/images/projects/fitness-2.jpg",
    ],
    technologies: ["React Native", "TypeScript", "Supabase", "Chart.js"],
    features: [
      {
        title: "บันทึกการออกกำลัง",
        description: "บันทึกท่า เวลา และแคลอรี่",
      },
      {
        title: "สถิติและกราฟ",
        description: "ดูความก้าวหน้าแบบกราฟ",
      },
      {
        title: "ตั้งเป้าหมาย",
        description: "ตั้งเป้าและติดตามผล",
      },
    ],
    projectDate: "2024-08-05",
    githubUrl: "https://github.com/example/fitness-app",
    isFeatured: false,
    status: "published",
    viewCount: 412,
  },
  {
    id: "6",
    slug: "learning-management-system",
    title: "ระบบจัดการเรียนการสอนออนไลน์",
    category: "Web",
    description:
      "LMS สำหรับสถาบันการศึกษา พร้อมระบบวิดีโอ แบบทดสอบ และติดตามผลการเรียน",
    thumbnail: "/images/projects/lms-thumb.jpg",
    images: ["/images/projects/lms-1.jpg", "/images/projects/lms-2.jpg"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Mux",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "วิดีโอบทเรียน",
        description: "อัพโหลดและเล่นวิดีโอได้ลื่น",
      },
      {
        title: "แบบทดสอบ",
        description: "สร้างข้อสอบและตรวจอัตโนมัติ",
      },
      {
        title: "ติดตามความก้าวหน้า",
        description: "ดูผลการเรียนแบบ Real-time",
      },
    ],
    client: "Education Institute",
    projectDate: "2024-07-15",
    liveUrl: "https://example-lms.com",
    isFeatured: true,
    status: "published",
    viewCount: 634,
  },
  {
    id: "7",
    slug: "social-media-analytics",
    title: "แดชบอร์ดวิเคราะห์ Social Media",
    category: "Web",
    description:
      "เครื่องมือวิเคราะห์ Social Media หลายแพลตฟอร์ม พร้อมรายงานและกราฟ",
    thumbnail: "/images/projects/social-analytics-thumb.jpg",
    images: [
      "/images/projects/social-analytics-1.jpg",
      "/images/projects/social-analytics-2.jpg",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Chart.js",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "เชื่อมต่อหลายแพลตฟอร์ม",
        description: "Facebook, Instagram, Twitter, LinkedIn",
      },
      {
        title: "กราฟและรายงาน",
        description: "วิเคราะห์ Engagement, Reach, Conversion",
      },
      {
        title: "Schedule Posts",
        description: "จัดตารางโพสต์ล่วงหน้า",
      },
    ],
    client: "Digital Marketing Agency",
    projectDate: "2024-06-20",
    isFeatured: false,
    status: "published",
    viewCount: 156,
  },
  {
    id: "8",
    slug: "restaurant-pos-system",
    title: "ระบบ POS สำหรับร้านอาหาร",
    category: "Full-stack",
    description:
      "ระบบขายหน้าร้านสำหรับร้านอาหาร พร้อมระบบออเดอร์ ครัว และรายงาน",
    thumbnail: "/images/projects/pos-thumb.jpg",
    images: ["/images/projects/pos-1.jpg", "/images/projects/pos-2.jpg"],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      {
        title: "รับออเดอร์ง่าย",
        description: "UI ใช้งานง่าย รวดเร็ว",
      },
      {
        title: "ระบบครัว (KDS)",
        description: "แสดงออเดอร์ให้ครัวแบบ Real-time",
      },
      {
        title: "รายงานขาย",
        description: "สรุปยอดขายรายวัน รายเดือน",
      },
    ],
    client: "Restaurant Chain",
    projectDate: "2024-05-10",
    liveUrl: "https://example-pos.com",
    isFeatured: false,
    status: "published",
    viewCount: 243,
  },
  {
    id: "9",
    slug: "property-listing-app",
    title: "แอปค้นหาอสังหาริมทรัพย์",
    category: "Mobile",
    description:
      "แอปหาบ้าน คอนโด ที่ดิน พร้อม Map, Filter และระบบนัดชมบ้าน",
    thumbnail: "/images/projects/property-thumb.jpg",
    images: [
      "/images/projects/property-1.jpg",
      "/images/projects/property-2.jpg",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Google Maps API",
    ],
    features: [
      {
        title: "ค้นหาด้วยแผนที่",
        description: "ดูทำเลบนแผนที่",
      },
      {
        title: "Filter ละเอียด",
        description: "กรองราคา ขนาด สิ่งอำนวยความสะดวก",
      },
      {
        title: "นัดชมบ้าน",
        description: "จองนัดชมได้ในแอป",
      },
    ],
    projectDate: "2024-04-05",
    isFeatured: false,
    status: "published",
    viewCount: 389,
  },
  {
    id: "10",
    slug: "event-management-platform",
    title: "แพลตฟอร์มจัดการอีเว้นท์",
    category: "Web",
    description:
      "ระบบจัดการอีเว้นท์ พร้อมขายตั๋ว Check-in และระบบรายงาน",
    thumbnail: "/images/projects/event-thumb.jpg",
    images: ["/images/projects/event-1.jpg", "/images/projects/event-2.jpg"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "QR Code",
    ],
    features: [
      {
        title: "ขายตั๋วออนไลน์",
        description: "ขายตั๋วและรับเงินได้ทันที",
      },
      {
        title: "QR Code Check-in",
        description: "สแกน QR เข้างานได้",
      },
      {
        title: "รายงานผู้เข้าร่วม",
        description: "ดูสถิติผู้เข้าร่วมแบบ Real-time",
      },
    ],
    client: "Event Organizer",
    projectDate: "2024-03-12",
    liveUrl: "https://example-events.com",
    isFeatured: true,
    status: "published",
    viewCount: 567,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return MOCK_PROJECTS.filter((project) => project.isFeatured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return MOCK_PROJECTS.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return MOCK_PROJECTS.filter((project) => project.category === category);
};
