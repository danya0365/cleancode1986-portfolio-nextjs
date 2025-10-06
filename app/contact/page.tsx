import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { ContactPage } from "@/src/presentation/components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Clean Code 1986",
  description: "ติดต่อ Clean Code 1986 - ปรึกษาฟรี! พร้อมให้บริการพัฒนาซอฟต์แวร์",
};

export default function Contact() {
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
}
