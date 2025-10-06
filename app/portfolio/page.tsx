import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { PortfolioList } from "@/src/presentation/components/portfolio/PortfolioList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลงาน | Clean Code 1986",
  description: "ผลงานพัฒนาเว็บไซต์และแอปพลิเคชันของ Clean Code 1986",
};

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PortfolioList />
    </MainLayout>
  );
}
