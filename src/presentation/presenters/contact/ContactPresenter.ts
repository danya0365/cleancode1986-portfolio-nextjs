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
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // TODO: Implement actual API call to send email or save to database
      console.log("Contact form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        success: true,
        message: "ส่งข้อความสำเร็จ! เราจะติดต่อกลับไปโดยเร็วที่สุด",
      };
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return {
        success: false,
        message: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      };
    }
  }

  /**
   * Generate metadata for contact page
   */
  async generateMetadata() {
    return {
      title: `ติดต่อเรา | ${SITE.company.name}`,
      description:
        `ติดต่อ ${SITE.company.name} - ปรึกษาฟรี! พร้อมให้บริการพัฒนาซอฟต์แวร์`,
    };
  }
}

/**
 * Factory for creating ContactPresenter instances
 */
export class ContactPresenterFactory {
  static async createServer(): Promise<ContactPresenter> {
    return new ContactPresenter();
  }

  static async createClient(): Promise<ContactPresenter> {
    return new ContactPresenter();
  }
}
