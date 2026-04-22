import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import { PromoView } from "@/src/presentation/components/promo/PromoView";
import { createServerPromoPresenter } from "@/src/presentation/presenters/promo/PromoPresenterServerFactory";
import type { Metadata } from "next";

const presenter = createServerPromoPresenter();

export async function generateMetadata(): Promise<Metadata> {
  try {
    return await presenter.generateMetadata();
  } catch {
    return {
      title: "โปรโมชั่น | CleanCode 1986",
      description: "จ้างทำเว็บ ราคาถูก คุณภาพสูง ด้วย AI-Powered Development",
    };
  }
}

export default async function PromoPage() {
  try {
    const viewModel = await presenter.getViewModel();
    return (
      <MainLayout>
        <PromoView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch {
    return (
      <MainLayout>
        <PromoView />
      </MainLayout>
    );
  }
}
