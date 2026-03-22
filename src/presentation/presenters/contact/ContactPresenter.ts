import { SITE } from "@/src/data/master/site";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
}

export interface ContactViewModel {
  // สำหรับอนาคตอาจมีข้อมูลเพิ่มเติม เช่น office hours, contact info
  contactEmail: string;
  contactPhone: string;
  officeAddress: string;
}

/**
 * Presenter for Contact page
 */
export class ContactPresenter {
  /**
   * Get view model for contact page
   */
  async getViewModel(): Promise<ContactViewModel> {
    try {
      return {
        contactEmail: SITE.contact.email,
        contactPhone: SITE.contact.phone,
        officeAddress: SITE.contact.address,
      };
    } catch (error) {
      console.error("Error loading contact data:", error);
      throw error;
    }
  }



  /**
   * Generate metadata for contact page
   */
  async generateMetadata() {
    return {
      title: `รับคำปรึกษา | ${SITE.company.name}`,
      description:
        `ติดต่อ ${SITE.company.name} - ปรึกษาฟรี! พร้อมให้บริการพัฒนาซอฟต์แวร์`,
    };
  }
}


