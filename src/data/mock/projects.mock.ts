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
  displayOrder: number;
  isCleanCode: boolean;
  isMock: boolean;
  isFuture: boolean;
}

// Mock Projects - โปรเจคตัวอย่างที่รับทำ
const MOCK_PROJECTS: Project[] = [
  {
    id: "1001",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform สำหรับแบรนด์แฟชั่น",
    category: "Web",
    displayOrder: 1001,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
    description:
      "แพลตฟอร์มอีคอมเมิร์ซที่ทันสมัย พร้อมระบบจัดการสินค้า ตะกร้า และชำระเงิน รองรับ SEO และโหลดเร็ว",
    thumbnail: "/images/projects/ecommerce-thumb.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Supabase",
    ],
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
    id: "1002",
    slug: "food-delivery-app",
    title: "แอปสั่งอาหาร Real-time",
    category: "Mobile",
    displayOrder: 1002,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
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
    id: "1003",
    slug: "fintech-dashboard",
    title: "แดชบอร์ดจัดการการเงิน Fintech",
    category: "Web",
    displayOrder: 1003,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
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
    id: "1004",
    slug: "hotel-booking-system",
    title: "ระบบจองโรงแรม",
    category: "Full-stack",
    displayOrder: 1004,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
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
    id: "1005",
    slug: "fitness-tracking-app",
    title: "แอปติดตามการออกกำลังกาย",
    category: "Mobile",
    displayOrder: 1005,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
    description: "แอปบันทึกการออกกำลังกาย พร้อมสถิติ กราฟ และระบบ Goal setting",
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
    id: "1006",
    slug: "learning-management-system",
    title: "ระบบจัดการเรียนการสอนออนไลน์",
    category: "Web",
    displayOrder: 1006,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
    description:
      "LMS สำหรับสถาบันการศึกษา พร้อมระบบวิดีโอ แบบทดสอบ และติดตามผลการเรียน",
    thumbnail: "/images/projects/lms-thumb.jpg",
    images: ["/images/projects/lms-1.jpg", "/images/projects/lms-2.jpg"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Mux", "Tailwind CSS"],
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
    id: "1007",
    slug: "social-media-analytics",
    title: "แดชบอร์ดวิเคราะห์ Social Media",
    category: "Web",
    displayOrder: 1007,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
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
    id: "1008",
    slug: "restaurant-pos-system",
    title: "ระบบ POS สำหรับร้านอาหาร",
    category: "Full-stack",
    displayOrder: 1008,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
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
    id: "1009",
    slug: "property-listing-app",
    title: "แอปค้นหาอสังหาริมทรัพย์",
    category: "Mobile",
    displayOrder: 1009,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
    description: "แอปหาบ้าน คอนโด ที่ดิน พร้อม Map, Filter และระบบนัดชมบ้าน",
    thumbnail: "/images/projects/property-thumb.jpg",
    images: [
      "/images/projects/property-1.jpg",
      "/images/projects/property-2.jpg",
    ],
    technologies: ["React Native", "TypeScript", "Supabase", "Google Maps API"],
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
    id: "1010",
    slug: "event-management-platform",
    title: "แพลตฟอร์มจัดการอีเว้นท์",
    category: "Web",
    displayOrder: 1010,
    isCleanCode: false,
    isMock: true,
    isFuture: false,
    description: "ระบบจัดการอีเว้นท์ พร้อมขายตั๋ว Check-in และระบบรายงาน",
    thumbnail: "/images/projects/event-thumb.jpg",
    images: ["/images/projects/event-1.jpg", "/images/projects/event-2.jpg"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "QR Code"],
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

// Clean Code Projects - โปรเจคจริงที่ทำแล้ว
const CLEAN_CODE_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "al-quran-web-app",
    title: "Al-Quran Web Application - แอปอ่านอัลกุรอานออนไลน์",
    category: "Web",
    displayOrder: 1,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แอปพลิเคชันอ่านอัลกุรอานบนเว็บที่ทันสมัย พร้อมฟีเจอร์ครบครัน รองรับหลายภาษา มี Tajweed และเสียงอ่านจาก Qari ชื่อดัง ออกแบบมาเพื่อประสบการณ์การอ่านที่ดีที่สุด",
    thumbnail: "/images/projects/alquran-thumb.jpg",
    images: [
      "/images/projects/alquran-1.jpg",
      "/images/projects/alquran-2.jpg",
      "/images/projects/alquran-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Zustand",
      "Tailwind CSS 4",
      "Axios",
      "LocalForage",
    ],
    features: [
      {
        title: "114 ซูเราะห์ครบถ้วน",
        description:
          "รายการซูเราะห์ทั้งหมด 114 บท พร้อมชื่อภาษาอังกฤษ อาหรับ ประเภท และจำนวนอายะห์",
      },
      {
        title: "อ่านสะดวก ปรับแต่งได้",
        description:
          "ตัวอักษรอาหรับสวยงาม ปรับฟอนต์และขนาดได้ มี Tajweed และคำแปลหลายภาษา",
      },
      {
        title: "เสียงอ่านคุณภาพสูง",
        description:
          "เล่นเสียงอ่านรายอายะห์จาก Qari ชื่อดังหลายท่าน พร้อมระบบควบคุมเสียงที่ลื่นไหล",
      },
      {
        title: "บุ๊กมาร์กและค้นหา",
        description:
          "เซฟอายะห์ที่ชอบ ค้นหาซูเราะห์ได้รวดเร็ว พร้อม Dark Mode สบายตา",
      },
      {
        title: "SEO Optimized",
        description:
          "ใช้ Server Components ของ Next.js 15 เพื่อ SEO ที่ดีและโหลดเร็ว",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างโค้ดที่เป็นระเบียบ แยก layers ชัดเจน บำรุงรักษาง่าย",
      },
    ],
    projectDate: "2025-01-15",
    liveUrl: "https://al-quaran-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/al-quaran-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 1247,
  },
  {
    id: "2",
    slug: "prayer-times-app",
    title: "Prayer Times - แอปเวลาละหมาดอัตโนมัติ",
    category: "Web",
    displayOrder: 2,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แอปพลิเคชันแสดงเวลาละหมาดอัตโนมัติตามตำแหน่งที่ตั้ง พร้อมการแจ้งเตือน Qibla Direction และปฏิทินอิสลาม ใช้ library Adhan ที่แม่นยำ",
    thumbnail: "/images/projects/prayer-times-thumb.jpg",
    images: [
      "/images/projects/prayer-times-1.jpg",
      "/images/projects/prayer-times-2.jpg",
      "/images/projects/prayer-times-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Adhan.js",
      "Zustand",
      "Tailwind CSS 4",
      "date-fns",
      "Lucide Icons",
      "LocalForage",
    ],
    features: [
      {
        title: "เวลาละหมาดอัตโนมัติ",
        description:
          "คำนวณเวลาละหมาดตามตำแหน่ง GPS แบบอัตโนมัติด้วย Adhan library ที่แม่นยำ",
      },
      {
        title: "หลากหลาย Calculation Methods",
        description:
          "รองรับวิธีคำนวณหลายแบบ เช่น Muslim World League, ISNA, Umm al-Qura",
      },
      {
        title: "Qibla Direction",
        description: "แสดงทิศกิบลัตที่ถูกต้องจากตำแหน่งปัจจุบัน",
      },
      {
        title: "ปฏิทินอิสลาม",
        description: "แสดงวันที่ฮิจเราะห์พร้อมข้อมูลเดือนรอมฎอน",
      },
      {
        title: "Dark Mode & Responsive",
        description: "สลับโหมดกลางคืน/กลางวันได้ รองรับทุกขนาดหน้าจอ",
      },
      {
        title: "Offline Support",
        description: "เก็บข้อมูลไว้ใช้งานแบบ offline ด้วย LocalForage",
      },
    ],
    projectDate: "2025-01-10",
    liveUrl: "https://prayer-time-nine.vercel.app/",
    githubUrl: "https://github.com/danya0365/prayer-time",
    isFeatured: true,
    status: "published",
    viewCount: 892,
  },
  {
    id: "3",
    slug: "slack-clone",
    title: "Slack Clone - Real-time Team Collaboration",
    category: "Full-stack",
    displayOrder: 13,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มสื่อสารทีมแบบ Real-time คล้าย Slack พร้อม Workspace, Channels, Direct Messages และการแชร์ไฟล์ ใช้ Supabase สำหรับ Backend",
    thumbnail: "/images/projects/slack-thumb.jpg",
    images: [
      "/images/projects/slack-1.jpg",
      "/images/projects/slack-2.jpg",
      "/images/projects/slack-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Supabase",
      "Zustand",
      "Tailwind CSS 4",
      "SendGrid",
      "Mailchimp",
    ],
    features: [
      {
        title: "Workspace & Channels",
        description:
          "สร้าง Workspace และ Channels ได้ไม่จำกัด จัดการสมาชิกและสิทธิ์ได้ละเอียด",
      },
      {
        title: "Real-time Messaging",
        description:
          "ส่งข้อความแบบ Real-time ด้วย Supabase Realtime พร้อม Typing indicator",
      },
      {
        title: "Direct Messages",
        description: "ส่งข้อความส่วนตัวระหว่างสมาชิก 1-on-1 หรือกลุ่มเล็ก",
      },
      {
        title: "Authentication & Authorization",
        description:
          "ระบบ Auth ที่ปลอดภัยด้วย Supabase Auth พร้อม Role-based access",
      },
      {
        title: "Email Notifications",
        description: "แจ้งเตือนผ่านอีเมลด้วย SendGrid เมื่อมีข้อความใหม่",
      },
      {
        title: "Clean Architecture",
        description: "โครงสร้างตาม Clean Architecture และ SOLID principles",
      },
    ],
    client: "Internal Tool",
    projectDate: "2025-01-05",
    liveUrl: "https://slack-clone-nextjs-theta.vercel.app/",
    githubUrl: "https://github.com/danya0365/slack-clone-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 1563,
  },
  {
    id: "4",
    slug: "soc-tact-social-platform",
    title: "Soc-Tact - Social Networking Platform",
    category: "Full-stack",
    displayOrder: 4,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มโซเชียลเน็ตเวิร์คที่ทันสมัย พร้อมฟีเจอร์โพสต์ แชร์ ไลค์ คอมเมนต์ และระบบเพื่อน รองรับ Real-time updates",
    thumbnail: "/images/projects/soctact-thumb.jpg",
    images: [
      "/images/projects/soctact-1.jpg",
      "/images/projects/soctact-2.jpg",
      "/images/projects/soctact-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "Axios",
    ],
    features: [
      {
        title: "Social Feed",
        description: "โพสต์ข้อความ รูปภาพ แชร์ และโต้ตอบกับโพสต์ของเพื่อน",
      },
      {
        title: "Friend System",
        description:
          "ระบบเพื่อน ส่งคำขอเพื่อน ยอมรับ/ปฏิเสธ และดูโปรไฟล์เพื่อน",
      },
      {
        title: "Real-time Notifications",
        description: "แจ้งเตือนแบบ Real-time เมื่อมีการโต้ตอบ",
      },
      {
        title: "Form Validation",
        description:
          "ใช้ React Hook Form + Zod สำหรับ Form ที่แข็งแรงและ Type-safe",
      },
      {
        title: "Print Support",
        description: "พิมพ์โพสต์หรือข้อมูลได้ด้วย react-to-print",
      },
      {
        title: "Dark Mode",
        description: "สลับโหมดสีได้ พร้อม Theme persistence",
      },
    ],
    projectDate: "2024-12-20",
    liveUrl: "https://soc-tact-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/soc-tact-nextjs",
    isFeatured: false,
    status: "published",
    viewCount: 674,
  },
  {
    id: "5",
    slug: "dragon-quest-interactive-story",
    title: "Dragon Quest XI - Interactive Story Experience",
    category: "Web",
    displayOrder: 5,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แอปพลิเคชันเล่าเรื่องแบบ Interactive จาก Dragon Quest XI ผู้เล่นสามารถเลือกทางเดินของเรื่องราวได้ พร้อมระบบเซฟความคืบหน้า",
    thumbnail: "/images/projects/dragon-quest-thumb.jpg",
    images: [
      "/images/projects/dragon-quest-1.jpg",
      "/images/projects/dragon-quest-2.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Supabase",
      "Zustand",
      "Tailwind CSS 4",
    ],
    features: [
      {
        title: "Interactive Storytelling",
        description:
          "เล่าเรื่องแบบ Interactive ผู้เล่นเลือกทางเดินของเรื่องได้",
      },
      {
        title: "Progress Tracking",
        description: "ระบบเซฟความคืบหน้า ดูประวัติตัวเลือกที่เคยเลือก",
      },
      {
        title: "Character Profiles",
        description: "ดูข้อมูลตัวละคร พื้นหลัง และความสัมพันธ์",
      },
      {
        title: "Beautiful UI",
        description: "ดีไซน์สวยงามสไตล์เกม RPG พร้อมแอนิเมชัน",
      },
      {
        title: "Responsive Design",
        description: "เล่นได้ทั้งมือถือและคอมพิวเตอร์",
      },
    ],
    projectDate: "2024-12-15",
    githubUrl:
      "https://github.com/danya0365/simple-dragon-quest-xi-interactive-story-web-application",
    isFeatured: false,
    status: "published",
    viewCount: 432,
  },
  {
    id: "16",
    slug: "shop-queue-management",
    title: "Shop Queue - ระบบจัดการคิวร้านค้า",
    category: "Full-stack",
    displayOrder: 6,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "ระบบจัดการคิวสำหรับร้านค้า คลินิก ศูนย์บริการ พร้อม QR Code Check-in, Dashboard สำหรับเจ้าหน้าที่ และหน้าจอแสดงคิวสำหรับลูกค้า",
    thumbnail: "/images/projects/shop-queue-thumb.jpg",
    images: [
      "/images/projects/shop-queue-1.jpg",
      "/images/projects/shop-queue-2.jpg",
      "/images/projects/shop-queue-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "next-qrcode",
      "Lucide Icons",
      "react-to-print",
      "SendGrid",
    ],
    features: [
      {
        title: "QR Code Check-in",
        description: "ลูกค้าสแกน QR Code เพื่อรับคิว พร้อมรับเลขคิวทันที",
      },
      {
        title: "Dashboard สำหรับเจ้าหน้าที่",
        description: "จัดการคิว เรียกคิว ข้ามคิว ยกเลิกคิว ดูสถิติการให้บริการ",
      },
      {
        title: "หน้าจอแสดงคิว",
        description: "หน้าจอแสดงคิวปัจจุบันแบบ Real-time สำหรับลูกค้า",
      },
      {
        title: "Email/SMS Notification",
        description: "แจ้งเตือนลูกค้าผ่านอีเมลหรือ SMS เมื่อถึงคิว",
      },
      {
        title: "พิมพ์บัตรคิว",
        description: "พิมพ์บัตรคิวให้ลูกค้าด้วย react-to-print",
      },
      {
        title: "รายงานและสถิติ",
        description: "ดูรายงานจำนวนลูกค้า เวลารอเฉลี่ย และข้อมูลเชิงลึกอื่นๆ",
      },
      {
        title: "Multi-branch Support",
        description: "รองรับหลายสาขา จัดการแยกกันได้",
      },
    ],
    client: "Various SMEs",
    projectDate: "2024-12-01",
    githubUrl: "https://github.com/danya0365/shop-queue-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 1834,
  },
  {
    id: "6",
    slug: "prayer-for-kids",
    title: "Prayer for Kids - แอปสอนการละหมาดสำหรับเด็ก",
    category: "Web",
    displayOrder: 7,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "เว็บแอปพลิเคชันสอนการละหมาดสำหรับเด็กอย่างสนุกสนาน ด้วยภาพสวยงาม สีสันสดใส เน้นความเข้าใจง่าย มีบทเรียนครบถ้วน ระบบฝึกฝน แบบทดสอบ และรางวัลเพื่อสร้างแรงจูงใจ",
    thumbnail: "/images/projects/prayer-kids-thumb.jpg",
    images: [
      "/images/projects/prayer-kids-1.jpg",
      "/images/projects/prayer-kids-2.jpg",
      "/images/projects/prayer-kids-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Zustand",
      "Tailwind CSS 4",
      "Supabase",
      "React Hook Form",
      "Zod",
      "LocalForage",
      "next-themes",
    ],
    features: [
      {
        title: "บทเรียนครบถ้วน 24 บท",
        description:
          "บทเรียนการละหมาดแบ่งเป็น 4 หมวด: พื้นฐาน, ขั้นตอน, ดุอาอ์, และการละหมาดแต่ละเวลา",
      },
      {
        title: "UI เด็กๆ สีสันสดใส",
        description:
          "ออกแบบ UI ด้วยสีสันสดใส ภาพการ์ตูนน่ารัก ปุ่มขนาดใหญ่ใช้งานง่าย เหมาะกับเด็ก",
      },
      {
        title: "ระบบฝึกฝนแบบ Interactive",
        description:
          "ฝึกท่าละหมาดทีละขั้นตอน มีภาพประกอบและคำอธิบายละเอียด พร้อมเสียงอ่านดุอาอ์",
      },
      {
        title: "แบบทดสอบและรางวัล",
        description:
          "ระบบแบบทดสอบหลังเรียน พร้อมระบบรางวัล 16 รางวัล เพื่อสร้างแรงจูงใจ",
      },
      {
        title: "ติดตามความคืบหน้า",
        description:
          "บันทึกความคืบหน้าการเรียน ดูสถิติการเรียนรู้ และบทเรียนที่เรียนจบแล้ว",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างโค้ดตาม Clean Architecture และ Atomic Design สะอาด บำรุงรักษาง่าย",
      },
    ],
    projectDate: "2025-01-20",
    liveUrl: "https://prayer-for-kid-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/prayer-for-kid-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 856,
  },
];

