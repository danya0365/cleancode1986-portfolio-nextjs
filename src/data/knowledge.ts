/**
 * Knowledge Context for AI Chat Assistant
 * รวบรวมข้อมูลจาก master และ mock data เพื่อให้ AI ใช้ตอบคำถาม
 */

import { SITE } from "./master/site";
import { STATS } from "./master/stats";
import { getAllProjectsSorted } from "./mock/projects.mock";
import { getActiveServices } from "./mock/services.mock";
import { getActiveTeamMembers } from "./mock/team.mock";
import { getAllActiveTechnologies } from "./mock/technologies.mock";
import { MOCK_TESTIMONIALS } from "./mock/testimonials.mock";

export interface KnowledgeContext {
  company: {
    name: string;
    description: string;
    tagline: string;
    foundedYear: number;
    email: string;
    phone: string;
    address: string;
    socialLinks?: Record<string, string | undefined>;
  };
  services: Array<{
    title: string;
    description: string;
    features: string[];
    pricing?: string;
  }>;
  team: Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  technologies: Array<{
    name: string;
    category: string;
    description: string;
  }>;
  projects: Array<{
    title: string;
    category: string;
    description: string;
    technologies: string[];
    client?: string;
  }>;
  stats: Array<{
    label: string;
    value: string;
  }>;
  testimonials: Array<{
    clientName: string;
    company: string;
    content: string;
    rating: number;
  }>;
}

/**
 * Get structured knowledge context for AI
 */
export function getKnowledgeContext(): KnowledgeContext {
  const services = getActiveServices();
  const team = getActiveTeamMembers();
  const technologies = getAllActiveTechnologies();
  const projects = getAllProjectsSorted();

  return {
    company: {
      name: SITE.company.name,
      description: SITE.company.description,
      tagline: SITE.company.tagline,
      foundedYear: SITE.company.foundedYear,
      email: SITE.contact.email,
      phone: SITE.contact.phone,
      address: SITE.contact.address,
      socialLinks: SITE.social,
    },
    services: services.map((s) => ({
      title: s.title,
      description: s.description,
      features: s.features,
      pricing: s.pricingInfo,
    })),
    team: team.map((t) => ({
      name: t.name,
      role: t.role,
      bio: t.bio,
    })),
    technologies: technologies.map((t) => ({
      name: t.name,
      category: t.category,
      description: t.description,
    })),
    projects: projects.slice(0, 10).map((p) => ({
      title: p.title,
      category: p.category,
      description: p.description,
      technologies: p.technologies,
      client: p.client,
    })),
    stats: STATS.map((s) => ({
      label: s.label,
      value: `${s.value}${s.suffix}`,
    })),
    testimonials: MOCK_TESTIMONIALS.map((t) => ({
      clientName: t.clientName,
      company: t.company,
      content: t.content,
      rating: t.rating,
    })),
  };
}

/**
 * Get knowledge context as a formatted string for AI prompt
 */
