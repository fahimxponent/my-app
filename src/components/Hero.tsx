"use client";

import React from "react";
import HeroVideo from "./HeroVideo";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  companyNameEn?: string;
  companyNameBn?: string;
  sinceYear?: string;
}

export default function Hero({
  companyNameEn = "My Company",
  companyNameBn = "মাই কোম্পানি",
  sinceYear = "1991",
}: HeroProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const content = {
    titlePrefix: isBn ? "ব্যবসায়িক উন্নয়নে বিশ্বস্ত" : "Welcome to Your Premier",
    titleHighlight: isBn
      ? "সরকারি লাইসেন্সিং ও কনসালটেন্সি সার্ভিস"
      : "Consultancy for Government Licensing",
    subtitle: isBn
      ? `প্রতিটি সেক্টরে ব্যবসার জন্য সরকারি লাইসেন্সিং প্রক্রিয়া সহজীকরণ — ${sinceYear} থেকে`
      : `Simplifying Government Licensing for Businesses in Every Sector — SINCE ${sinceYear}`,
    consultationBtn: isBn ? "কনসালটেশন সার্ভিস" : "Consultation Services",
    governmentBtn: isBn ? "সরকারি সেবাসমূহ" : "Government Services",
  };

  return (
    <section className="relative w-full pt-10 pb-20 overflow-hidden bg-gradient-to-b from-[#f2f7ff] via-[#f9fbff] to-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-10">
        {/* Main Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-black tracking-tight leading-tight max-w-4xl">
          {content.titlePrefix}{" "}
          <span className="block text-[#2563eb] mt-1 sm:mt-2">
            {content.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-black font-medium tracking-wide max-w-3xl">
          {content.subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <a
            href="#consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            {content.consultationBtn}
          </a>

          <a
            href="#government"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3 text-sm font-semibold text-white bg-[#1e293b] hover:bg-[#0f172a] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            {content.governmentBtn}
          </a>
        </div>

        {/* Hero Video Preview Card */}
        <div className="w-full mt-12 sm:mt-14">
          <HeroVideo companyNameEn={companyNameEn} companyNameBn={companyNameBn} />
        </div>
      </div>
    </section>
  );
}
