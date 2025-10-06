import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../public/styles/index.css";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
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
  openGraph: {
    title: "Clean Code 1986 | พัฒนาเว็บไซต์และแอปพลิเคชันมืออาชีพ",
    description:
      "บริษัทพัฒนาซอฟต์แวร์มืออาชีพ รับทำเว็บไซต์ แอปมือถือ และระบบต่างๆ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${kanit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