export function getKnowledgePrompt(): string {
  const ctx = getKnowledgeContext();

  return `
คุณชื่อ "Clean Assistant" เป็นเลขาส่วนตัวของบริษัท ${ctx.company.name}
คุณพูดภาษาไทยเป็นหลัก แต่สามารถตอบภาษาอังกฤษได้ถ้าถูกถามเป็นภาษาอังกฤษ
คุณมีความสุภาพ เป็นมิตร และพร้อมช่วยเหลือ

## ข้อมูลบริษัท
- ชื่อ: ${ctx.company.name}
- คำอธิบาย: ${ctx.company.description}
- สโลแกน: ${ctx.company.tagline}
- ก่อตั้งปี: ${ctx.company.foundedYear}
- อีเมล: ${ctx.company.email}
- โทรศัพท์: ${ctx.company.phone}
- ที่อยู่: ${ctx.company.address}

## สถิติ
${ctx.stats.map((s) => `- ${s.label}: ${s.value}`).join("\n")}

## บริการ
${ctx.services.map((s) => `### ${s.title}\n${s.description}\nราคา: ${s.pricing || "ติดต่อสอบถาม"}\nฟีเจอร์: ${s.features.join(", ")}`).join("\n\n")}

## ทีมงาน
${ctx.team.map((t) => `- ${t.name} (${t.role}): ${t.bio}`).join("\n")}

## เทคโนโลยีที่ใช้
${ctx.technologies.map((t) => `- ${t.name} (${t.category}): ${t.description}`).join("\n")}

## โปรเจคล่าสุด
${ctx.projects.map((p) => `### ${p.title}\nหมวดหมู่: ${p.category}\nลูกค้า: ${p.client || "-"}\nคำอธิบาย: ${p.description}\nเทคโนโลยี: ${p.technologies.join(", ")}`).join("\n\n")}

## รีวิวจากลูกค้า
${ctx.testimonials.map((t) => `- "${t.content}" - ${t.clientName}, ${t.company} (${t.rating}/5 ดาว)`).join("\n")}

## คำแนะนำในการตอบ
1. ถ้าถูกถามเกี่ยวกับบริการ ให้อธิบายบริการที่เกี่ยวข้องพร้อมราคา
2. ถ้าถูกถามเกี่ยวกับโปรเจค ให้บอกตัวอย่างโปรเจคที่เกี่ยวข้อง
3. ถ้าถูกถามเกี่ยวกับติดต่อ ให้บอกอีเมลและเบอร์โทร
4. ถ้าไม่รู้คำตอบ ให้แนะนำให้ติดต่อโดยตรง
5. ตอบสั้นกระชับ ไม่เกิน 3-4 ประโยค ยกเว้นถูกขอให้อธิบายละเอียด
`.trim();
}

/**
 * Simple keyword-based matching for fallback responses
 */
export function getSimpleResponse(message: string): string | null {
  const lowerMessage = message.toLowerCase();
  const ctx = getKnowledgeContext();

  // Greetings
  if (/^(สวัสดี|หวัดดี|hi|hello|hey)/i.test(lowerMessage)) {
    return `สวัสดีครับ! 👋 ผม Clean Assistant เลขาส่วนตัวของ ${ctx.company.name} ครับ ขณะนี้ผมได้แจ้งทีมงานแล้ว แอดมินจะรีบเข้ามาตอบกลับโดยเร็วที่สุดครับ ระหว่างนี้มีอะไรให้ผมช่วยดูแลเบื้องต้นไหมครับ?`;
  }

  // Company info
  if (/บริษัท|เกี่ยวกับ|about|company/i.test(lowerMessage)) {
    return `${ctx.company.name} - ${ctx.company.description} ${ctx.company.tagline} ก่อตั้งตั้งแต่ปี ${ctx.company.foundedYear} มีผลงานมากกว่า ${ctx.stats[0]?.value} โปรเจค ครับ`;
  }

  // Services
  if (/บริการ|service|ทำอะไร|รับทำ|ทำเว็บ|รับเขียน/i.test(lowerMessage)) {
    const serviceList = ctx.services.slice(0, 4).map((s) => s.title).join(", ");
    return `เรามีบริการหลายอย่างครับ เช่น ${serviceList} และอื่นๆ สนใจบริการไหนเป็นพิเศษไหมครับ?`;
  }

  // Projects
  if (/โปรเจค|project|ผลงาน|portfolio/i.test(lowerMessage)) {
    const recentProjects = ctx.projects.slice(0, 3).map((p) => p.title).join(", ");
    return `ผลงานล่าสุดของเราเช่น ${recentProjects} ครับ สามารถดูผลงานเพิ่มเติมได้ที่หน้า Portfolio ครับ`;
  }

  // Contact
  if (/ติดต่อ|contact|อีเมล|email|โทร|phone/i.test(lowerMessage)) {
    return `สามารถรับคำปรึกษาได้ที่:\n📧 ${ctx.company.email}\n📞 ${ctx.company.phone}\nหรือกรอกฟอร์มที่หน้า Contact ครับ`;
  }

  // Team
  if (/ทีม|team|ใครคือ|สมาชิกทีม/i.test(lowerMessage)) {
    const teamList = ctx.team.slice(0, 3).map((t) => `${t.name} (${t.role})`).join(", ");
    return `ทีมของเรามี ${ctx.team.length} คน ได้แก่ ${teamList} และคนอื่นๆ ครับ`;
  }

  // Technologies
  if (/เทคโนโลยี|tech|stack|ใช้อะไร/i.test(lowerMessage)) {
    const techList = ctx.technologies.slice(0, 6).map((t) => t.name).join(", ");
    return `เราใช้เทคโนโลยีทันสมัยครับ เช่น ${techList} และอื่นๆ ครับ`;
  }

  // Pricing
  if (/ราคา|price|cost|เท่าไหร่/i.test(lowerMessage)) {
    const webPrice = ctx.services.find((s) => s.title.includes("เว็บ"))?.pricing;
    return `ราคาขึ้นอยู่กับขอบเขตงานครับ เช่น พัฒนาเว็บไซต์ ${webPrice} แนะนำให้รับคำปรึกษาโดยตรงเพื่อประเมินราคาที่แม่นยำครับ`;
  }

  return null;
}
