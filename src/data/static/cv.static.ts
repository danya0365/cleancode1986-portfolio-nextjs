
export interface TeamMemberCV {
  memberId: string;
  professionalSummary: string;
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    description?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export const STATIC_CVS: Record<string, TeamMemberCV> = {
  "1": {
    memberId: "1",
    professionalSummary: "ผู้ก่อตั้งและซีอีโอแห่ง Clean Code 1986 ด้วยประสบการณ์กว่า 10 ปีในวงการซอฟต์แวร์ อัจฉริยะด้าน System Architecture และผู้เชี่ยวชาญระดับ Top-Tier ในการเขียน Clean Code ที่สามารถผสานการทำงานระหว่างทีมนักพัฒนามนุษย์และ AI Agents ได้อย่างสมบูรณ์แบบ หลงใหลในการใช้เทคโนโลยีขั้นสุด (Bleeding-edge) อาทิ Next.js 15+, React 19, และ Edge-Ready Database (Turso, SQLite) เพื่อสร้างสรรค์โปรดักส์ที่เร็ว แรง และสเกลได้ระดับโลก",
    experience: [
      {
        company: "Clean Code 1986",
        role: "Founder, CEO & Lead Architect",
        period: "2024 - ปัจจุบัน",
        description: "บุกเบิกและก่อตั้งซอฟต์แวร์เฮาส์แนวใหม่ที่ขับเคลื่อนคลื่นลูกใหม่ของ AI ผสมผสานกับการตรวจสอบคุณภาพโดยมนุษย์ (Human-in-the-loop)",
        achievements: [
          "ออกแบบสถาปัตยกรรมระดับ Enterprise 'Clean Architecture' สำหรับทุกอภิมหาโปรเจคของบริษัท การันตีการทำงานแบบ Zero-Downtime",
          "เชี่ยวชาญเทคโนโลยีโลกอนาคต: Next.js 15, React 19, Tailwind CSS 4, React Spring และ Edge-based Architecture",
          "บัญชาการกองทัพ AI Agents กว่า 6 ตัว (รวมอัจฉริยะอย่าง Gemini 3.1 Pro) ให้ทำงานประสานกันสร้างระบบแพลตฟอร์มขั้นสูงแบบ Full-stack",
          "พลิกโฉมวงการ Database ยุคใหม่ด้วยแนวคิด Edge-Ready Persistence โดยรันระบบบน Turso (libSQL/SQLite) และ Supabase เพื่อลด Latency เหลือเสี้ยววินาที",
          "เชี่ยวชาญการควบรวมระบบ (Third-Party Ecosystem Integration) ระดับลึก เชื่อมต่อระบบ Authentication และ API เข้ากับบริษัทยักษ์ใหญ่ของโลกอย่างไร้รอยต่อ เช่น LINE OA, Facebook Login, Google OAuth, และ Payment Gateways ระดับโลกอย่าง Stripe และ Omise",
          "สรรค์สร้างผลงานระดับ Masterpiece มากมาย เช่น ระบบ Quick Queue (Multi-Storefront UI สลับ Layout ทันที), Haqq Vault (ฐานข้อมูลพร้อม Full-text Search อิสลาม), PromptUI Gallery แสนสวยด้วย Vanilla CSS ขั้นเทพ และ Al-Quran Web App"
        ]
      },
      {
        company: "Freelance",
        role: "Full Stack React Developer",
        period: "เม.ย. 2023 - ปัจจุบัน",
        description: "พัฒนาระบบเกม RPG และระบบแอปพลิเคชันที่ซับซ้อนด้วยเทคโนโลยีสมัยใหม่",
        achievements: [
          "พัฒนาเกม RPG ด้วย Next.js และ React-spring",
          "ตั้งค่าระบบ Backend ด้วย Supabase, PostgreSQL และจัดการ Performance ด้วย Upstash (Redis)",
          "เชื่อมต่อระบบ Payment Gateway (Omise) และระบบส่งอีเมล (Sendgrid)"
        ]
      },
      {
        company: "Freelance",
        role: "React Native & Laravel Developer",
        period: "ม.ค. 2024 - พ.ค. 2024",
        description: "พัฒนาระบบ Mobile Application สำหรับธุรกิจหลากหลายประเภท",
        achievements: [
          "พัฒนา Royalty Reward Application ครบวงจร (มี.ค. 2024 - พ.ค. 2024)",
          "พัฒนา Loan Application สำหรับให้บริการสินเชื่อ (ม.ค. 2024 - มี.ค. 2024)",
          "เชื่อมต่อ React Native Expo เข้ากับแพลตฟอร์ม Laravel และ PostgreSQL"
        ]
      },
      {
        company: "True Digital",
        role: "Senior iOS Developer",
        period: "ก.ย. 2022 - มี.ค. 2023",
        description: "พัฒนาและดูแลบำรุงรักษา True ID Application",
        achievements: [
          "พัฒนาแอปพลิเคชันด้วย SwiftUI และ Swift โดยใช้สถาปัตยกรรม MVVM และ Clean Architecture",
          "เขียน Unit Testing และผสานการทำงานกับ Combine Framework",
          "ทำงานภายใต้กระบวนการ Agile/Scrum (Jira) และ Git Flow (Bitbucket)"
        ]
      },
      {
        company: "Skilllane Education",
        role: "Senior Software Engineer",
        period: "ม.ค. 2021 - ส.ค. 2022",
        description: "พัฒนาระบบแพลตฟอร์มการเรียนรู้ Skilllane (Website & Mobile Apps)",
        achievements: [
          "พัฒนาระบบ Web แพลตฟอร์มด้วย Next.js, Nest.js และ Ruby on Rails",
          "พัฒนา Mobile Application ด้วย React Native และ Swift",
          "ดูแลระบบ Authentication ด้วย C# (Identity Server 4)"
        ]
      },
      {
        company: "ARMS Thailand",
        role: "Senior Mobile Developer",
        period: "มิ.ย. 2019 - พ.ย. 2020",
        description: "พัฒนาแอปพลิเคชันระดับองค์กรสำหรับบริษัทรถยนต์และโรงพยาบาล",
        achievements: [
          "พัฒนาแอป Honda Connect (Swift) ระบบ Car Control, GPS Tracking และ Find My Car",
          "พัฒนาบัญชีแอปพลิเคชัน RAMA Duty สำหรับอำนวยความสะดวกให้แพทย์ (React Native, Java Spring Boot)"
        ]
      },
      {
        company: "Excel Bangkok",
        role: "Senior Software Engineer",
        period: "มี.ค. 2016 - พ.ค. 2019",
        description: "พัฒนาซอฟต์แวร์และแอปพลิเคชันให้กับแบรนด์ชั้นนำ",
        achievements: [
          "สร้างระบบ Unilever BigData Report ด้วย Laravel",
          "สร้างแอปพลิเคชัน Carabao ประเทศจีนด้วย React Native และ Laravel Backend",
          "พัฒนาแอป SportsIn Cycling, BaanRao และ SiamPiwat บนแพลตฟอร์ม Swift"
        ]
      }
    ],
    education: [
      {
        institution: "มหาวิทยาลัยเกษมบัณฑิต (Kasem Bundit University)",
        degree: "ปริญญาตรี - วิทยาการคอมพิวเตอร์ (Computer Science)",
        period: "2005 - 2009",
      },
      {
        institution: "โรงเรียนดารุสสลาม",
        degree: "มัธยมศึกษา - สายวิทย์-คณิต (Comscience)",
        period: "1999 - 2005",
      },
      {
        institution: "โรงเรียนบ้านมะรือโบตก",
        degree: "ประถมศึกษา",
        period: "1993 - 1999",
      }
    ],
    skills: [
      {
        category: "Frontend & UI/UX Magic",
        items: ["React 19", "Next.js 15+", "React Native", "SwiftUI", "Tailwind CSS 4", "Vanilla CSS", "React Spring", "Zustand"]
      },
      {
        category: "Backend & Systems",
        items: ["Node.js", "NestJS", "PHP / Laravel", "Ruby on Rails", "Java / Spring Boot", "Clean Architecture", "Edge Computing"]
      },
      {
        category: "Database & AI Ecosystem",
        items: ["Turso (libSQL/SQLite)", "Supabase", "PostgreSQL", "Prisma", "AI Agents (Gemini 3.1 Pro)", "Microservices"]
      },
      {
        category: "Game Development & 3D",
        items: ["Three.js", "Phaser", "Godot Engine", "WebGL"]
      },
      {
        category: "Enterprise API & Ecosystems",
        items: ["LINE OA (Messaging API, LIFF)", "Google Workspace & OAuth", "Facebook Meta API", "Stripe & Omise Gateway", "SendGrid", "Mailchimp"]
      }
    ],
    languages: [
      { language: "ภาษาไทย", proficiency: "Native" },
      { language: "ภาษาอังกฤษ", proficiency: "Intermediate" },
      { language: "ภาษามลายู", proficiency: "Intermediate" }
    ]
  }
};
