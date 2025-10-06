"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ (อย่างน้อย 2 ตัวอักษร)"),
  email: z.string().email("กรุณากรอกอีเมลที่ถูกต้อง"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "กรุณาเลือกประเภทโปรเจค"),
  budget: z.string().optional(),
  message: z.string().min(10, "กรุณากรอกรายละเอียด (อย่างน้อย 10 ตัวอักษร)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PROJECT_TYPES = [
  "เว็บไซต์",
  "แอปมือถือ",
  "UI/UX Design",
  "Full-stack",
  "Consulting",
  "อื่นๆ",
];

const BUDGET_RANGES = [
  "< 50,000 บาท",
  "50,000 - 100,000 บาท",
  "100,000 - 300,000 บาท",
  "300,000 - 500,000 บาท",
  "> 500,000 บาท",
  "ยังไม่แน่ใจ",
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Implement API call to send email or save to database
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ปรึกษาฟรี! ไม่มีค่าใช้จ่าย ไม่ผูกมัด
            <br />
            ทีมของเราพร้อมรับฟังและให้คำแนะนำที่ดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ส่งข้อความถึงเรา
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ชื่อของคุณ"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    เบอร์โทร (ถ้ามี)
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="08x-xxx-xxxx"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ประเภทโปรเจค <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">เลือกประเภทโปรเจค</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    งบประมาณ (ถ้ามี)
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">เลือกช่วงงบประมาณ</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    รายละเอียด <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="บอกเราเกี่ยวกับโปรเจคของคุณ..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
                >
                  {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                    ✓ ส่งข้อความสำเร็จ! เราจะติดต่อกลับไปโดยเร็วที่สุด
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                    ✕ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                ข้อมูลติดต่อ
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      อีเมล
                    </div>
                    <a
                      href="mailto:contact@cleancode1986.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      contact@cleancode1986.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      โทรศัพท์
                    </div>
                    <a
                      href="tel:02-xxx-xxxx"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      02-XXX-XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ที่อยู่
                    </div>
                    <p className="text-gray-900 dark:text-white">
                      กรุงเทพมหานคร
                      <br />
                      ประเทศไทย
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                ติดตามเรา
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "📘",
                    name: "Facebook",
                    url: "https://facebook.com/cleancode1986",
                  },
                  {
                    icon: "🐦",
                    name: "Twitter",
                    url: "https://twitter.com/cleancode1986",
                  },
                  {
                    icon: "🐙",
                    name: "GitHub",
                    url: "https://github.com/cleancode1986",
                  },
                  {
                    icon: "💼",
                    name: "LinkedIn",
                    url: "https://linkedin.com/company/cleancode1986",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <span className="text-2xl mr-3">{social.icon}</span>
                    <span className="text-gray-900 dark:text-white">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">เวลาทำการ</h3>
              <div className="space-y-2">
                <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                <p>เสาร์ - อาทิตย์: ปิด</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
