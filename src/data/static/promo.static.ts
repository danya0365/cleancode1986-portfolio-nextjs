/**
 * Promo page static content
 * เนื้อหาสำหรับหน้าโฆษณา/โปรโมชั่น เอาไว้แชร์ลง Social
 */

export interface PromoHero {
  headline: string;
  subheadline: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

export interface WhyAffordableItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
  hireTeam: string;
  hireUs: string;
  highlight?: boolean;
}

export interface WhatYouGetItem {
  icon: string;
  title: string;
  description: string;
}

export interface PricingItem {
  icon: string;
  title: string;
  price: string;
  note?: string;
}

export interface TrustSignal {
  value: string;
  label: string;
}

export interface PromoContent {
  hero: PromoHero;
  whyAffordable: {
    title: string;
    subtitle: string;
    items: WhyAffordableItem[];
  };
  comparison: {
    title: string;
    subtitle: string;
    hireTeamLabel: string;
    hireUsLabel: string;
    rows: ComparisonRow[];
    savingNote: string;
  };
  whatYouGet: {
    title: string;
    subtitle: string;
    items: WhatYouGetItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    items: PricingItem[];
  };
  trustSignals: {
    title: string;
    items: TrustSignal[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    phone: string;
    lineId: string;
    email: string;
  };
}

export const PROMO_CONTENT: PromoContent = {
  hero: {
    headline: "จ้างทำเว็บ ราคาถูกกว่าที่คิด",
    subheadline:
      "ทำไมถูก? เพราะเราใช้ AI เขียนโค้ด แต่ควบคุมคุณภาพด้วย AI Skill",
    tagline: "โค้ดออกมามีคุณภาพสูงกว่ามนุษย์เขียน — ส่งมอบเร็ว ราคาดี",
    ctaText: "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
    ctaLink: "/contact",
  },

  whyAffordable: {
    title: "ทำไมราคาถูกกว่าที่อื่น?",
    subtitle: "เราไม่ได้ตัดคุณภาพ — เราตัดต้นทุนที่ไม่จำเป็น",
    items: [
      {
        icon: "🤖",
        title: "AI เขียนโค้ดให้",
        description:
          "ใช้ AI ในการเขียนโค้ดทุกบรรทัด ลดเวลาพัฒนาจากเดือนเหลือสัปดาห์ ไม่ต้องจ้างทีมใหญ่",
      },
      {
        icon: "🛡️",
        title: "AI Skill ควบคุมคุณภาพ",
        description:
          "สร้าง AI Skill Set เฉพาะทาง ที่ทำให้โค้ดออกมาเป็น Clean Architecture ทุกครั้ง ไม่มีพลาด",
      },
      {
        icon: "⚡",
        title: "เร็วกว่า 5 เท่า",
        description:
          "งานที่ทีมคน 3 คนใช้เวลา 3 เดือน เราทำเสร็จใน 2-4 สัปดาห์ ประหยัดเวลา = ประหยัดเงิน",
      },
      {
        icon: "🏗️",
        title: "Clean Architecture ทุกโปรเจค",
        description:
          "โค้ดทุกชิ้นเป็นระเบียบ อ่านง่าย แก้ไขง่าย ส่งต่อให้ใครก็ทำงานต่อได้",
      },
    ],
  },

  comparison: {
    title: "เปรียบเทียบให้เห็นชัด",
    subtitle: "จ้างทีม Developer 3 คน vs จ้าง CleanCode 1986",
    hireTeamLabel: "จ้างทีม Dev 3 คน",
    hireUsLabel: "จ้าง CleanCode 1986",
    rows: [
      {
        label: "ต้นทุนบุคลากร",
        hireTeam: "~180,000 บาท/เดือน (เงินเดือน 3 คน)",
        hireUs: "ค่า AI Tools ไม่กี่พันบาท/เดือน",
        highlight: true,
      },
      {
        label: "ค่าพัฒนาเว็บไซต์",
        hireTeam: "540,000+ บาท (3 เดือน)",
        hireUs: "เริ่มต้น 30,000 บาท (จ่ายตามงาน)",
        highlight: true,
      },
      {
        label: "รูปแบบค่าใช้จ่าย",
        hireTeam: "เงินเดือนประจำ ไม่ว่าจะมีงานหรือไม่",
        hireUs: "จ่ายต่องาน + ค่า AI Tools รายเดือน",
      },
      {
        label: "ระยะเวลาพัฒนา",
        hireTeam: "3-6 เดือน",
        hireUs: "2-4 สัปดาห์",
      },
      {
        label: "คุณภาพโค้ด",
        hireTeam: "ขึ้นอยู่กับฝีมือแต่ละคน",
        hireUs: "Clean Architecture + AI Verified",
      },
      {
        label: "ค่าบำรุงรักษา",
        hireTeam: "จ้างคนอยู่ตลอด 60,000+/เดือน",
        hireUs: "10,000 บาท/เดือน",
      },
      {
        label: "ความเสี่ยงคนลาออก",
        hireTeam: "สูง — คนลาออก = ต้องหาคนใหม่",
        hireUs: "ไม่มี — โค้ดมาตรฐาน ส่งต่อได้ทันที",
      },
      {
        label: "Documentation",
        hireTeam: "อาจไม่มี",
        hireUs: "มีครบ — AI สร้าง Context ให้อัตโนมัติ",
      },
      {
        label: "Testing",
        hireTeam: "ขึ้นอยู่กับวัฒนธรรมทีม",
        hireUs: "AI Test ทุก feature อัตโนมัติ",
      },
    ],
    savingNote: "ประหยัดต้นทุนบุคลากรได้มากกว่า 80% เทียบกับจ้างทีมประจำ",
  },

  whatYouGet: {
    title: "สิ่งที่คุณจะได้รับ",
    subtitle: "ไม่ใช่แค่เว็บ — แต่เป็นระบบที่พร้อมเติบโต",
    items: [
      {
        icon: "🏛️",
        title: "Clean Architecture Code",
        description:
          "โค้ดเป็นระเบียบ แบ่ง layer ชัดเจน แก้ไขและเพิ่มฟีเจอร์ได้ง่าย",
      },
      {
        icon: "🔍",
        title: "SEO Optimized",
        description:
          "Server-Side Rendering + Meta tags ครบ ติดอันดับ Google ได้ง่าย",
      },
      {
        icon: "📱",
        title: "Responsive ทุกอุปกรณ์",
        description: "สวยทุกหน้าจอ ตั้งแต่มือถือจนถึงจอใหญ่",
      },
      {
        icon: "💬",
        title: "AI Chatbot ในตัว",
        description: "ระบบแชทอัจฉริยะ ตอบลูกค้าอัตโนมัติ 24 ชั่วโมง",
      },
      {
        icon: "🎨",
        title: "Multi-Theme Support",
        description:
          "เปลี่ยนธีมได้ทันทีไม่ต้องแก้โค้ด — Premium, Terminal, Retro",
      },
      {
        icon: "📞",
        title: "ปรึกษาฟรีตลอดโปรเจค",
        description: "ไม่ทิ้งลูกค้า — ปรึกษาได้ทุกเรื่องตั้งแต่วันแรกจนส่งมอบ",
      },
    ],
  },

  pricing: {
    title: "ราคาเริ่มต้น",
    subtitle: "โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง",
    items: [
      {
        icon: "💻",
        title: "เว็บไซต์",
        price: "30,000",
        note: "Landing, Corporate, Portfolio",
      },
      {
        icon: "📱",
        title: "แอปมือถือ",
        price: "50,000",
        note: "iOS + Android (React Native)",
      },
      {
        icon: "🎨",
        title: "ออกแบบ UI/UX",
        price: "20,000",
        note: "Wireframe + Visual Design",
      },
      {
        icon: "⚙️",
        title: "Backend & API",
        price: "40,000",
        note: "RESTful API + Database",
      },
      {
        icon: "🛒",
        title: "E-Commerce",
        price: "60,000",
        note: "ร้านค้าออนไลน์ครบวงจร",
      },
      {
        icon: "🚀",
        title: "Full-Stack",
        price: "80,000",
        note: "ระบบครบวงจร Frontend + Backend",
      },
    ],
  },

  trustSignals: {
    title: "ทำไมต้องเชื่อเรา?",
    items: [
      { value: "10+", label: "โปรเจคที่ส่งมอบแล้ว" },
      { value: "100%", label: "ใช้ Clean Architecture" },
      { value: "AI", label: "Powered Development" },
      { value: "24/7", label: "AI Chatbot Support" },
    ],
  },

  finalCta: {
    title: "พร้อมเริ่มต้นหรือยัง?",
    subtitle: "ปรึกษาฟรี ไม่มีค่าใช้จ่าย — บอกไอเดียมา เราจัดให้",
    ctaText: "ติดต่อเราเลย",
    ctaLink: "/contact",
    phone: "089-484-7773",
    lineId: "@marosdee7",
    email: "cleancode1986@gmail.com",
  },
};
