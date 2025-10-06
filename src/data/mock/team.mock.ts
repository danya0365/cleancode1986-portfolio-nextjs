export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  sortOrder: number;
  isActive: boolean;
}

export const MOCK_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "สมชาย ใจดี",
    role: "CEO & Lead Developer",
    bio: "10+ ปี ประสบการณ์ด้าน Full-stack Development เชี่ยวชาญ React, Next.js, และ Node.js",
    avatar: "/images/team/member-1.jpg",
    linkedinUrl: "https://linkedin.com/in/example",
    githubUrl: "https://github.com/example",
    twitterUrl: "https://twitter.com/example",
    sortOrder: 1,
    isActive: true,
  },
  {
    id: "2",
    name: "สมหญิง รักโค้ด",
    role: "Senior Frontend Developer",
    bio: "เชี่ยวชาญ React, TypeScript และ UI/UX Design มี Passion ในการสร้าง User Experience ที่ดี",
    avatar: "/images/team/member-2.jpg",
    linkedinUrl: "https://linkedin.com/in/example2",
    githubUrl: "https://github.com/example2",
    sortOrder: 2,
    isActive: true,
  },
  {
    id: "3",
    name: "สมศักดิ์ เขียนโค้ด",
    role: "Senior Backend Developer",
    bio: "ผู้เชี่ยวชาญด้าน Backend Architecture, Database Design และ API Development",
    avatar: "/images/team/member-3.jpg",
    linkedinUrl: "https://linkedin.com/in/example3",
    githubUrl: "https://github.com/example3",
    sortOrder: 3,
    isActive: true,
  },
  {
    id: "4",
    name: "สมหมาย ออกแบบ",
    role: "UI/UX Designer",
    bio: "ออกแบบ UI/UX ที่สวยงามและใช้งานง่าย มีประสบการณ์กว่า 7 ปี",
    avatar: "/images/team/member-4.jpg",
    linkedinUrl: "https://linkedin.com/in/example4",
    sortOrder: 4,
    isActive: true,
  },
  {
    id: "5",
    name: "สมใจ ทดสอบโค้ด",
    role: "QA Engineer",
    bio: "เชี่ยวชาญการทดสอบระบบ Automation Testing และ Performance Testing",
    avatar: "/images/team/member-5.jpg",
    linkedinUrl: "https://linkedin.com/in/example5",
    githubUrl: "https://github.com/example5",
    sortOrder: 5,
    isActive: true,
  },
];

export const getActiveTeamMembers = (): TeamMember[] => {
  return MOCK_TEAM.filter((member) => member.isActive).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
};
