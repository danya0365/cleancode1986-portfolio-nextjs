"use client";

import Link from "next/link";
import type { Technology } from "@/src/data/mock/technologies.mock";
import { motion, type Variants } from "framer-motion";
import { DevTerminal } from "./DevTerminal";

interface HeroSectionProps {
  technologies: Technology[];
}

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

import { XRayWrapper } from "@/src/presentation/components/ui/XRayWrapper";

export function HeroSection({ technologies }: HeroSectionProps) {
  const codeSnippet = `
// HeroSection.tsx
export function HeroSection({ technologies }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 blur-[100px]" />
      
      <motion.div initial="hidden" whileInView="visible" variants={variants}>
        <motion.h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
          พัฒนา<span className="text-transparent bg-clip-text">เว็บไซต์</span>
          และแอปพลิเคชันที่ทรงพลัง
        </motion.h1>

        {/* 🚀 Tech Stack */}
        <div className="flex flex-wrap gap-4 items-center">
          {technologies.map(tech => (
            <div className="px-4 py-2 backdrop-blur-sm shadow-sm hover:scale-105">
              {tech.icon} {tech.name}
            </div>
          ))}
        </div>
        
        {/* Terminal Component */}
        <DevTerminal />
      </motion.div>
    </section>
  );
}
`.trim();

  return (
    <XRayWrapper componentName="HeroSection.tsx" codeSnippet={codeSnippet}>
      <section className="relative bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-20 md:py-32 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant} className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-8 shadow-sm">
            <span className="mr-2 animate-pulse">✨</span>
            <span>มืออาชีพ เชื่อถือได้ คุณภาพสูง</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            พัฒนา
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"> เว็บไซต์ </span>
            และ
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300"> แอปพลิเคชัน </span>
            ที่ทรงพลัง
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Clean Code 1986 - ทีมนักพัฒนามืออาชีพพร้อมสร้างโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ
            <br />
            ด้วยสถาปัตยกรรมระดับโลก เกรดเดียวกับบริษัท Tech ชั้นนำ
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 w-1/4 h-full bg-white/20 dark:bg-black/10 skew-x-[-20deg] group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
              <span className="relative">ดูผลงานของเรา</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
            >
              รับคำปรึกษา
            </Link>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={fadeUpVariant} className="mt-16 pt-8">
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
              ขับเคลื่อนด้วยเทคโนโลยีอนาคต
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              {technologies.slice(0, 6).map((tech) => (
                <div
                  key={tech.id}
                  className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="mr-2">{tech.icon}</span> 
                  {tech.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal WOW Factor */}
          <motion.div variants={fadeUpVariant}>
            <DevTerminal />
          </motion.div>

        </motion.div>
      </div>
      </section>
    </XRayWrapper>
  );
}
