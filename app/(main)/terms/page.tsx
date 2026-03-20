import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { SITE } from "@/src/data/master/site";
import type { Metadata } from "next";
import { TermsPage } from "@/src/presentation/components/terms/TermsPage";

export const metadata: Metadata = {
  title: `ข้อกำหนดการใช้งาน | ${SITE.title}`,
  description: "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ Clean Code 1986",
};

export default function Terms() {
  return (
    <MainLayout>
      <TermsPage />
    </MainLayout>
  );
}
