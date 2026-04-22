import { SITE } from "@/src/data/master/site";
import { PROMO_CONTENT, type PromoContent } from "@/src/data/static/promo.static";

export interface PromoViewModel {
  content: PromoContent;
  siteName: string;
}

/**
 * Presenter for Promo page
 * Following Clean Architecture - Interface Adapters layer
 */
export class PromoPresenter {
  /**
   * Get view model for promo page
   */
  async getViewModel(): Promise<PromoViewModel> {
    return {
      content: PROMO_CONTENT,
      siteName: SITE.company.name,
    };
  }

  /**
   * Generate metadata for promo page (optimized for Social sharing)
   */
  async generateMetadata() {
    return {
      title: `จ้างทำเว็บ ราคาถูก คุณภาพสูง | ${SITE.company.name}`,
      description:
        "ทำไมราคาถูก? เพราะเราใช้ AI เขียนโค้ด + ควบคุมคุณภาพด้วย Clean Architecture — ประหยัดกว่าจ้างทีม 10 เท่า",
      openGraph: {
        title: `จ้างทำเว็บ ราคาถูก คุณภาพสูง | ${SITE.company.name}`,
        description:
          "ทำไมราคาถูก? เพราะเราใช้ AI เขียนโค้ด แต่ควบคุมคุณภาพด้วย AI Skill — โค้ดออกมามีคุณภาพสูงกว่ามนุษย์เขียน",
        type: "website",
        siteName: SITE.company.name,
        images: [
          {
            url: "/cover/fb_cover_ai_powered_1772787872811.png",
            width: 1200,
            height: 630,
            alt: `${SITE.company.name} — AI-Powered Development`,
          },
        ],
        locale: "th_TH",
      },
      twitter: {
        card: "summary_large_image" as const,
        title: `จ้างทำเว็บ ราคาถูก คุณภาพสูง | ${SITE.company.name}`,
        description:
          "ทำไมราคาถูก? เพราะเราใช้ AI เขียนโค้ด + ควบคุมคุณภาพด้วย Clean Architecture",
        images: ["/cover/fb_cover_ai_powered_1772787872811.png"],
      },
    };
  }
}
