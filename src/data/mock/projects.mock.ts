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
];

// Clean Code Projects - โปรเจคจริงที่ทำแล้ว
const CLEAN_CODE_PROJECTS: Project[] = [
  {
    id: "18",
    slug: "edux-school-management",
    title: "EduX School - ระบบจัดการโรงเรียนครบวงจร",
    category: "Full-stack",
    displayOrder: 18,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มจัดการโรงเรียนแบบครบวงจรสำหรับนักเรียน ครู ผู้ปกครอง และผู้บริหาร พร้อมระบบการเรียนการสอน การจัดการชั้นเรียน และการติดตามผลการเรียน",
    thumbnail: "/images/projects/edux-school/1.jpg",
    images: [
      "/images/projects/edux-school/1.jpg",
      "/images/projects/edux-school/2.jpg",
      "/images/projects/edux-school/3.jpg",
      "/images/projects/edux-school/4.jpg",
      "/images/projects/edux-school/5.jpg",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "PostgreSQL",
      "Zod",
      "React Query",
    ],
    features: [
      {
        title: "ระบบจัดการนักเรียนและครู",
        description: "จัดการข้อมูลนักเรียน ครู และบุคลากรได้อย่างมีประสิทธิภาพ",
      },
      {
        title: "ตารางเรียนและตารางสอน",
        description: "ระบบจัดการตารางเรียนออนไลน์สำหรับนักเรียนและครู",
      },
      {
        title: "ระบบให้คะแนนและประเมินผล",
        description: "บันทึกและวิเคราะห์ผลการเรียนของนักเรียน",
      },
      {
        title: "พอร์ทัลผู้ปกครอง",
        description: "ให้ผู้ปกครองติดตามผลการเรียนและกิจกรรมของบุตรหลาน",
      },
      {
        title: "ระบบแจ้งเตือน",
        description: "แจ้งเตือนกิจกรรมสำคัญ การบ้าน และการประเมินผล",
      },
    ],
    client: "EduX School",
    projectDate: "2025-10-13",
    liveUrl: "https://edux-school-nextjs.vercel.app/",
    githubUrl: "https://github.com/yourusername/edux-school-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
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
    thumbnail: "/images/projects/al-quran/1.jpg",
    images: [
      "/images/projects/al-quran/1.jpg",
      "/images/projects/al-quran/2.jpg",
      "/images/projects/al-quran/3.jpg",
      "/images/projects/al-quran/4.jpg",
      "/images/projects/al-quran/5.jpg",
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
    title: "Soc-Tact – Football Tactical Community Platform",
    category: "Full-stack",
    displayOrder: 4,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มโซเชียลสำหรับวิเคราะห์แทคติกฟุตบอล ครบทั้ง Match Center, League Tables, Tactical Community, Fantasy Football และสถาปัตยกรรม Multi-profile บน Supabase",
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
      "Tailwind CSS 4",
      "Zustand",
      "localforage",
      "Supabase",
      "Axios",
      "React Hook Form",
      "Zod",
    ],
    features: [
      {
        title: "Football Data Hub",
        description:
          "Match Center, League Tables และ Team Pages ครบด้วยข้อมูลแมตช์ สถิติ รายชื่อนักเตะ และตารางอันดับ",
      },
      {
        title: "Tactical Analysis Community",
        description:
          "ฟีดบทวิเคราะห์ ระบบแท็ก ฟอร์เมชัน และหน้าโพสต์รายละเอียด พร้อมเพจสร้างโพสต์แทคติก",
      },
      {
        title: "Fantasy Football Suite",
        description:
          "ชุดหน้าฟีเจอร์ Fantasy ครบ 6+ หน้า เช่น Squad Builder, Transfers, Points, Fixtures, Planner และ Leagues",
      },
      {
        title: "Multi-profile Architecture",
        description:
          "ออกแบบ Supabase schema รองรับหลายโปรไฟล์ต่อผู้ใช้ พร้อม role management และ RPC functions สำหรับ football data cache",
      },
      {
        title: "Clean Architecture & Atomic Design",
        description:
          "ยึดตาม Clean Architecture, SOLID principles, presenter pattern และ Atomic Design ในการจัดโครงสร้างโค้ด",
      },
      {
        title: "Localization & Theming",
        description:
          "รองรับภาษาไทยเต็มรูปแบบ, Dark Mode, และ responsive layout พร้อม state persistence ผ่าน Zustand + localforage",
      },
    ],
    projectDate: "2025-03-15",
    liveUrl: "https://soc-tact-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/soc-tact-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 2140,
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
  {
    id: "7",
    slug: "timeluxe-luxury-watch-marketplace",
    title: "TimeLuxe - ตลาดกลางนาฬิกาหรูออนไลน์",
    category: "Full-stack",
    displayOrder: 8,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มซื้อขายนาฬิกาหรูออนไลน์ที่ใหญ่ที่สุด มีนาฬิกาแบรนด์เนมระดับโลก Rolex, Patek Philippe, Audemars Piguet พร้อมระบบการันตีความแท้ 100% การชำระเงินปลอดภัย และการจัดส่งที่มีประกัน",
    thumbnail: "/images/projects/timeluxe-thumb.jpg",
    images: [
      "/images/projects/timeluxe-1.jpg",
      "/images/projects/timeluxe-2.jpg",
      "/images/projects/timeluxe-3.jpg",
      "/images/projects/timeluxe-4.jpg",
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
      "LocalForage",
      "next-themes",
      "Axios",
      "Lucide Icons",
    ],
    features: [
      {
        title: "แบรนด์ชั้นนำระดับโลก",
        description:
          "รวมนาฬิกาจากแบรนด์ดังกว่า 50 แบรนด์ เช่น Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier พร้อมข้อมูลรายละเอียดครบถ้วน",
      },
      {
        title: "การันตีความแท้ 100%",
        description:
          "นาฬิกาทุกเรือนผ่านการตรวจสอบโดยผู้เชี่ยวชาญ มีใบรับรองความแท้ หากพบว่าเป็นของปลอมคืนเงิน 100%",
      },
      {
        title: "ระบบค้นหาและกรองขั้นสูง",
        description:
          "ค้นหานาฬิกาตามแบรนด์ รุ่น ราคา สภาพ ปีที่ผลิต พร้อมตัวกรองที่ละเอียดเพื่อหานาฬิกาที่ใช่",
      },
      {
        title: "Marketplace ซื้อและขาย",
        description:
          "ผู้ใช้สามารถซื้อนาฬิกาจากผู้ขายมืออาชีพ หรือวางขายนาฬิกาของตัวเองได้ พร้อมเข้าถึงลูกค้านับพัน",
      },
      {
        title: "ระบบชำระเงินปลอดภัย",
        description:
          "ชำระเงินผ่านระบบที่ได้มาตรฐานสากล มีระบบ Escrow ป้องกันการโกง พร้อมเข้ารหัสข้อมูลการชำระเงิน",
      },
      {
        title: "รายการโปรดและเปรียบเทียบ",
        description:
          "เก็บนาฬิกาที่สนใจไว้ดูภายหลัง เปรียบเทียบนาฬิกาหลายรุ่น และรับแจ้งเตือนเมื่อราคาลดลง",
      },
      {
        title: "โปรไฟล์ผู้ใช้ครบครัน",
        description:
          "จัดการบัญชี ดูประวัติการซื้อขาย ติดตามออเดอร์ และจัดการข้อมูลส่วนตัว",
      },
      {
        title: "Responsive & Dark Mode",
        description:
          "รองรับทุกขนาดหน้าจอ จากมือถือถึงเดสก์ท็อป พร้อม Dark Mode สำหรับใช้งานสบายตา",
      },
      {
        title: "SEO Optimized",
        description:
          "ใช้ Server Components และ Dynamic Metadata สำหรับ SEO ที่ดี ติดอันดับค้นหาง่าย",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างโค้ดตาม Clean Architecture และ SOLID principles แยก layers ชัดเจน บำรุงรักษาง่าย",
      },
    ],
    projectDate: "2025-01-25",
    liveUrl: "https://timeluxe-ten.vercel.app/",
    githubUrl: "https://github.com/danya0365/timeluxe-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 1523,
  },
  {
    id: "17",
    slug: "triply-travel-platform",
    title: "Triply - แพลตฟอร์มท่องเที่ยวออนไลน์",
    category: "Full-stack",
    description:
      "แพลตฟอร์มท่องเที่ยวออนไลน์ที่รวบรวมที่พัก กิจกรรม และประสบการณ์การเดินทางไว้ในที่เดียว พร้อมระบบจองที่สะดวกสบาย และการแนะนำจากผู้เชี่ยวชาญ",
    thumbnail: "/images/projects/triply/thumbnail.jpg",
    images: [
      "/images/projects/triply/screen-1.jpg",
      "/images/projects/triply/screen-2.jpg",
      "/images/projects/triply/screen-3.jpg",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "NextAuth.js",
      "Stripe",
    ],
    features: [
      {
        title: "ระบบค้นหาและจองที่พัก",
        description:
          "ค้นหาที่พักได้อย่างสะดวกด้วยฟิลเตอร์ที่หลากหลาย ดูรายละเอียดที่พัก ภาพถ่ายจริง และรีวิวจากผู้เข้าพักจริง",
      },
      {
        title: "ระบบจัดการทริป",
        description:
          "สร้างและจัดการแผนการเดินทาง จองตั๋วเครื่องบิน ที่พัก และกิจกรรมได้ในที่เดียว",
      },
      {
        title: "ระบบแนะนำสถานที่ท่องเที่ยว",
        description:
          "แนะนำสถานที่ท่องเที่ยวยอดนิยม กิจกรรมน่าสนใจ และร้านอาหารแนะนำตามความสนใจของผู้ใช้",
      },
      {
        title: "ระบบรีวิวและให้คะแนน",
        description:
          "แบ่งปันประสบการณ์การเดินทางและให้คะแนนสถานที่ท่องเที่ยว เพื่อเป็นประโยชน์ต่อผู้ใช้งานท่านอื่น",
      },
      {
        title: "การชำระเงินที่ปลอดภัย",
        description:
          "รองรับการชำระเงินผ่านหลายช่องทางด้วยระบบ Stripe ที่ปลอดภัยและน่าเชื่อถือ",
      },
    ],
    client: "Triply Co., Ltd.",
    projectDate: "2024-09-15",
    liveUrl: "https://triply-nextjs.vercel.app",
    githubUrl: "https://github.com/yourusername/triply-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
    displayOrder: 17,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
  },
  {
    id: "19",
    slug: "next-edu-learning-platform",
    title: "Next Edu - แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับเด็ก",
    category: "Full-stack",
    displayOrder: 19,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มการศึกษาออนไลน์ที่ออกแบบมาเพื่อเด็กและผู้เริ่มต้น มีคอร์สเรียนหลากหลายสาขา ระบบ Gamification และติดตามความก้าวหน้า พร้อมด้วย Achievements, Leaderboard และระบบแดชบอร์ดสำหรับนักเรียนและผู้สอน",
    thumbnail: "/images/projects/next-edu/1.jpg",
    images: [
      "/images/projects/next-edu/1.jpg",
      "/images/projects/next-edu/2.jpg",
      "/images/projects/next-edu/3.jpg",
      "/images/projects/next-edu/4.jpg",
      "/images/projects/next-edu/5.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "LocalForage",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Lucide Icons",
      "next-themes",
      "react-to-print",
    ],
    features: [
      {
        title: "21 หน้าสมบูรณ์",
        description:
          "ครบทุกฟีเจอร์สำหรับแพลตฟอร์มการเรียนรู้ ตั้งแต่หน้าแรก คอร์ส บทเรียน แดชบอร์ด โปรไฟล์ และอื่นๆ",
      },
      {
        title: "ระบบ Gamification",
        description:
          "Achievements สำหรับเก็บความสำเร็จ Leaderboard แข่งขันกับเพื่อน ระบบคะแนนและเลเวล สร้างแรงจูงใจให้ผู้เรียน",
      },
      {
        title: "Student Dashboard",
        description:
          "แดชบอร์ดสำหรับนักเรียน ติดตามความคืบหน้า คอร์สที่เรียน ใบประกาศนียบัตร รายการโปรด และตั้งค่าต่างๆ",
      },
      {
        title: "Instructor Dashboard",
        description:
          "แดชบอร์ดสำหรับผู้สอน จัดการคอร์ส ดูสถิติการเรียน รายได้ และข้อมูลนักเรียน พร้อมกราฟวิเคราะห์",
      },
      {
        title: "Course Player & Quiz",
        description:
          "หน้าเล่นวิดีโอพร้อม UI ที่สวยงาม ระบบแบบทดสอบ ติดตามความคืบหน้า และบันทึกประวัติการเรียน",
      },
      {
        title: "Responsive & Dark Mode",
        description:
          "รองรับทุกขนาดหน้าจอ จากมือถือถึงเดสก์ท็อป พร้อม Dark Mode สำหรับใช้งานสบายตา",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างโค้ดตาม Clean Architecture และ Atomic Design สะอาด แยก layers ชัดเจน บำรุงรักษาง่าย",
      },
      {
        title: "Type Safety",
        description:
          "TypeScript ทั้งหมด Type-safe ทุกส่วน ใช้ Zod สำหรับ validation และ React Hook Form สำหรับฟอร์ม",
      },
    ],
    projectDate: "2025-10-14",
    liveUrl: "https://next-edu-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/next-edu-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "20",
    slug: "work-pulse-attendance-system",
    title: "Work Pulse - ระบบติดตามบันทึกการเข้างานและลาของพนักงาน",
    category: "Full-stack",
    displayOrder: 20,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มบริหารจัดการเวลาทำงานและการลาของพนักงานที่ออกแบบมาให้ใช้งานง่าย สนุก และมีความสุข พร้อมระบบ Check-in/Check-out แบบออนไลน์ การจัดการวันลา Dashboard แบบ Real-time รายงานและการวิเคราะห์ที่ครบถ้วน",
    thumbnail: "/images/projects/work-pulse/1.jpg",
    images: [
      "/images/projects/work-pulse/1.jpg",
      "/images/projects/work-pulse/2.jpg",
      "/images/projects/work-pulse/3.jpg",
      "/images/projects/work-pulse/4.jpg",
      "/images/projects/work-pulse/5.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase",
      "next-themes",
      "Lucide Icons",
      "LocalForage",
      "React Hook Form",
      "Zod",
      "Chart.js",
      "date-fns",
    ],
    features: [
      {
        title: "Check-in/Check-out ง่ายๆ",
        description:
          "บันทึกเวลาเข้า-ออกงานได้ด้วยคลิกเดียว รองรับการทำงานจากที่ไหนก็ได้ (Office, Remote, Field) พร้อมบันทึกโน้ตและ Break time",
      },
      {
        title: "จัดการวันลาอัตโนมัติ",
        description:
          "ขอลาออนไลน์ได้ทุกที่ทุกเวลา ตรวจสอบวันลาคงเหลือได้ทันที ดู Calendar ของการลา พร้อมระบบอนุมัติที่รวดเร็ว",
      },
      {
        title: "Dashboard แบบ Real-time",
        description:
          "ดูข้อมูลการทำงานแบบ Real-time สถิติครบถ้วน เข้าใจง่าย พร้อม Quick Actions และ Weekly Overview Chart",
      },
      {
        title: "จัดการทีมได้ง่าย",
        description:
          "ดูสถานะทีมได้ในมุมมองเดียว ใครมา ใครลา ใครมาสาย อนุมัติการลาได้รวดเร็ว พร้อม Team Calendar และ Analytics",
      },
      {
        title: "รายงานละเอียด",
        description:
          "สร้างรายงานได้หลากหลาย Attendance Report, Leave Utilization, Overtime Report, Punctuality Report พร้อม Export เป็น Excel/PDF",
      },
      {
        title: "Calendar View ครบครัน",
        description:
          "ดูข้อมูลการทำงานแบบ Calendar แยกสีตามสถานะ (Work, Leave, Absent, Holiday) พร้อม Day Details และ Quick Actions",
      },
      {
        title: "แจ้งเตือนอัตโนมัติ",
        description:
          "แจ้งเตือนเมื่อถึงเวลาเข้า-ออกงาน แจ้งสถานะการอนุมัติ Real-time Notifications พร้อมตั้งค่าการแจ้งเตือนได้",
      },
      {
        title: "UI/UX ที่สวยงามและมีความสุข",
        description:
          "ออกแบบด้วยสีสันสดใส Emoji Icons Smooth Animations Gradient Backgrounds เพื่อสร้างความรู้สึกดีในการทำงาน",
      },
      {
        title: "Responsive & Dark Mode",
        description:
          "ใช้งานได้ทุกอุปกรณ์ จากมือถือถึงเดสก์ท็อป พร้อม Dark Mode สำหรับใช้งานสบายตา",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างโค้ดตาม Clean Architecture และ SOLID principles แยก layers ชัดเจน บำรุงรักษาง่าย Type-safe ทั้งหมด",
      },
    ],
    client: "Internal HR Tool",
    projectDate: "2025-10-15",
    liveUrl: "https://work-pulse-nextjs.vercel.app",
    githubUrl: "https://github.com/yourusername/work-pulse-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "21",
    slug: "gx-trade",
    title: "GX Trade - ระบบวิเคราะห์ราคาทองอัจฉริยะ",
    category: "Full-stack",
    description:
      "แพลตฟอร์มวิเคราะห์ราคาทองแบบครบวงจร พร้อมฟีเจอร์ชุมชน Gamification และ Social Trading สำหรับนักลงทุนทองคำ มาพร้อมระบบวิเคราะห์เทรนด์ แจ้งเตือนราคา และเครื่องมือช่วยตัดสินใจ",
    thumbnail: "/images/projects/gx-trade-thumb.jpg",
    images: [
      "/images/projects/gx-trade-1.jpg",
      "/images/projects/gx-trade-2.jpg",
      "/images/projects/gx-trade-3.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Supabase",
      "PostgreSQL",
      "Recharts",
    ],
    features: [
      {
        title: "ระบบแสดงราคาทองเรียลไทม์",
        description:
          "ติดตามราคาทองคำแท่งและทองรูปพรรณแบบเรียลไทม์ พร้อมกราฟแสดงประวัติราคาย้อนหลัง ระบบแจ้งเตือนเมื่อราคาเปลี่ยนแปลงตามที่กำหนด",
      },
      {
        title: "เครื่องมือวิเคราะห์ทางเทคนิค",
        description:
          "เครื่องมือวิเคราะห์ราคาทองด้วย Indicators ต่างๆ เช่น Moving Averages, RSI, MACD และ Bollinger Bands เพื่อช่วยในการตัดสินใจซื้อ-ขาย",
      },
      {
        title: "ระบบ Gamification",
        description:
          "เพิ่มความน่าสนใจด้วยระบบเลเวล ภารกิจ และรางวัล เพื่อกระตุ้นให้ผู้ใช้กลับมาใช้งานบ่อยขึ้นและเรียนรู้การลงทุนทองคำ",
      },
      {
        title: "ชุมชนนักลงทุน",
        description:
          "พื้นที่สำหรับแลกเปลี่ยนความคิดเห็น วิเคราะห์แนวโน้มราคา และแบ่งปันประสบการณ์การลงทุนทองคำระหว่างสมาชิก",
      },
      {
        title: "ระบบแจ้งเตือนราคา",
        description:
          "ตั้งค่าการแจ้งเตือนเมื่อราคาทองถึงจุดที่กำหนด พร้อมส่งการแจ้งเตือนผ่านช่องทางต่างๆ เช่น Email, Line, และการแจ้งเตือนบนเว็บไซต์",
      },
      {
        title: "แดชบอร์ดส่วนตัว",
        description:
          "ติดตามพอร์ตการลงทุน บันทึกการซื้อ-ขาย และวิเคราะห์ผลตอบแทนการลงทุนทองคำของคุณ",
      },
    ],
    projectDate: "2025-10-15",
    isFeatured: true,
    status: "published",
    viewCount: 0,
    displayOrder: 21,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    liveUrl: "https://gx-trade-nextjs.vercel.app",
    githubUrl: "https://github.com/danya0365/gx-trade-nextjs",
  },
  {
    id: "22",
    slug: "play-game-p2p",
    title: "Play Game P2P - แพลตฟอร์มเกมออนไลน์เล่นกับเพื่อน",
    category: "Full-stack",
    displayOrder: 22,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มเกมออนไลน์แบบ Peer-to-Peer (P2P) ที่ให้คุณสร้างห้อง เล่นเกมกับเพื่อนได้ทันทีมากกว่า 75 เกมทั้งหมวดไพ่ บอร์ด ปาร์ตี้ และเกมลับสมอง โดยไม่ต้องสมัครสมาชิกหรือพึ่งเซิร์ฟเวอร์กลาง ออกแบบด้วย Clean Architecture + Atomic Design เพื่อรองรับการขยายเกมใหม่ได้รวดเร็ว",
    thumbnail: "/images/projects/play-game/thumbnail.jpg",
    images: [
      "/images/projects/play-game/1.jpg",
      "/images/projects/play-game/2.jpg",
      "/images/projects/play-game/3.jpg",
      "/images/projects/play-game/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "LocalForage",
      "PeerJS",
      "React Three Fiber",
      "Rapier",
      "React Hook Form",
      "Zod",
      "next-themes",
    ],
    features: [
      {
        title: "Instant P2P Rooms",
        description:
          "สร้าง/เข้าห้องผ่าน PeerJS ได้ทันที ไม่ต้องสมัครสมาชิกหรือมีบัญชี ทำให้เล่นกับเพื่อนได้ในไม่กี่คลิก",
      },
      {
        title: "75+ Multiplayer Games",
        description:
          "รองรับเกมหลากหลายหมวดหมู่ทั้งการ์ด บอร์ด ปาร์ตี้ คาสิโน และเกมลับสมอง พร้อมระบบจัดหมวดหมู่และค้นหา",
      },
      {
        title: "3D Interactive Canvas",
        description:
          "เกมหลักสร้างด้วย React Three Fiber + Rapier Physics ให้ภาพสวย ลื่นไหล และรองรับทั้ง 2D/3D",
      },
      {
        title: "State Sync & Reconnect",
        description:
          "มีระบบซิงก์สถานะ ระบุการเชื่อมต่อ และรองรับการรีเฟรชหน้าแล้วกลับมาเล่นต่อพร้อมเพื่อนได้",
      },
      {
        title: "Clean Architecture & Atomic Design",
        description:
          "โครงสร้างโปรเจคยึด Clean Architecture + SOLID + Atomic Design แยก layers ชัดเจน เพิ่มเกมใหม่ได้ง่าย",
      },
    ],
    projectDate: "2025-02-10",
    liveUrl: "https://play-game-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/play-game-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "23",
    slug: "game-asset-tool",
    title: "Game Asset Tool - ชุดเครื่องมือจัดการเกมแอสเซ็ตครบวงจร",
    category: "Full-stack",
    displayOrder: 23,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "เว็บแอป Clean Architecture + Atomic Design สำหรับจัดการ Texture, Tilemap, Tileset, Spritesheet และ Animation ในที่เดียว แรงบันดาลใจจาก Aseprite, Tiled Map Editor และ TexturePacker พร้อมระบบ Atlas Packer, Pixel Editor, Tilemap Editor, Spritesheet Timeline, Color Palette, Export หลายแพลตฟอร์ม และ Recent Projects ที่บันทึกในเครื่อง",
    thumbnail: "/images/projects/game-asset-tool/thumbnail.jpg",
    images: [
      "/images/projects/game-asset-tool/1.jpg",
      "/images/projects/game-asset-tool/2.jpg",
      "/images/projects/game-asset-tool/3.jpg",
      "/images/projects/game-asset-tool/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "LocalForage",
      "react-hook-form",
      "Zod",
      "IndexedDB",
      "JSZip",
      "HTML5 Canvas",
    ],
    features: [
      {
        title: "Multi-Editor Workspace",
        description:
          "Pixel, Texture, Tilemap, Spritesheet, Atlas และ Color Palette Editor อยู่ในแพลตฟอร์มเดียว พร้อม UI แนว Windows 98",
      },
      {
        title: "Clean Architecture + Atomic Design",
        description:
          "โครงสร้าง src/domain, infrastructure, presentation ชัดเจน แยก components ตาม Atomic Design ต่อขยายฟีเจอร์ใหม่ได้ไว",
      },
      {
        title: "Recent Projects & Import/Export",
        description:
          "รองรับการสร้าง/เปิดโปรเจค .gat, Import รูป, บันทึก recent projects ใน LocalForage และ export เป็น JSON/JSZip",
      },
      {
        title: "Atlas Packer & Animation Preview",
        description:
          "Pack สไปรต์ด้วย MaxRects algorithm พร้อม animation preview, timeline controls และ auto-detect sprite strip",
      },
      {
        title: "Multi-Platform Export Targets",
        description:
          "เตรียม export presets สำหรับ Cocos, Phaser, Unity, Godot, LibGDX, GameMaker, CSS Sprites และ JSON",
      },
    ],
    projectDate: "2025-02-28",
    liveUrl: "https://game-asset-tool-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/game-asset-tool-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "24",
    slug: "retro-pixel-garden",
    title: "Retro Pixel Garden - Stardew-style Multiplayer Pixel World",
    category: "Full-stack",
    displayOrder: 24,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "Open-world pixel garden ที่ผสม Stardew Valley กับ Dragon Quest Tact มาอยู่ในเว็บ Clean Architecture + Atomic Design สไตล์ Windows 98 โดยใช้ Next.js 15 + React Three Fiber + Colyseus ให้ผู้เล่นปลูกผัก สร้างสวน และเดินเล่นในโลก 3D แบบ Real-time Multiplayer (P2P fallback) พร้อม UI อินเทอร์เน็ตยุค 90 ที่พิถีพิถัน",
    thumbnail: "/images/projects/retro-pixel-garden/thumbnail.jpg",
    images: [
      "/images/projects/retro-pixel-garden/1.jpg",
      "/images/projects/retro-pixel-garden/2.jpg",
      "/images/projects/retro-pixel-garden/3.jpg",
      "/images/projects/retro-pixel-garden/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "LocalForage",
      "Colyseus",
      "React Three Fiber",
      "Rapier Physics",
      "PeerJS",
      "Supabase (future-ready)",
      "react-hook-form",
      "Zod",
      "next-themes",
    ],
    features: [
      {
        title: "Retro IE5 Browser UI",
        description:
          "จำลอง Internet Explorer 5 + Windows 98 อย่างละเอียด ทั้ง Title Bar, Menu, Toolbar, Status Bar, Retro CSS และ Theme toggle",
      },
      {
        title: "Real-time Multiplayer Garden",
        description:
          "เชื่อมต่อ Colyseus game server (พร้อม monitor & playground) ให้ปลูก/รดน้ำ/เก็บเกี่ยว/วางวัตถุร่วมกับเพื่อนแบบ Realtime state sync",
      },
      {
        title: "3D World with React Three Fiber",
        description:
          "สร้างโลก Stardew-style ด้วย React Three Fiber + Rapier Physics มี Terrain, Trees, Objects, Lighting, Day/Night cycle และ Particle Effects",
      },
      {
        title: "Persistent Local Player System",
        description:
          "Zustand + LocalForage สำหรับ user profile, character stats, hotbar, inventory, notifications และ reconnect-safe state",
      },
      {
        title: "Clean Architecture & Atomic Design",
        description:
          "โครงสร้าง project แบ่ง domain/infrastructure/presentation + Atomic Design components, presenter pattern, และ hook-driven layout presets",
      },
    ],
    projectDate: "2025-03-05",
    liveUrl: "https://retro-pixel-art-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/retro-pixel-art-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "25",
    slug: "converge-omnichannel",
    title: "Converge - Omnichannel Chat & AI Customer Service Platform",
    category: "Full-stack",
    displayOrder: 25,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์ม Omnichannel Chat ที่รวม Facebook, Instagram, LINE, WhatsApp, TikTok, Shopee, Lazada และ Live Chat ไว้ในจอเดียว พร้อม AI Chatbot 24/7, Visual Flow Builder แบบ No-Code, Broadcast Campaign, Analytics และ Team Collaboration ออกแบบด้วย Next.js 15 + Clean Architecture + Atomic Design และ Presenter Pattern",
    thumbnail: "/images/projects/converge/thumbnail.jpg",
    images: [
      "/images/projects/converge/1.jpg",
      "/images/projects/converge/2.jpg",
      "/images/projects/converge/3.jpg",
      "/images/projects/converge/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "LocalForage",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Next Themes",
      "Axios",
      "Lucide React",
    ],
    features: [
      {
        title: "Unified Inbox & Channel Integrations",
        description:
          "รวมทุกข้อความจาก Facebook, IG, LINE OA, WhatsApp, TikTok, Shopee, Lazada และ Live Chat ไว้ในอินบ็อกซ์เดียว พร้อม customer profile และ message templates",
      },
      {
        title: "AI Chatbot & Visual Flow Builder",
        description:
          "AI Chatbot ตอบอัตโนมัติ 24/7 เรียนรู้จากข้อมูลแบรนด์ พร้อม Flow Builder แบบ Drag & Drop ที่สร้าง workflow และ handoff ได้โดยไม่ต้องเขียนโค้ด",
      },
      {
        title: "Automation & Broadcast Campaigns",
        description:
          "Auto-reply, smart routing, segmentation และ broadcast แคมเปญแบบ Rich Message/Schedule พร้อม campaign analytics",
      },
      {
        title: "Analytics Dashboard & Team Collaboration",
        description:
          "Real-time dashboard, conversation/agent analytics, leaderboard, internal notes, team inbox, agent status และ role-based access",
      },
      {
        title: "Clean Architecture + Atomic Design",
        description:
          "ยึด Clean Architecture, SOLID, Presenter pattern, Atomic Design components แยก domain/infrastructure/presentation พร้อม hooks และ repositories mock-ready",
      },
    ],
    projectDate: "2025-03-20",
    liveUrl: "https://converge-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/converge-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "26",
    slug: "cinemax-microdrama",
    title: "CINEMAX - Micro Drama Streaming Platform",
    category: "Full-stack",
    displayOrder: 26,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มสตรีมมิ่งซีรีย์ไมโครดราม่าที่ออกแบบมาสำหรับคอนเทนต์แนวตั้งและซีรีย์สั้น ตอนแรกฟรี จ่ายตามตอนหรือสมัครสมาชิก เชื่อม Supabase Auth + Database, Stripe Payments, i18n 3 ภาษา, Clean Architecture + Presenter Pattern + Atomic Design พร้อม Admin Dashboard, Search & Discovery และ Personalized Watchlist",
    thumbnail: "/images/projects/cinemax/thumbnail.jpg",
    images: [
      "/images/projects/cinemax/1.jpg",
      "/images/projects/cinemax/2.jpg",
      "/images/projects/cinemax/3.jpg",
      "/images/projects/cinemax/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase",
      "Stripe",
      "React Hook Form",
      "Zod",
      "Next Themes",
      "Axios",
      "LocalForage",
      "HTML2Canvas",
    ],
    features: [
      {
        title: "Episode 1 Free + Hybrid Monetization",
        description:
          "ตอนแรกฟรีทุกเรื่อง รองรับ Pay-per-episode และ Membership พร้อมระบบล็อกตอน, continue watching และ my list @TODO.md#5-150",
      },
      {
        title: "Supabase Auth + Profile Hub",
        description:
          "Supabase Auth + Google OAuth, Zustand auth store, โปรไฟล์/การตั้งค่า/ประวัติการดู/รายการโปรดในหน้าเดียว @TODO.md#55-117",
      },
      {
        title: "Stripe Payments & Subscription Center",
        description:
          "ผสาน Stripe ครบ flow (purchase, history, success/cancel) พร้อม subscription plans และ payment reports @TODO.md#118-134",
      },
      {
        title: "Search, Discovery & Admin Dashboard",
        description:
          "Full-text search, daily rating/trending algorithm, analytics dashboard, admin CRUD ซีรีย์/ตอน/หมวดหมู่/ผู้ใช้ครบชุด @TODO.md#154-180",
      },
      {
        title: "i18n + Clean Architecture",
        description:
          "รองรับ TH/EN/CHN, translation files + useLocale hook, โครงสร้าง Clean Architecture + Presenter pattern + Atomic Design @TODO.md#136-175",
      },
    ],
    projectDate: "2025-04-05",
    liveUrl: "https://cinemax-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/cinemax-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "27",
    slug: "nextflix-streaming",
    title: "Nextflix - Modern Netflix Clone with Dual Layouts",
    category: "Full-stack",
    displayOrder: 27,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "Netflix Clone ที่โฟกัส UX ทั้งแนว Modern Glassmorphism และ Retro Windows 98 สร้างบน Next.js 16 + TypeScript + Tailwind CSS 4 + Zustand + Presenter Pattern พร้อม Theme Provider, Main/Retro Layout, Reusable UI Kit, HomePresenter + Mock Repository, Watchlist Rows, Hero, Content Cards และโรดแมพเชื่อม Supabase + Auth + Video Player + Recommendations",
    thumbnail: "/images/projects/nextflix/thumbnail.jpg",
    images: [
      "/images/projects/nextflix/1.jpg",
      "/images/projects/nextflix/2.jpg",
      "/images/projects/nextflix/3.jpg",
      "/images/projects/nextflix/4.jpg",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "React Spring",
      "React Hook Form",
      "Zod",
      "Next Themes",
      "Axios",
      "LocalForage",
      "HTML2Canvas",
    ],
    features: [
      {
        title: "Dual Layout System",
        description:
          "MainLayout แบบ glassmorphism + RetroLayout สไตล์ IE5/Windows 98 พร้อม header, toolbar, status bar, scroll bar mock ครบถ้วน @TODO.md#21-52",
      },
      {
        title: "Theme Provider & Animated Toggle",
        description:
          "ติดตั้ง next-themes + react-spring สำหรับ ThemeToggle, dark/light persistence, hook-driven provider ใน root layout @TODO.md#23-36",
      },
      {
        title: "Reusable UI Kit",
        description:
          "Modal, Button, Input, Select, Popover, Form components รองรับหลาย variant + animation ตาม guideline Atomic Design @TODO.md#47-54",
      },
      {
        title: "Home Presenter + Mock Repository",
        description:
          "Clean Architecture แยก Presenter/View/Repository, HeroSection, ContentRow, ContentCard, loading/error states, server metadata สำหรับ SEO @TODO.md#55-67",
      },
      {
        title: "Roadmap: Browse, Auth, Player, Supabase",
        description:
          "วางแผน Core Pages, Video Player, Authentication, Continue Watching, Recommendations, Supabase integration + RLS policies @TODO.md#69-224",
      },
    ],
    projectDate: "2025-04-20",
    liveUrl: "https://nextflix-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/nextflix-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "28",
    slug: "plugpay-payments",
    title: "PlugPay - Multi-Project Donate & Invoice Platform",
    category: "Full-stack",
    displayOrder: 28,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์ม PlugPay สำหรับ Dev/Creator ที่ต้องการรับ Donate, Payment Link และออก Invoice ให้หลายโปรเจคในที่เดียว มี MainLayout + RetroLayout สลับได้ด้วย Zustand, Theme Provider (next-themes), Reusable UI Kit, LandingView ตาม Presenter Pattern รองรับ Stripe + Omise, Webhook, Dashboard, และเตรียม Supabase Repo",
    thumbnail: "/images/projects/plugpay/thumbnail.jpg",
    images: [
      "/images/projects/plugpay/1.jpg",
      "/images/projects/plugpay/2.jpg",
      "/images/projects/plugpay/3.jpg",
      "/images/projects/plugpay/4.jpg",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase",
      "React Hook Form",
      "Zod",
      "Next Themes",
      "React Spring",
      "Axios",
      "LocalForage",
      "HTML2Canvas",
    ],
    features: [
      {
        title: "Dual Layout + Theme System",
        description:
          "MainLayout glassmorphism + RetroLayout IE5 พร้อม Header/Footer/Theme Toggle, React Spring animations และ Zustand layout switcher ตาม Clean Architecture @prompt/INIT_PROJECT.md#1-27 @src/presentation/components/landing/LandingView.tsx#1-50",
      },
      {
        title: "Multi-Project Management",
        description:
          "สร้างหลายโปรเจค แยกรายได้ เปิด/ปิด donate ต่อโปรเจค ใช้ project_slug สำหรับฝังลิงก์ รองรับ dev/creator หลายเว็บ @prompt/FEATURES.md#21-40",
      },
      {
        title: "Payment Links & Donate Widgets",
        description:
          "ออกลิงก์รับเงินแบบ Donate, Fixed amount, Custom amount พร้อมข้อความผู้ชำระ ฝังในเว็บหรือแชร์ได้ทันที @prompt/FEATURES.md#31-38",
      },
      {
        title: "Invoice, Payer & Billing Workflow",
        description:
          "สร้าง invoice หลายรายการต่อใบ ตั้ง due date, draft/sent/paid/expired, เก็บข้อมูล payer และผูก payment อัตโนมัติ @prompt/FEATURES.md#41-75",
      },
      {
        title: "Stripe + Omise + Webhook Dashboard",
        description:
          "รองรับ Stripe Card/Online และ Omise QR/PromptPay พร้อม realtime status, webhook idempotent, dashboard สรุปรายได้ตามโปรเจค/ช่องทาง/ช่วงเวลา @prompt/FEATURES.md#54-102",
      },
    ],
    projectDate: "2025-05-05",
    liveUrl: "https://plugpay-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/plugpay-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "29",
    slug: "neobb-modern-community-platform",
    title: "NeoBB - Modular Community Platform",
    category: "Full-stack",
    displayOrder: 29,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "NeoBB คือแพลตฟอร์ม Web Forum / Community ยุคใหม่ที่ยึดหลัก Clean Architecture + Atomic Design แยก MainLayout สมัยใหม่และ RetroLayout สไตล์ IE5 ให้ปรับธีมและเลย์เอาต์ได้แบบ real-time พร้อมระบบ Portal Widget, Forum C/B/T/P ตามมาตรฐาน, User & Role Management, Theme & Plugin System และเตรียมเชื่อมต่อ Supabase สำหรับฟีเจอร์ realtime/community ecosystem แบบเต็มตัว",
    thumbnail: "/images/projects/neobb/thumbnail.jpg",
    images: [
      "/images/projects/neobb/1.jpg",
      "/images/projects/neobb/2.jpg",
      "/images/projects/neobb/3.jpg",
      "/images/projects/neobb/4.jpg",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase-ready",
      "React Hook Form",
      "Zod",
      "Axios",
      "LocalForage",
      "React Spring",
      "next-themes",
    ],
    features: [
      {
        title: "Portal-first Experience",
        description:
          "Landing Portal แบบ Drag & Drop วาง Widget ได้หลายชุด (Latest Threads, Trending Topics, Online Users, Announcements) และสลับ layout ตามบทบาทผู้ใช้",
      },
      {
        title: "Widget & Plugin System",
        description:
          "Widget เป็นโมดูลแยก เปิด/ปิด/จัดเรียงง่าย รองรับ community plugin ผ่าน hook/event-based pipeline เพื่อขยาย UI, API และ Permission",
      },
      {
        title: "Forum Core Architecture",
        description:
          "Category → Board → Thread → Post ครบถ้วน มี Thread Prefix, Mention, Reaction, Markdown Editor, Pin/Lock/Archive และ search/filter รายละเอียด",
      },
      {
        title: "User, Role & Reputation",
        description:
          "ระบบโปรไฟล์สมัยใหม่พร้อม Badge, Reputation, Role-based Permission, Activity Log, Moderation tools และ Team dashboard",
      },
      {
        title: "Dual Layout + Theme Engine",
        description:
          "MainLayout Glassmorphism + RetroLayout IE5 พร้อม ThemeProvider (next-themes), Zustand layout switcher, Dark/Light toggle และ Retro CSS assets",
      },
      {
        title: "Clean Architecture & Mock Repository",
        description:
          "ยึด SOLID, Clean Architecture, Presenter Pattern, Atomic Design, mock repository เต็มรูปแบบเพื่อเชื่อม Supabase/Postgres ได้รวดเร็วในเฟสต่อไป",
      },
    ],
    client: "Neo Bulletin Board",
    projectDate: "2025-05-20",
    liveUrl: "https://neobb-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/neobb-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "30",
    slug: "design-kit-component-marketplace",
    title: "Design Kit - Component Marketplace & Export Engine",
    category: "Full-stack",
    displayOrder: 30,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "Design Kit คือแพลตฟอร์ม Component Marketplace ที่รวม UI ชิ้นงานระดับพรีเมียมจากครีเอเตอร์ทั่วโลก ให้ดีไซเนอร์อัปโหลด/ตั้งราคา และให้นักพัฒนา Browse → Preview → Export ไป HTML, React, Next.js ได้ทันที พร้อมระบบ Dual Layout (Modern & Retro), Presenter Pattern, Supabase-ready Data Layer, และ Export Engine ที่ต่อยอดได้หลายสไตล์ชี้ชัดตามหลัก Clean Architecture + Atomic Design",
    thumbnail: "/images/projects/design-kit/thumbnail.jpg",
    images: [
      "/images/projects/design-kit/1.jpg",
      "/images/projects/design-kit/2.jpg",
      "/images/projects/design-kit/3.jpg",
      "/images/projects/design-kit/4.jpg",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase",
      "React Hook Form",
      "Zod",
      "next-themes",
      "React Spring",
      "LocalForage",
      "Axios",
      "HTML2Canvas",
    ],
    features: [
      {
        title: "Component Marketplace Core",
        description:
          "ระบบจัดการ Component เต็มรูปแบบ (metadata, preview, tags, props/variants) พร้อมหมวดหมู่/แท็ก ค้นหา และ featured listing สำหรับทีม dev, designer, startup",
      },
      {
        title: "Design-to-Code Export Engine",
        description:
          "เลือก platform (HTML, React, Next.js) + style system (CSS, Tailwind, CSS Module) สร้างโค้ดทันทีจาก template-based generator พร้อมแผนขยาย Vue/Svelte/Flutter",
      },
      {
        title: "Creator Economy Workflow",
        description:
          "ครีเอเตอร์สร้าง component, ตั้งราคา/แจกฟรี, ดูสถิติ download, และเตรียมเชื่อม Stripe + Supabase Profiles เพื่อรายได้ recurring ของ community",
      },
      {
        title: "Dual Layout Experience",
        description:
          "MainLayout สมัยใหม่ + RetroLayout IE5 ที่สลับได้ real-time ผ่าน Zustand + next-themes, ครบทั้ง Header/Footer/Widget, animation จาก React Spring และ retro CSS assets",
      },
      {
        title: "Marketplace & Licensing",
        description:
          "รองรับ Free/One-time/Bundle ราคาพร้อม License (Personal/Commercial), Cart/Checkout flow, Purchase history และระบบ access download/export รายผู้ใช้",
      },
      {
        title: "Clean Architecture + Presenter Pattern",
        description:
          "แบ่ง domain / infrastructure / presentation, presenter & mock repository, server/client hooks, Atomic Design components, Supabase SSR client, พร้อม analytics stats (components, creators, downloads)",
      },
    ],
    client: "Design Kit",
    projectDate: "2025-06-15",
    liveUrl: "https://design-kit-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/design-kit-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "31",
    slug: "next-link-social-platform",
    title: "Next Link - แพลตฟอร์มโซเชียลมีเดียครบวงจร",
    category: "Full-stack",
    displayOrder: 31,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "แพลตฟอร์มโซเชียลมีเดียแบบครบวงจรที่อิงจาก Facebook พร้อมระบบ News Feed, Profile, Messages, Groups, Events, Marketplace, Watch และ Notifications ออกแบบด้วย Clean Architecture + Presenter Pattern + Atomic Design รองรับ Dark Mode, Responsive Design และ Real-time Updates ผ่าน Zustand + Supabase พร้อมหน้า Landing Page ที่สวยงามและระบบ Authentication ครบถ้วน",
    thumbnail: "/images/projects/next-link/thumbnail.jpg",
    images: [
      "/images/projects/next-link/1.jpg",
      "/images/projects/next-link/2.jpg",
      "/images/projects/next-link/3.jpg",
      "/images/projects/next-link/4.jpg",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Supabase",
      "React Hook Form",
      "Zod",
      "next-themes",
      "LocalForage",
      "Lucide React",
      "Axios",
      "html2canvas",
      "react-to-print",
    ],
    features: [
      {
        title: "News Feed & Post System",
        description:
          "ฟีดข่าวแบบ Real-time พร้อมระบบสร้างโพสต์ รองรับรูปภาพ/วิดีโอ, Reactions 6 แบบ (Like, Love, Haha, Wow, Sad, Angry), Comments, Shares และ Privacy Settings (Public, Friends, Only Me)",
      },
      {
        title: "Profile & Settings Hub",
        description:
          "หน้าโปรไฟล์ครบถ้วน Cover Photo, Avatar, Bio, Timeline, Photos Grid, Friends List และหน้า Settings แยกหมวดหมู่ (General, Privacy, Notification, Security, Account)",
      },
      {
        title: "Messenger & Real-time Chat",
        description:
          "ระบบส่งข้อความพร้อม Conversations List, Unread Indicator, Online Status, Typing Indicator และ Message Templates รองรับ Direct Message และ Group Chat",
      },
      {
        title: "Friends Management",
        description:
          "จัดการเพื่อน Friend Requests (Received/Sent), Suggestions, Mutual Friends, Send/Accept/Decline Request และ Unfriend ได้ง่าย",
      },
      {
        title: "Groups & Events Platform",
        description:
          "สร้างและเข้าร่วม Groups หลายหมวดหมู่ (Public, Private, Secret) พร้อมระบบ Events ที่มี RSVP (Going, Maybe, Can't Go), Location, Price และ Calendar View",
      },
      {
        title: "Marketplace & Watch",
        description:
          "Marketplace ซื้อขายสินค้า 11 หมวดหมู่ พร้อม Item Detail, Seller Rating และ Watch สำหรับวิดีโอ Categories, Recommended Videos และ Video Player",
      },
      {
        title: "Global Search & Discovery",
        description:
          "ค้นหาทุกอย่างในที่เดียว Posts, People, Photos, Videos, Pages, Groups, Events พร้อม Filters และ Recent Searches",
      },
      {
        title: "Notification Center",
        description:
          "แจ้งเตือนทุกประเภท Friend Request, Reactions, Comments, Mentions, Shares พร้อม Real-time Updates และ Mark as Read",
      },
      {
        title: "Authentication & User Management",
        description:
          "ระบบ Login/Register ครบถ้วน Social Login Buttons, Remember Me, Forgot Password, Email Verification และ Session Persistence",
      },
      {
        title: "Clean Architecture & Presenter Pattern",
        description:
          "โครงสร้างตาม Clean Architecture แยก Domain/Infrastructure/Presentation, Presenter/View Pattern, Mock Repositories พร้อม Supabase-ready และ Atomic Design Components",
      },
    ],
    client: "Next Link Social",
    projectDate: "2025-07-01",
    liveUrl: "https://next-link-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/next-link-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
  },
  {
    id: "32",
    slug: "racing-simulation-queue-booking",
    title: "Racing Simulation Queue Booking - ระบบจองคิวรถแข่งจำลอง",
    category: "Full-stack",
    displayOrder: 32,
    isCleanCode: true,
    isMock: false,
    isFuture: false,
    description:
      "ระบบจัดการคิวและจองสำหรับศูนย์รถแข่งจำลองแบบครบวงจร พร้อมระบบ Queue Management แบบ Real-time, Booking System ที่ใช้งานง่าย, Leaderboard, Rewards & Achievements, Gift Cards, Membership และ Tournaments รองรับทั้งลูกค้า Walk-in และจองล่วงหน้า พร้อม Admin Dashboard สำหรับจัดการเครื่องและการจอง",
    thumbnail: "/images/projects/racing-queue-booking/thumbnail.jpg",
    images: [
      "/images/projects/racing-queue-booking/1.jpg",
      "/images/projects/racing-queue-booking/2.jpg",
      "/images/projects/racing-queue-booking/3.jpg",
      "/images/projects/racing-queue-booking/4.jpg",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Tailwind CSS 4",
      "Supabase",
      "Zustand",
      "React Hook Form",
      "Zod",
      "React Spring",
      "Day.js",
      "LocalForage",
      "QRCode React",
      "html2canvas",
      "react-to-print",
    ],
    features: [
      {
        title: "Queue Management แบบ Real-time",
        description:
          "ระบบจัดการคิวแบบ Real-time ติดตามสถานะคิว อัพเดทอัตโนมัติ รองรับทั้งลูกค้า Walk-in และจองล่วงหน้า",
      },
      {
        title: "Booking System ที่ใช้งานง่าย",
        description:
          "จองคิวออนไลน์ได้ง่าย เลือกวัน-เวลา และเครื่องที่ต้องการ พร้อม Quick Booking สำหรับลูกค้าประจำ",
      },
      {
        title: "Leaderboard & Rankings",
        description:
          "ติดตามผลการแข่งขันและอันดับของคุณ เปรียบเทียบกับผู้เล่นอื่นๆ",
      },
      {
        title: "Rewards & Achievements",
        description:
          "สะสมแต้มและปลดล็อค Achievement จากการเล่น รับของรางวัลพิเศษ",
      },
      {
        title: "Gift Cards & Referral Program",
        description:
          "ซื้อและใช้ Gift Cards ได้ง่าย พร้อมโปรแกรมแนะนำเพื่อนรับรางวัล",
      },
      {
        title: "Membership & Packages",
        description:
          "สมัครเป็นสมาชิกเพื่อรับสิทธิพิเศษ เลือกแพ็กเกจที่เหมาะกับคุณ",
      },
      {
        title: "Gallery & Tournaments",
        description:
          "แชร์ภาพความทรงจำจากการแข่งขัน เข้าร่วมการแข่งขันพิเศษ",
      },
      {
        title: "Admin Dashboard",
        description:
          "แดชบอร์ดสำหรับ Admin ดูสถิติ จัดการเครื่อง และบริหารการจองได้ง่าย",
      },
      {
        title: "Machine Management",
        description:
          "ติดตามสถานะเครื่องแบบ Real-time ดูว่าเครื่องไหนว่างหรือกำลังใช้งาน",
      },
      {
        title: "Clean Architecture",
        description:
          "โครงสร้างตาม Clean Architecture แยก Domain/Infrastructure/Presentation ชัดเจน บำรุงรักษาง่าย",
      },
    ],
    client: "Racing Simulation Center",
    projectDate: "2026-01-22",
    liveUrl: "https://racing-simulation-queue-booking-nextjs.vercel.app/",
    githubUrl: "https://github.com/danya0365/racing-simulation-queue-booking-nextjs",
    isFeatured: true,
    status: "published",
    viewCount: 0,
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
