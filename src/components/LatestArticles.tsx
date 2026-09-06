"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Article {
  id: number;
  categoryEn: string;
  categoryBn: string;
  readTimeEn: string;
  readTimeBn: string;
  date: string;
  titleEn: string;
  titleBn: string;
  excerptEn: string;
  excerptBn: string;
  imageType: "skyscraper" | "skyline" | "store";
}

export default function LatestArticles() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const articles: Article[] = [
    {
      id: 1,
      categoryEn: "Establishing companies",
      categoryBn: "কোম্পানি প্রতিষ্ঠা",
      readTimeEn: "Time to Read 6 minutes",
      readTimeBn: "পড়ার সময় ৬ মিনিট",
      date: "2025-11-30",
      titleEn: "Types of Companies in Saudi Arabia, Which One Is Best for You, and the...",
      titleBn: "সৌদি আরবে কোম্পানির ধরন, আপনার জন্য কোনটি সেরা এবং এর সুবিধাসমূহ...",
      excerptEn: "When considering establishing a company in Saudi Arabia, you must be aware of the legal frameworks and investor categories...",
      excerptBn: "সৌদি আরবে একটি কোম্পানি প্রতিষ্ঠার কথা ভাবার সময় প্রয়োজনীয় আইনি কাঠামো এবং বিনিয়োগকারী শ্রেণী সম্পর্কে ধারণা থাকা জরুরি...",
      imageType: "skyscraper",
    },
    {
      id: 2,
      categoryEn: "Establishing companies",
      categoryBn: "কোম্পানি প্রতিষ্ঠা",
      readTimeEn: "Time to Read 4 minutes",
      readTimeBn: "পড়ার সময় ৪ মিনিট",
      date: "2025-11-30",
      titleEn: "Discover the Best Service Provider for Company Formation in Saudi...",
      titleBn: "সৌদি আরবে কোম্পানি গঠনের জন্য সেরা পরিষেবা প্রদানকারী নির্বাচন করুন...",
      excerptEn: "As the largest economy in the Gulf region and one of the top 20 economies in the world, it provides vast market incentives...",
      excerptBn: "উপসাগরীয় অঞ্চলের বৃহত্তম অর্থনীতি এবং বিশ্বের শীর্ষ ২০টি অর্থনীতির একটি হিসেবে এটি বিশাল বাজার প্রণোদনা প্রদান করে...",
      imageType: "skyline",
    },
    {
      id: 3,
      categoryEn: "Business",
      categoryBn: "ব্যবসা",
      readTimeEn: "Time to Read 5 minutes",
      readTimeBn: "পড়ার সময় ৫ মিনিট",
      date: "2025-11-29",
      titleEn: "What is a commercial franchise (franchising), and how can you...",
      titleBn: "বাণিজ্যিক ফ্র্যাঞ্চাইজ (ফ্র্যাঞ্চাইজিং) কী এবং কীভাবে আপনি এটি শুরু করবেন...",
      excerptEn: "Explore the fundamental franchise models, brand licensing regulations, and scalable business investment opportunities...",
      excerptBn: "মৌলিক ফ্র্যাঞ্চাইজ মডেল, ব্র্যান্ড লাইসেন্সিং নিয়মাবলী এবং ব্যবসায়িক বিনিয়োগের দারুণ সুযোগগুলো বিস্তারিত জানুন...",
      imageType: "store",
    },
  ];

  // Render SVG visual headers for each card that match the screenshot
  const renderCardGraphic = (type: "skyscraper" | "skyline" | "store", categoryEn: string, categoryBn: string) => {
    return (
      <div className="relative w-full h-52 sm:h-56 bg-slate-900 overflow-hidden flex items-center justify-center">
        {type === "skyscraper" && (
          <div className="relative w-full h-full bg-gradient-to-br from-[#0c1f38] via-[#163a66] to-[#0f2442] flex items-center justify-center">
            {/* Architectural Skyline Overlay with Kingdom Centre style peak */}
            <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 400 220">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Skyline silhouettes */}
              <rect x="20" y="110" width="35" height="110" fill="#0f172a" opacity="0.8" />
              <rect x="65" y="80" width="40" height="140" fill="#1e293b" opacity="0.9" />
              <rect x="115" y="95" width="30" height="125" fill="#0f172a" opacity="0.7" />
              <rect x="155" y="70" width="45" height="150" fill="#1e293b" opacity="0.85" />
              {/* Distinctive arch tower */}
              <path d="M260 220 L275 30 Q285 20 295 30 L310 220 Z" fill="#1e3a8a" opacity="0.9" />
              <ellipse cx="285" cy="55" rx="10" ry="16" fill="#10b981" opacity="0.8" />
              <path d="M275 220 L280 90 Q285 80 290 90 L295 220 Z" fill="#0c1f38" />
              <polygon points="320,120 350,100 370,120 370,220 320,220" fill="#0f172a" opacity="0.75" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <div className="relative z-10 text-center px-4">
              <span className="text-white/90 text-sm font-semibold tracking-wide block drop-shadow-md">
                {isBn ? "কর্পোরেট গঠন নির্দেশিকা" : "Corporate Formation Guide"}
              </span>
            </div>
          </div>
        )}

        {type === "skyline" && (
          <div className="relative w-full h-full bg-gradient-to-br from-[#0f2847] via-[#1d4ed8] to-[#0d213a] flex items-center justify-center">
            {/* Cityscape and Financial District View */}
            <svg className="absolute inset-0 w-full h-full opacity-65" preserveAspectRatio="none" viewBox="0 0 400 220">
              <rect x="10" y="90" width="40" height="130" fill="#0f172a" />
              <rect x="60" y="60" width="50" height="160" fill="#1e293b" />
              <rect x="120" y="100" width="35" height="120" fill="#0f172a" />
              <rect x="165" y="45" width="45" height="175" fill="#1e3a8a" opacity="0.9" />
              <polygon points="187,15 180,45 195,45" fill="#38bdf8" />
              <rect x="220" y="75" width="40" height="145" fill="#1e293b" />
              <rect x="270" y="85" width="50" height="135" fill="#0f172a" />
              <rect x="330" y="110" width="45" height="110" fill="#1e293b" />
              {/* Glowing horizontal lines */}
              <line x1="0" y1="180" x2="400" y2="180" stroke="#38bdf8" strokeWidth="1" opacity="0.3" />
              <line x1="0" y1="195" x2="400" y2="195" stroke="#38bdf8" strokeWidth="1" opacity="0.2" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <div className="relative z-10 text-center px-4">
              <span className="text-white/90 text-sm font-semibold tracking-wide block drop-shadow-md">
                {isBn ? "শীর্ষ পরিষেবা ও পরামর্শ" : "Top Service & Advisory"}
              </span>
            </div>
          </div>
        )}

        {type === "store" && (
          <div className="relative w-full h-full bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#bfdbfe] flex items-center justify-center">
            {/* 3D Store with Red Location Pin Concept */}
            <svg className="w-48 h-36" viewBox="0 0 240 160">
              {/* Store Building Front */}
              <rect x="60" y="65" width="120" height="75" rx="4" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
              {/* Striped Canopy / Awning */}
              <path d="M50 65 L65 40 L175 40 L190 65 Z" fill="#3b82f6" />
              <path d="M65 40 L85 40 L80 65 L60 65 Z" fill="#60a5fa" />
              <path d="M105 40 L125 40 L120 65 L100 65 Z" fill="#60a5fa" />
              <path d="M145 40 L165 40 L160 65 L140 65 Z" fill="#60a5fa" />
              {/* Store Signboard */}
              <rect x="85" y="20" width="70" height="22" rx="4" fill="#0284c7" />
              <text x="120" y="35" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                STORE
              </text>
              {/* Store Door & Window */}
              <rect x="100" y="85" width="40" height="55" rx="2" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="120" y1="85" x2="120" y2="140" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Floating Red Map Location Pins */}
              {/* Left Pin */}
              <g transform="translate(30, 45)">
                <path d="M12 0 C5.37 0 0 5.37 0 12 C0 21 12 32 12 32 C12 32 24 21 24 12 C24 5.37 18.63 0 12 0 Z" fill="#ef4444" />
                <circle cx="12" cy="11" r="4.5" fill="#ffffff" />
              </g>
              {/* Right Pin */}
              <g transform="translate(185, 45)">
                <path d="M12 0 C5.37 0 0 5.37 0 12 C0 21 12 32 12 32 C12 32 24 21 24 12 C24 5.37 18.63 0 12 0 Z" fill="#ef4444" />
                <circle cx="12" cy="11" r="4.5" fill="#ffffff" />
              </g>
            </svg>
          </div>
        )}

        {/* Category Pill Tag (top-left of image) */}
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#2563eb] text-white shadow-xs">
            {isBn ? categoryBn : categoryEn}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Solid Blue Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#2563eb] text-white shadow-xs mb-4">
          <span className="text-xs sm:text-[13px] font-semibold">
            {isBn ? "সাম্প্রতিক প্রবন্ধ" : "Latest Articles"}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
          {isBn ? "সংবাদ, প্রবন্ধ এবং কোম্পানির আপডেট" : "News, Articles & Company Updates"}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-black font-normal tracking-wide max-w-2xl">
          {isBn
            ? "সর্বশেষ তথ্যের সাথে আপডেট থাকুন — বিশেষজ্ঞ পরামর্শ থেকে আমাদের সাম্প্রতিক অর্জন।"
            : "Everything you need to stay informed — from expert tips to our latest milestones."}
        </p>

        {/* Articles 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 text-left">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Banner Container */}
                {renderCardGraphic(article.imageType, article.categoryEn, article.categoryBn)}

                {/* Card Content Area */}
                <div className="p-6 sm:p-7">
                  {/* Meta Information (Read Time & Date) */}
                  <div className="flex items-center justify-between text-xs sm:text-[13px] text-black font-medium pb-3 border-b border-gray-100/80">
                    <span>{isBn ? article.readTimeBn : article.readTimeEn}</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-black group-hover:text-[#2563eb] transition-colors duration-200 line-clamp-2 leading-snug">
                    {isBn ? article.titleBn : article.titleEn}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-black leading-relaxed line-clamp-2 font-normal">
                    {isBn ? article.excerptBn : article.excerptEn}
                  </p>
                </div>
              </div>

              {/* Bottom "Read" Link with Arrow Icon */}
              <div className="px-6 sm:px-7 pb-6 pt-0">
                <Link
                  href={`#article-${article.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                >
                  <span>{isBn ? "পড়ুন" : "Read"}</span>
                  <svg
                    className="w-4 h-4 text-[#2563eb] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-12 sm:mt-14">
          <Link
            href="#articles"
            className="inline-flex items-center justify-center px-8 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            {isBn ? "আরও দেখুন" : "More"}
          </Link>
        </div>
      </div>
    </section>
  );
}
