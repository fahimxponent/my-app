"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroVideoProps {
  companyNameEn?: string;
  companyNameBn?: string;
}

export default function HeroVideo({
  companyNameEn = "My Company",
  companyNameBn = "মাই কোম্পানি",
}: HeroVideoProps) {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const isBn = language === "bn";

  const content = {
    badgeTitle: isBn
      ? `বিজনেস সার্ভিসের জন্য ${companyNameBn} সম্পর্কে জানুন`
      : `Get to Know ${companyNameEn} Group for Business Services`,
    badgeSubtitle: isBn
      ? "ব্যবসায়িক সমাধান ও সরকারি লাইসেন্সিং কনসালটেন্সি"
      : "Business Solutions & Government Licensing Consultancy",
    overview: isBn ? "পরিচিতি" : "Overview",
    ofCompany: isBn ? `${companyNameBn}-র` : `of ${companyNameEn}`,
    tagline: isBn
      ? "আপনার ব্যবসার সঠিক সূচনা ও সরকারি অনুমোদনের বিশ্বস্ত সহযোগী।"
      : "Your trusted partner for corporate setup and government relations.",
    videoActive: isBn ? "ভিডিও প্লেয়ার চলছে" : "Video Player Active",
    closeVideo: isBn ? "ভিডিও বন্ধ করুন" : "Close Video",
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 aspect-[16/9] max-h-[580px] w-full flex items-center justify-center group">
        {isPlaying ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6">
            <p className="text-lg font-medium text-white">{content.videoActive}</p>
            <p className="text-xs text-white/80 mt-2">
              {content.badgeTitle}
            </p>
            <button
              onClick={() => setIsPlaying(false)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition"
            >
              {content.closeVideo}
            </button>
          </div>
        ) : (
          <>
            {/* Background Aesthetic Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#081b33] via-[#0f2d52] to-[#1c4b82] opacity-95"></div>

            {/* Subtle glow accents */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Video Header Overlay */}
            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-4 sm:p-6 z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3 text-white">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 8v8M8 12h8" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
                    {content.badgeTitle}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-blue-200/90 font-medium">
                    {content.badgeSubtitle}
                  </p>
                </div>
              </div>

              {/* Decorative brand accent icon */}
              <div className="hidden sm:flex items-center gap-1.5 opacity-70">
                <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            {/* Main Content: Left text + Right illustration + Play Button */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14">
              <div className="flex-1 flex items-center justify-between">
                {/* Left Typography Overlay */}
                <div className="max-w-xs sm:max-w-md text-left select-none">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-amber-500 tracking-tight drop-shadow-md leading-tight">
                    {content.overview}
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md mt-1 sm:mt-2">
                    {content.ofCompany}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-medium mt-3 hidden sm:block">
                    {content.tagline}
                  </p>
                </div>

                {/* Right Corporate Visual Motif */}
                <div className="relative hidden md:flex items-center justify-center pr-4">
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl border-2 border-amber-500/30 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl flex items-center justify-center">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full object-cover"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="200" height="200" fill="#0f2238" />
                      <circle cx="100" cy="85" r="40" fill="#1e3a5f" />
                      <path
                        d="M30 190 C30 145, 70 135, 100 135 C130 135, 170 145, 170 190 Z"
                        fill="#2563eb"
                        opacity="0.8"
                      />
                      <ellipse cx="100" cy="85" rx="30" ry="36" fill="#e2e8f0" />
                      {/* Suit & tie motif */}
                      <path d="M85 135 L100 170 L115 135 Z" fill="#0f172a" />
                      <polygon points="97,140 103,140 101,165 99,165" fill="#f59e0b" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Play Button (Center) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#881337] flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 group/btn cursor-pointer"
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-[#881337] group-hover/btn:fill-red-700 transition-colors"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
