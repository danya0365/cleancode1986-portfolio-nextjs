import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ServicesPage } from "@/src/presentation/components/services/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการ | Clean Code 1986",
  description: "บริการพัฒนาเว็บไซต์ แอปมือถือ UI/UX และ Consulting จาก Clean Code 1986",
};

export default function Services() {
  return (
    <MainLayout>
      <ServicesPage />
    </MainLayout>
  );
}
