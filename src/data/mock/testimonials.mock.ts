export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  projectId?: string;
  isFeatured: boolean;
}

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "คุณสมพร ธุรกิจดี",
    clientRole: "CEO",
    company: "Fashion Brand X",
    avatar: "/images/testimonials/client-1.jpg",
    content:
      "ทีม Clean Code 1986 ทำงานได้ยอดเยี่ยม เว็บไซต์อีคอมเมิร์ซที่ได้มาทั้งสวยงามและใช้งานง่าย ยอดขายเพิ่มขึ้น 150% ภายใน 3 เดือน ประทับใจมากครับ!",
    rating: 5,
    projectId: "1",
    isFeatured: true,
  },
  {
    id: "2",
    clientName: "คุณสมหญิง ธุรการแกร่ง",
    clientRole: "Product Manager",
    company: "Food Delivery Co.",
    avatar: "/images/testimonials/client-2.jpg",
    content:
      "แอปสั่งอาหารที่พัฒนาให้เราใช้งานได้ลื่นมาก Real-time tracking ทำงานได้ดีเยี่ยม ลูกค้าชอบมาก แนะนำเลยค่ะ",
    rating: 5,
    projectId: "2",
    isFeatured: true,
  },
  {
    id: "3",
    clientName: "คุณอนันต์ การเงินเจริญ",
    clientRole: "CTO",
    company: "Fintech Startup",
    content:
      "ระบบแดชบอร์ดที่ได้มามีคุณภาพสูง โค้ดเขียนดี Architecture แข็งแรง ทีมมีความเป็นมืออาชีพ ตรงเวลา ตรงสเปค",
    rating: 5,
    projectId: "3",
    isFeatured: true,
  },
];
