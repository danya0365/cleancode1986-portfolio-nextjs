import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import "../public/styles/index.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean Code 1986 | พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
  description:
    "Clean Code 1986 - บริษัทพัฒนาซอฟต์แวร์มืออาชีพ รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ ด้วย Next.js, React, React Native",
  keywords: [
    "พัฒนาเว็บไซต์",
    "รับทำเว็บไซต์",
    "รับทำแอพมือถือ",
    "Next.js",
    "React",
    "React Native",
    "Clean Code 1986",
  ],
  authors: [{ name: "Clean Code 1986" }],
  creator: "Marosdee Uma",
  publisher: "Marosdee Uma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: ["/favicon/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Clean Code 1986 | พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
    description:
      "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ",
    type: "website",
    siteName: "Clean Code 1986",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Al-Quran Logo",
      },
    ],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Code 1986 | พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
    description:
      "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ",
    images: ["/favicon/android-chrome-512x512.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Clean Code 1986",
  },
};

import { TemplateSwitcher } from "@/src/presentation/components/layout/components/TemplateSwitcher";
import { XRayProvider } from "@/src/presentation/providers/xray-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <XRayProvider>
            {children}
            <TemplateSwitcher />
          </XRayProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

