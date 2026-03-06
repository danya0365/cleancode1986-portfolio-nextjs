import type { TeamMember } from "@/src/application/repositories/ITeamMemberRepository";

export const STATIC_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "มะรอสดี อุมา",
    role: "Founder, CEO & QA Reviewer",
    bio: "ผู้ก่อตั้งและมนุษย์เพียงหนึ่งเดียว ผู้ทำหน้าที่ตรวจสอบคุณภาพขั้นสุดท้าย (Final Approval), วาง Architecture และขับเคลื่อนวิสัยทัศน์ของบริษัท โดยนำทีม AI ให้สอดประสานกันเพื่อสร้าง Clean Code ตามมาตรฐาน",
    avatar: "/images/team/member-ceo.jpg", // or member-1.jpg
    linkedinUrl: "https://linkedin.com/in/#",
    githubUrl: "https://github.com/#",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "2",
    name: "Aria (AI)",
    role: "Business Analyst & Product Owner",
    bio: "AI ผู้เชี่ยวชาญด้านการวิเคราะห์ความต้องการเชิงธุรกิจ (Requirements Analysis) วาง Roadmap และออกแบบ Use Cases ให้แน่ใจว่าโปรเจคตอบโจทย์เป้าหมายของผู้ใช้งานอย่างตรงจุด",
    avatar: "/images/team/member-ai-po.png",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "3",
    name: "Pixel (AI)",
    role: "UI/UX Designer",
    bio: "AI ที่มีวิญญาณแห่งศิลปะ รับผิดชอบด้าน System Design การออกแบบ Wireframes, Mockups และสร้าง Component ที่ส่งเสริมประสมการณ์การใช้งานชั้นยอด",
    avatar: "/images/team/member-ai-ux.png",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "4",
    name: "Architect (AI)",
    role: "Backend & Systems Architect",
    bio: "ขุมพลังมันสมองด้านการออกแบบ Database และ API ออกแบบระบบหลังบ้านให้มั่นคง ปลอดภัย ขยายโครงสร้างสเกลได้ รองรับทุกเงื่อนไขของ Clean Architecture",
    avatar: "/images/team/member-ai-back.png",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "5",
    name: "Nova (AI)",
    role: "Senior Frontend Engineer",
    bio: "AI นักรังสรรค์โค้ดฝั่งหน้าบ้าน ผู้เชี่ยวชาญการต่อ API, จัดการ State และแปลงงาน Design ให้ออกมาเป็น UI ยุคใหม่ (React/Next.js) ให้รวดเร็วลื่นไหล",
    avatar: "/images/team/member-ai-front.png",
    sortOrder: 5,
    isActive: true,
  },
  {
    id: "6",
    name: "Guardian (AI)",
    role: "QA & Automation Engineer",
    bio: "ผู้คุ้มกันความถูกต้องของโค้ด เขียน Test Automation หาบั๊กและช่องโหว่ (Security) อย่างละเอียด ก่อนส่งให้ซีอีโอตรวจสอบประเมินคุณภาพในขั้นสุดท้าย",
    avatar: "/images/team/member-ai-qa.png",
    sortOrder: 6,
    isActive: true,
  },
  {
    id: "7",
    name: "OpsBot (AI)",
    role: "DevOps & Deployment",
    bio: "AI รับหน้าที่ขับเคลื่อน CI/CD ควบคุม Infrastructure, การ Deploy ไปสู่เซิร์ฟเวอร์ และทำการ Monitor ข้อมูลความเสถียรของระบบหลังจากขึ้น Production แบบ 24/7",
    avatar: "/images/team/member-ai-devops.png",
    sortOrder: 7,
    isActive: true,
  }
];