// Future Projects - โปรเจคในอนาคต
const FUTURE_PROJECTS: Project[] = [
  {
    id: "101",
    slug: "smart-school-management-system",
    title: "Smart School - ระบบบริหารจัดการโรงเรียนครบวงจร",
    category: "Full-stack",
    displayOrder: 101,
    isCleanCode: false,
    isMock: false,
    isFuture: true,
    description:
      "ระบบบริหารจัดการโรงเรียนแบบครบวงจร ที่ทำให้ทุกกิจกรรมในโรงเรียนสามารถดำเนินการผ่านแอปพลิเคชันได้ทั้งหมด ตั้งแต่การสแกนเช็คชื่อเข้าเรียน ตรวจสอบตารางเรียน-สอน จัดการกิจกรรม ดูผลสอบ จัดการข้อมูลนักเรียนและอาจารย์ พร้อมระบบสิทธิ์การใช้งานตาม Role (นักเรียน, อาจารย์, ผู้บริหาร) ที่ชัดเจน",
    thumbnail: "/images/projects/smart-school-thumb.jpg",
    images: [
      "/images/projects/smart-school-1.jpg",
      "/images/projects/smart-school-2.jpg",
      "/images/projects/smart-school-3.jpg",
      "/images/projects/smart-school-4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "QR Code Scanner",
      "Socket.io",
      "SendGrid",
      "Chart.js",
      "date-fns",
    ],
    features: [
      {
        title: "ระบบสแกนเช็คชื่ออัจฉริยะ",
        description:
          "สแกน QR Code เช็คชื่อเข้าเรียนตอนเช้า บันทึกเวลามาเรียนอัตโนมัติ พร้อมแจ้งเตือนผู้ปกครองแบบ Real-time",
      },
      {
        title: "ตารางเรียน-สอนอัจฉริยะ",
        description:
          "ตรวจสอบตารางเรียนของนักเรียน ตารางสอนของอาจารย์ พร้อมการแจ้งเตือนเมื่อมีการเปลี่ยนแปลง รองรับการจัดตารางอัตโนมัติ",
      },
      {
        title: "ระบบจัดการกิจกรรม",
        description:
          "ดูกิจกรรมของโรงเรียน ลงทะเบียนเข้าร่วมกิจกรรม ติดตามชั่วโมงกิจกรรม พร้อมระบบรายงานผลการเข้าร่วม",
      },
      {
        title: "ระบบผลการเรียน",
        description:
          "ดูผลสอบ คะแนนเก็บ เกรดเฉลี่ย แยกตามรายวิชา พร้อมกราฟแสดงความก้าวหน้าการเรียน และเปรียบเทียบผลการเรียน",
      },
      {
        title: "ข้อมูลห้องเรียนและอาคาร",
        description:
          "ดูข้อมูลห้องเรียน อาคารต่างๆ ตารางการใช้ห้อง จองห้องประชุม พร้อมแผนที่โรงเรียนแบบ Interactive",
      },
      {
        title: "จัดการข้อมูลนักเรียน-อาจารย์",
        description:
          "ระบบฐานข้อมูลนักเรียนและอาจารย์ที่ครบถ้วน ค้นหาง่าย อัพเดทข้อมูลได้ทันที พร้อมระบบ Import/Export",
      },
      {
        title: "Role-based Access Control",
        description:
          "ระบบสิทธิ์การใช้งานที่ชัดเจน แยกตาม Role (นักเรียน, อาจารย์, ผู้บริหาร, เจ้าหน้าที่) ปลอดภัยและเป็นระเบียบ",
      },
      {
        title: "ระบบแจ้งเตือนอัจฉริยะ",
        description:
          "แจ้งเตือนผ่าน Push Notification, Email, SMS สำหรับข่าวสาร ประกาศ การบ้าน และเหตุการณ์สำคัญ",
      },
      {
        title: "Dashboard & Analytics",
        description:
          "แดชบอร์ดสำหรับผู้บริหาร แสดงสถิติการเข้าเรียน ผลการเรียน กิจกรรม พร้อมรายงานเชิงลึกและการวิเคราะห์ข้อมูล",
      },
      {
        title: "Mobile & Web Responsive",
        description:
          "ใช้งานได้ทั้งบนมือถือและคอมพิวเตอร์ รองรับทุกขนาดหน้าจอ ออกแบบ UX ให้ใช้งานง่าย",
      },
    ],
    projectDate: "2025-06-01",
    isFeatured: true,
    status: "draft",
    viewCount: 0,
  },
  {
    id: "102",
    slug: "event-organizer-marketplace",
    title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
    category: "Full-stack",
    displayOrder: 102,
    isCleanCode: false,
    isMock: false,
    isFuture: true,
    description:
      "แพลตฟอร์ม Marketplace สำหรับเชื่อมต่อลูกค้าที่ต้องการจัดงานสำคัญ (งานแต่ง งานวันเกิด งานสัมมนา ฯลฯ) กับผู้ให้บริการแต่ละหมวดหมู่ เช่น เช่าเต๊นท์ ทำอาหาร ตกแต่งงาน ถ่ายภาพ DJ/วงดนตรี พร้อมระบบจองงาน รีวิว และจัดการโปรเจกต์งานแบบครบวงจร",
    thumbnail: "/images/projects/eventhub-thumb.jpg",
    images: [
      "/images/projects/eventhub-1.jpg",
      "/images/projects/eventhub-2.jpg",
      "/images/projects/eventhub-3.jpg",
      "/images/projects/eventhub-4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "NestJS",
      "Prisma",
      "MongoDB",
      "Supabase Storage",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "Stripe",
      "Google Maps API",
      "Socket.io",
      "Nodemailer",
      "Cloudinary",
      "date-fns",
      "Chart.js",
    ],
    features: [
      {
        title: "Marketplace หลากหลายหมวดหมู่",
        description:
          "ค้นหาผู้ให้บริการแยกตามหมวดหมู่ เช่น เช่าเต๊นท์/โต๊ะ, ทำอาหาร/เครื่องดื่ม, ตกแต่งงาน, ถ่ายภาพ/วิดีโอ, DJ/วงดนตรี, MC, แต่งหน้า, ดอกไม้ ฯลฯ",
      },
      {
        title: "โปรไฟล์ผู้ให้บริการ",
        description:
          "ดูข้อมูลผู้ให้บริการ พอร์ตโฟลิโอ ราคา แพ็คเกจ รีวิวจากลูกค้าจริง คะแนนความน่าเชื่อถือ และตัวอย่างผลงาน",
      },
      {
        title: "ระบบค้นหาและกรองอัจฉริยะ",
        description:
          "ค้นหาตามพื้นที่ ราคา ประเภทงาน วันที่ว่าง และความต้องการเฉพาะ พร้อม AI Recommendation ผู้ให้บริการที่เหมาะสม",
      },
      {
        title: "ระบบจองและจัดการงาน",
        description:
          "จองผู้ให้บริการหลายรายในที่เดียว ดูปฏิทินว่าง ส่งข้อความสอบถาม เจรจาราคา และจัดการทุกอย่างในแอปเดียว",
      },
      {
        title: "Event Project Management",
        description:
          "จัดการโปรเจกต์งานแบบครบวงจร ติดตามสถานะการจอง Checklist งาน Timeline และประสานงานกับผู้ให้บริการทุกราย",
      },
      {
        title: "ระบบชำระเงินปลอดภัย",
        description:
          "ชำระเงินผ่านระบบ Escrow ที่ปลอดภัย รองรับหลายช่องทาง (บัตรเครดิต, QR Code, โอนเงิน) พร้อมใบเสร็จอิเล็กทรอนิกส์",
      },
      {
        title: "ระบบรีวิวและคะแนน",
        description:
          "รีวิวและให้คะแนนผู้ให้บริการหลังงานเสร็จ อัพโหลดรูปภาพผลงานจริง สร้างความน่าเชื่อถือให้ระบบ",
      },
      {
        title: "Real-time Chat & Notification",
        description:
          "แชทกับผู้ให้บริการแบบ Real-time แจ้งเตือนเมื่อมีข้อความใหม่ การยืนยันงาน หรือการเปลี่ยนแปลงสำคัญ",
      },
      {
        title: "Dashboard สำหรับผู้ให้บริการ",
        description:
          "แดชบอร์ดสำหรับผู้ให้บริการจัดการงาน ดูปฏิทิน รับ-ปฏิเสธงาน ดูรายได้ และจัดการพอร์ตโฟลิโอ",
      },
      {
        title: "Package Builder",
        description:
          "สร้างแพ็คเกจงานแต่งงาน/งานอีเว้นท์แบบครบวงจร เลือกผู้ให้บริการหลายรายในแพ็คเกจเดียว พร้อมราคาพิเศษ",
      },
      {
        title: "Location-based Services",
        description:
          "แสดงผู้ให้บริการบนแผนที่ ค้นหาตามพื้นที่ใกล้เคียง ดูรัศมีการให้บริการ และประมาณค่าเดินทาง",
      },
      {
        title: "Analytics & Insights",
        description:
          "รายงานและสถิติสำหรับผู้ให้บริการ วิเคราะห์ยอดจอง รายได้ Conversion Rate และข้อมูลเชิงลึกอื่นๆ",
      },
    ],
    projectDate: "2025-08-01",
    isFeatured: true,
    status: "draft",
    viewCount: 0,
  },
  {
    id: "103",
    slug: "football-manager-game",
    title: "Football Manager - เกมจัดการทีมฟุตบอลมืออาชีพ",
    category: "Web",
    displayOrder: 103,
    isCleanCode: false,
    isMock: false,
    isFuture: true,
    description:
      "เกมจัดการทีมฟุตบอลแบบมืออาชีพที่ให้คุณเป็นผู้จัดการทีม ควบคุมทุกด้านของสโมสร ตั้งแต่การซื้อขายนักเตะ วางแผนกลยุทธ์การเล่น ฝึกซ้อมทีม จัดการการเงิน ไปจนถึงการแข่งขันในลีกและทัวร์นาเมนต์ต่างๆ พร้อมระบบ AI ที่ชาญฉลาดและกราฟิกสวยงาม",
    thumbnail: "/images/projects/football-manager-thumb.jpg",
    images: [
      "/images/projects/football-manager-1.jpg",
      "/images/projects/football-manager-2.jpg",
      "/images/projects/football-manager-3.jpg",
      "/images/projects/football-manager-4.jpg",
      "/images/projects/football-manager-5.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "Three.js",
      "D3.js",
      "Chart.js",
      "Socket.io",
      "Redis",
      "WebGL",
      "Framer Motion",
      "date-fns",
    ],
    features: [
      {
        title: "ระบบตลาดซื้อขายนักเตะ",
        description:
          "ซื้อ-ขาย-เช่านักเตะจากทั่วโลก ระบบประมูลตัวแบบ Real-time เจรจาสัญญา ค่าเหนื่อย โบนัส พร้อมระบบ Scout ค้นหานักเตะดาวรุ่ง",
      },
      {
        title: "กลยุทธ์และแทคติก",
        description:
          "วางแผนการเล่นแบบละเอียด เลือกฟอร์เมชั่น 4-3-3, 4-4-2, 3-5-2 ฯลฯ กำหนดบทบาทผู้เล่น ตั้งค่าการเล่นรุก-รับ และปรับกลยุทธ์ระหว่างแมตช์",
      },
      {
        title: "Match Engine 3D",
        description:
          "ดูการแข่งขันแบบ 3D Real-time พร้อมไฮไลท์ประตู สถิติการเล่น Heat Map และการวิเคราะห์เชิงลึกทุกแมตช์",
      },
      {
        title: "ระบบฝึกซ้อมและพัฒนา",
        description:
          "ฝึกซ้อมนักเตะเพื่อพัฒนาทักษะ ความแข็งแรง ความเร็ว จัดการสภาพร่างกาย ป้องกันการบาดเจ็บ และพัฒนาเยาวชนในสโมสร",
      },
      {
        title: "จัดการการเงินสโมสร",
        description:
          "ควบคุมงบประมาณ ค่าเหนื่อยนักเตะ รายได้จากตั๋ว สปอนเซอร์ สิทธิ์ถ่ายทอด และการลงทุนในสนาม-สิ่งอำนวยความสะดวก",
      },
      {
        title: "Career Mode ระยะยาว",
        description:
          "เล่นต่อเนื่องหลายฤดูกาล ดูนักเตะแก่ตัว เกษียณ มีรุ่นใหม่เข้ามา ติดตามสถิติตลอดอาชีพ และสร้างราชวงศ์แชมป์",
      },
      {
        title: "ลีกและทัวร์นาเมนต์จริง",
        description:
          "แข่งในลีกชั้นนำทั่วโลก Premier League, La Liga, Serie A, Bundesliga, Champions League, World Cup พร้อมตารางคะแนนแบบ Real-time",
      },
      {
        title: "ระบบ AI ที่ชาญฉลาด",
        description:
          "AI ผู้จัดการคู่แข่งที่ฉลาด ปรับกลยุทธ์ตามสถานการณ์ ซื้อขายนักเตะอย่างสมจริง และตอบสนองต่อฟอร์มของทีม",
      },
      {
        title: "สถิติและการวิเคราะห์",
        description:
          "ดูสถิติเชิงลึกทุกด้าน ผลงานนักเตะ Heat Map, Pass Map, Shot Map วิเคราะห์จุดแข็ง-จุดอ่อน พร้อมกราฟและชาร์ตแบบ Interactive",
      },
      {
        title: "ห้องแต่งตัวและขวัญกำลังใจ",
        description:
          "จัดการความสัมพันธ์กับนักเตะ พูดคุยก่อน-หลังแมตช์ สร้างขวัญกำลังใจ แก้ปัญหาความขัดแย้ง และรักษาบรรยากาศในทีม",
      },
      {
        title: "Multiplayer Online",
        description:
          "เล่นกับเพื่อนแบบ Online แข่งขันในลีกเดียวกัน ซื้อขายนักเตะระหว่างกัน และดูว่าใครจะเป็นผู้จัดการที่เก่งที่สุด",
      },
      {
        title: "ระบบข่าวและสื่อ",
        description:
          "รับข่าวสารจากสื่อ ตอบคำถามนักข่าว จัดการความคาดหวังของแฟนบอล และสร้างชื่อเสียงให้ตัวเองในวงการ",
      },
      {
        title: "Customization & Mods",
        description:
          "ปรับแต่งลีก ทีม ชุดแข่ง โลโก้ และนำเข้าข้อมูลจริงจากภายนอก รองรับ Community Mods และการอัพเดทข้อมูลนักเตะ",
      },
      {
        title: "Mobile & Cross-platform",
        description:
          "เล่นได้ทั้งบนเว็บและมือถือ ซิงค์ความคืบหน้าข้ามอุปกรณ์ พร้อม Cloud Save ที่ปลอดภัย",
      },
    ],
    projectDate: "2025-10-01",
    isFeatured: true,
    status: "draft",
    viewCount: 0,
  },
  {
    id: "104",
    slug: "football-fantasy-league",
    title: "Football Fantasy League - เกมจัดทีมแฟนตาซีฟุตบอล",
    category: "Full-stack",
    displayOrder: 104,
    isCleanCode: false,
    isMock: false,
    isFuture: true,
    description:
      "เกมจัดทีมแฟนตาซีฟุตบอลแบบ Premier League Fantasy ที่ให้คุณเป็นผู้จัดการทีมในฝัน เลือกนักเตะจริงจากลีกชั้นนำ แข่งขันกับเพื่อนและผู้เล่นทั่วโลก รับคะแนนตามผลงานจริงของนักเตะ พร้อมระบบลีกส่วนตัว การซื้อขายนักเตะ และรางวัลมากมาย",
    thumbnail: "/images/projects/football-fantasy-thumb.jpg",
    images: [
      "/images/projects/football-fantasy-1.jpg",
      "/images/projects/football-fantasy-2.jpg",
      "/images/projects/football-fantasy-3.jpg",
      "/images/projects/football-fantasy-4.jpg",
      "/images/projects/football-fantasy-5.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Tailwind CSS 4",
      "TanStack Query",
      "Chart.js",
      "D3.js",
      "Socket.io",
      "Redis",
      "Framer Motion",
      "date-fns",
      "Football-Data.org API",
      "Stripe",
    ],
    features: [
      {
        title: "จัดทีมแฟนตาซีในฝัน",
        description:
          "เลือกนักเตะ 15 คน ภายในงบ 100 ล้าน จากลีกจริง วางฟอร์เมชั่น 3-4-3, 3-5-2, 4-3-3 ฯลฯ เลือกกัปตันและรองกัปตัน พร้อมระบบ Auto-pick อัจฉริยะ",
      },
      {
        title: "คะแนนตามผลงานจริง Real-time",
        description:
          "รับคะแนนจากผลงานจริงของนักเตะ ประตู แอสซิสต์ Clean Sheet บันทึกเซฟ อัพเดทแบบ Real-time ทุกนัดการแข่งขัน",
      },
      {
        title: "ตลาดซื้อขายนักเตะ",
        description:
          "ซื้อ-ขายนักเตะทุกสัปดาห์ ดูราคาขึ้น-ลง ตามฟอร์มการเล่น วิเคราะห์ Fixture Difficulty Rating และ Ownership %",
      },
      {
        title: "Gameweek Planning",
        description:
          "วางแผนทีมล่วงหน้า 5 Gameweeks ใช้ Wildcard, Free Hit, Bench Boost, Triple Captain ในจังหวะที่เหมาะสม",
      },
      {
        title: "ลีกส่วนตัวและ Mini-Leagues",
        description:
          "สร้างลีกส่วนตัวกับเพื่อน ครอบครัว เพื่อนร่วมงาน แข่งขันกันในกลุ่มเล็ก พร้อมตารางอันดับและสถิติเปรียบเทียบ",
      },
      {
        title: "Global Leaderboard",
        description:
          "แข่งขันกับผู้เล่นทั่วโลก ดูอันดับโลก อันดับประเทศ อันดับภูมิภาค พร้อมรางวัลสำหรับผู้ชนะ",
      },
      {
        title: "สถิติและการวิเคราะห์เชิงลึก",
        description:
          "ดูสถิตินักเตะครบถ้วน Form, ICT Index, Expected Goals (xG), Expected Assists (xA), Bonus Points System พร้อมกราฟและชาร์ตแบบ Interactive",
      },
      {
        title: "AI Recommendations",
        description:
          "ระบบ AI แนะนำนักเตะที่น่าสนใจ วิเคราะห์ Fixture, Form, Price Changes และคาดการณ์คะแนนในอนาคต",
      },
      {
        title: "Draft Mode",
        description:
          "โหมด Draft แบบ Head-to-Head แต่ละคนเลือกนักเตะไม่ซ้ำกัน แข่งขันแบบ Knockout Tournament พร้อมระบบ Waiver Wire",
      },
      {
        title: "Live Match Updates",
        description:
          "ติดตามคะแนนแบบ Live ระหว่างแมตช์ ดูไฮไลท์ประตู สถิติการเล่น และการเปลี่ยนตัวแบบ Real-time",
      },
      {
        title: "Price Change Predictor",
        description:
          "ทำนายการเปลี่ยนแปลงราคานักเตะ ดู Transfer In/Out Trends วิเคราะห์ว่านักเตะคนไหนจะขึ้น-ลงราคา",
      },
      {
        title: "Fixture Planner & Difficulty",
        description:
          "ดูตารางแข่งล่วงหน้า วิเคราะห์ความยากง่ายของคู่แข่ง Double Gameweeks, Blank Gameweeks พร้อมระบบแจ้งเตือน",
      },
      {
        title: "Team Comparison Tool",
        description:
          "เปรียบเทียบทีมกับเพื่อน ดูความแตกต่างของนักเตะ คะแนน การใช้ Chip และกลยุทธ์การเล่น",
      },
      {
        title: "History & Season Archives",
        description:
          "ดูประวัติทีมย้อนหลัง สถิติทุกฤดูกาล Hall of Fame ผู้เล่นที่ดีที่สุด และความทรงจำแต่ละซีซั่น",
      },
      {
        title: "Social Features",
        description:
          "แชทกับสมาชิกในลีก แชร์ทีม โพสต์ผลงาน Banter กับเพื่อน พร้อมระบบ Achievements และ Badges",
      },
      {
        title: "Premium Features",
        description:
          "สมัครสมาชิก Premium รับสถิติเพิ่มเติม AI Analysis ขั้นสูง ลบโฆษณา และรางวัลพิเศษ",
      },
      {
        title: "Mobile App & Notifications",
        description:
          "แอปมือถือ iOS/Android แจ้งเตือน Deadline, Price Changes, Lineup News และผลการแข่งขันทันที",
      },
      {
        title: "Multi-League Support",
        description:
          "รองรับหลายลีก Premier League, La Liga, Serie A, Bundesliga เล่นได้พร้อมกันหลายลีก",
      },
    ],
    projectDate: "2025-12-01",
    isFeatured: true,
    status: "draft",
    viewCount: 0,
  },
  {
    id: "105",
    slug: "rpg-open-world-adventure",
    title: "RPG Open World Adventure - เกมผจญภัยโลกเปิดกว้าง",
    category: "Web",
    displayOrder: 105,
    isCleanCode: false,
    isMock: false,
    isFuture: true,
    description:
      "เกม RPG โลกเปิดกว้างที่ให้คุณสำรวจโลกแฟนตาซีอันกว้างใหญ่ได้อย่างอิสระ ผจญภัยในเนื้อเรื่องหลักที่น่าติดตาม พร้อมเควสย่อยนับร้อย ระบบต่อสู้แบบ Turn-based ที่ลึกซึ้ง สะสมไอเทม อาวุธ เกราะ พัฒนาตัวละคร และสร้างปาร์ตี้ในฝัน ทุกการตัดสินใจส่งผลต่อโลกและเรื่องราว",
    thumbnail: "/images/projects/rpg-openworld-thumb.jpg",
    images: [
      "/images/projects/rpg-openworld-1.jpg",
      "/images/projects/rpg-openworld-2.jpg",
      "/images/projects/rpg-openworld-3.jpg",
      "/images/projects/rpg-openworld-4.jpg",
      "/images/projects/rpg-openworld-5.jpg",
      "/images/projects/rpg-openworld-6.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Tailwind CSS 4",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Howler.js",
      "Phaser 3",
      "Socket.io",
      "Zod",
      "LocalForage",
      "Canvas API",
      "WebGL",
      "date-fns",
    ],
    features: [
      {
        title: "World Map แบบ Open World",
        description:
          "สำรวจโลกแฟนตาซีกว้างใหญ่ได้อย่างอิสระ เดินทางระหว่างเมือง หมู่บ้าน ดันเจี้ยน ป่า ภูเขา ทะเลทราย ค้นพบสถานที่ลับ และปลดล็อกพื้นที่ใหม่ๆ",
      },
      {
        title: "Story Event เนื้อเรื่องหลัก",
        description:
          "ติดตามเนื้อเรื่องหลักที่น่าติดตาม มีการเลือกทางเดินของเรื่องราว Multiple Endings ตามการตัดสินใจ พร้อม Cutscene และ Dialogue ที่มีชีวิตชีวา",
      },
      {
        title: "Event Quest & Side Quests",
        description:
          "เควสย่อยนับร้อยภารกิจ แต่ละเควสมีเรื่องราวเป็นของตัวเอง รางวัลพิเศษ ไอเทมหายาก และผลกระทบต่อโลก พร้อมระบบ Quest Log ที่ครบถ้วน",
      },
      {
        title: "Interactive World Events",
        description:
          "เหตุการณ์สุ่มเกิดขึ้นระหว่างสำรวจ พบ NPC ที่ต้องการความช่วยเหลือ สมบัติซ่อน มอนสเตอร์หายาก และเหตุการณ์พิเศษตามเวลาและสภาพอากาศ",
      },
      {
        title: "Tactical Grid Combat System",
        description:
          "ระบบต่อสู้แบบ Turn-based Tactical บนกริด (อิงจาก Dragon Quest Tact) วางตำแหน่งหน่วยบนตาราง 6x6 ใช้กลยุทธ์เคลื่อนที่ ระยะโจมตี ทิศทาง Elemental Weakness และ Combo Attacks พร้อม Formation System และ Terrain Effects",
      },
      {
        title: "Unit Positioning & Movement",
        description:
          "วางตำแหน่งหน่วยก่อนต่อสู้ เคลื่อนที่บนกริดตาม Movement Range ใช้กลยุทธ์ล้อมศัตรู โจมตีจากข้างหลัง Flanking Bonus และ High Ground Advantage",
      },
      {
        title: "Skills & Special Abilities",
        description:
          "สกิลพิเศษแต่ละตัวละคร มีระยะโจมตี รูปแบบ AOE (Area of Effect) ต่างกัน Buff/Debuff ทีม Healing Zone และ Ultimate Skills ที่เปลี่ยนสถานการณ์การต่อสู้",
      },
      {
        title: "Party Management",
        description:
          "สร้างปาร์ตี้สูงสุด 4 คน เลือกตัวละครจากเพื่อนร่วมทาง แต่ละคนมีสกิลเฉพาะ บุคลิก และเรื่องราวส่วนตัว พร้อมระบบ Friendship & Romance",
      },
      {
        title: "Character Progression",
        description:
          "ระบบเลเวลและสกิลทรี ปลดล็อกความสามารถใหม่ๆ เลือก Class (Warrior, Mage, Rogue, Healer, Ranger) พร้อม Multi-class และ Prestige Class",
      },
      {
        title: "Equipment & Crafting",
        description:
          "สะสมอาวุธ เกราะ อุปกรณ์นับพัน ระบบ Crafting สร้างไอเทม Enchanting ใส่พลัง Upgrading และ Transmog เปลี่ยนรูปลักษณ์",
      },
      {
        title: "Dungeon Exploration",
        description:
          "สำรวจดันเจี้ยนที่มีปริศนา กับดัก มอนสเตอร์ และบอสที่ท้าทาย แต่ละดันเจี้ยนมีธีมและกลไกเฉพาะ พร้อม Procedural Generation",
      },
      {
        title: "Dynamic Weather & Day/Night",
        description:
          "ระบบสภาพอากาศและเวลาที่เปลี่ยนแปลง ส่งผลต่อการเล่น บาง Quest เกิดเฉพาะเวลา มอนสเตอร์แตกต่างกลางวัน-กลางคืน",
      },
      {
        title: "NPC & Town System",
        description:
          "NPC มีชีวิต มีตารางเดินทาง ร้านค้า Blacksmith Inn Tavern Guild Hall พูดคุยได้ รับเควส และสร้างความสัมพันธ์",
      },
      {
        title: "Skill & Magic System",
        description:
          "เรียนรู้สกิลและเวทมนตร์นับร้อย Passive Skills, Active Skills, Ultimate Skills Spell Combinations และ Forbidden Magic",
      },
      {
        title: "Mount & Transportation",
        description:
          "ขี่ม้า มังกร หรือยานพาหนะพิเศษ Fast Travel ระหว่างจุด Airship สำหรับบินข้ามทวีป และ Boat สำหรับสำรวจทะเล",
      },
      {
        title: "Treasure Hunting & Secrets",
        description:
          "ค้นหาสมบัติซ่อน Secret Areas Hidden Bosses Easter Eggs และ Legendary Items พร้อมระบบ Treasure Map และ Clues",
      },
      {
        title: "Achievement & Collection",
        description:
          "ระบบ Achievement ครบถ้วน Monster Bestiary Item Codex Lore Books สะสมทุกอย่างและปลดล็อกรางวัลพิเศษ",
      },
      {
        title: "Save System & Cloud Sync",
        description:
          "บันทึกความคืบหน้าหลายสล็อต Auto-save Manual Save Cloud Sync ข้ามอุปกรณ์ และ New Game+ สำหรับเล่นซ้ำ",
      },
      {
        title: "Multiplayer Co-op Mode",
        description:
          "เล่นร่วมกับเพื่อนแบบ Online Co-op สูงสุด 4 คน แชร์เควส ต่อสู้บอสร่วมกัน และแลกเปลี่ยนไอเทม",
      },
      {
        title: "Mod Support & Custom Content",
        description:
          "รองรับ Mods สร้างเควสเอง Custom Characters, Items, Maps และแชร์กับ Community พร้อม Mod Manager",
      },
      {
        title: "Beautiful Graphics & Sound",
        description:
          "กราฟิก 2D/3D สวยงาม Pixel Art หรือ Low-poly Style เพลงประกอบบรรยากาศ Sound Effects คุณภาพสูง และ Voice Acting",
      },
      {
        title: "Accessibility Features",
        description:
          "ปรับความยากได้ Colorblind Mode Text-to-Speech Customizable Controls และ Tutorial ที่เข้าใจง่าย",
      },
    ],
    projectDate: "2026-03-01",
    isFeatured: true,
    status: "draft",
    viewCount: 0,
  },
];

// Merge all projects
export const PROJECTS: Project[] = [
  ...CLEAN_CODE_PROJECTS,
  ...MOCK_PROJECTS,
  ...FUTURE_PROJECTS,
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.isFeatured).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return PROJECTS.filter((project) => project.category === category).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
};

export const getAllProjectsSorted = (): Project[] => {
  return [...PROJECTS].sort((a, b) => a.displayOrder - b.displayOrder);
};

// Filter by project type
export const getCleanCodeProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.isCleanCode).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
};

export const getMockProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.isMock).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
};

export const getFutureProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.isFuture).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
};

// Export individual arrays for specific use cases
export { CLEAN_CODE_PROJECTS, FUTURE_PROJECTS, MOCK_PROJECTS };
