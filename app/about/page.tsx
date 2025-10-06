import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { AboutPage } from "@/src/presentation/components/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | Clean Code 1986",
  description: "ทำความรู้จักทีม Clean Code 1986 - นักพัฒนาซอฟต์แวร์มืออาชีพ",
};

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
    </MainLayout>
  );
}
