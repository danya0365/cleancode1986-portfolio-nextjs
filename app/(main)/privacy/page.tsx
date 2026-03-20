import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { SITE } from "@/src/data/master/site";
import type { Metadata } from "next";
import { PrivacyPage } from "@/src/presentation/components/privacy/PrivacyPage";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${SITE.title}`,
  description: "นโยบายความเป็นส่วนตัวสำหรับผู้ใช้งานเว็บไซต์ Clean Code 1986",
};

export default function Privacy() {
  return (
    <MainLayout>
      <PrivacyPage />
    </MainLayout>
  );
}
