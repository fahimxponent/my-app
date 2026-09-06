"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  nameBn: string;
  initials: string;
  rating: number;
  quote: string;
  quoteBn: string;
}

export default function CustomerReviews() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const reviews: Review[] = [
    {
      id: 1,
      name: "Mousa Abu Tuaima",
      nameBn: "মুসা আবু তুয়াইমা",
      initials: "MA",
      rating: 5,
      quote: "The team is communicative and helpful with every legal step from registration to full compliance.",
      quoteBn: "রেজিস্ট্রেশন থেকে শুরু করে সম্পূর্ণ কমপ্লায়েন্স পর্যন্ত দলটি প্রতিটি ধাপে যোগাযোগ এবং সহায়তায় অত্যন্ত দক্ষ ছিল।",
    },
    {
      id: 2,
      name: "Abdelkarim Shoto",
      nameBn: "আব্দুল করিম শোটো",
      initials: "AS",
      rating: 5,
      quote: "Very appreciated work with highly efficiency",
      quoteBn: "অত্যন্ত দক্ষ এবং প্রশংসনীয় কাজ, প্রতিটি প্রক্রিয়া দ্রুত সম্পন্ন হয়েছে।",
    },
    {
      id: 3,
      name: "Fahad Al-Otaibi",
      nameBn: "ফাহাদ আল-ওতাইবি",
      initials: "FO",
      rating: 5,
      quote:
        "to finish. The team were extremely helpful, throughout the whole process, and guided us step by step on all instructions. They kept us updated, made everything easy, and were always approachable whenever recommended.",
      quoteBn:
        "শুরু থেকে শেষ পর্যন্ত পুরো প্রক্রিয়া জুড়ে দলটি অত্যন্ত সহায়ক ছিল এবং প্রতিটি ধাপে স্পষ্ট দিকনির্দেশনা দিয়েছে। সর্বদা যোগাযোগে সহজলভ্য ছিলেন।",
    },
    {
      id: 4,
      name: "Sara Al-Harbi",
      nameBn: "সারা আল-হারবি",
      initials: "SH",
      rating: 5,
      quote: "They kept us updated, made the government licensing painless, and were always approachable whenever needed.",
      quoteBn: "নিয়মিত আপডেট পেয়েছি, সরকারি লাইসেন্সিং প্রক্রিয়াটি ঝামেলামুক্ত করেছে এবং প্রয়োজনে সর্বদা পাশে পেয়েছি।",
    },
    {
      id: 5,
      name: "Mohammad Khan",
      nameBn: "মোহাম্মদ খান",
      initials: "MK",
      rating: 5,
      quote: "Professionalism at its best. They managed all government portals effortlessly. Looking forward to long-term collaboration.",
      quoteBn: "পেশাদারিত্বের উৎকৃষ্ট প্রমাণ। তারা সকল সরকারি পোর্টাল অত্যন্ত দক্ষতার সাথে পরিচালনা করেছে।",
    },
    {
      id: 6,
      name: "Tariq Al-Zahrani",
      nameBn: "তারিক আল-জাহরানি",
      initials: "TZ",
      rating: 5,
      quote: "Remarkable service speed and thorough attention to legal details. Highly trusted partner for enterprise setups.",
      quoteBn: "অসাধারণ সেবার গতি এবং আইনি বিস্তারিত বিষয়ে গভীর মনোযোগ। প্রতিষ্ঠান নিবন্ধনে বিশ্বস্ত অংশীদার।",
    },
    {
      id: 7,
      name: "Omar Al-Ghamdi",
      nameBn: "ওমর আল-গামদি",
      initials: "OG",
      rating: 5,
      quote: "Smooth, compliant, and transparent. The digital portal coordination exceeded our expectations.",
      quoteBn: "ঝামেলাহীন, নিয়মমাফিক এবং স্বচ্ছ। ডিজিটাল পোর্টালের সমন্বয় আমাদের প্রত্যাশাকেও ছাড়িয়ে গেছে।",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(1); // Default to Abdelkarim Shoto (matches screenshot)
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check screen size for responsive slide translations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 4 seconds, pauses when user hovers
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Helper function to calculate circular offset relative to currentIndex
  const getCircularDiff = (index: number) => {
    const total = reviews.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Physical slide position for full-card animation
  const getX = (diff: number) => {
    if (diff === 0) return 0;
    if (isMobile) {
      return diff > 0 ? "110%" : "-110%";
    }
    if (diff === 1) return 330;
    if (diff === -1) return -330;
    return diff > 1 ? 650 : -650;
  };

  const getOpacity = (diff: number) => {
    if (diff === 0) return 1;
    if (isMobile) return 0;
    if (Math.abs(diff) === 1) return 0.45;
    return 0;
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Solid Blue Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#2563eb] text-white shadow-xs mb-4">
          <span className="text-xs sm:text-[13px] font-semibold">
            {isBn ? "গ্রাহকদের প্রতিক্রিয়া" : "Customer Reviews"}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
          {isBn ? "আমাদের গ্রাহকরা যা বলেন" : "What our customers say"}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-black font-normal tracking-wide">
          {isBn
            ? "যাদের সাথে আমরা কাজ করেছি তাদের বাস্তব প্রতিক্রিয়া।"
            : "Real feedback from clients we've worked with."}
        </p>

        {/* Physical Sliding Carousel Track Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full max-w-6xl mt-12 sm:mt-16 flex items-center justify-center h-[360px] sm:h-[380px]"
        >
          {/* Left Arrow Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-2 sm:left-4 md:left-10 lg:left-16 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100/90 hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Track: Full slide animation where entire card slides across */}
          {reviews.map((review, idx) => {
            const diff = getCircularDiff(idx);
            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= (isMobile ? 0 : 1);

            return (
              <motion.div
                key={review.id}
                animate={{
                  x: getX(diff),
                  scale: isCenter ? 1 : 0.88,
                  opacity: getOpacity(diff),
                  zIndex: isCenter ? 20 : isVisible ? 10 : 0,
                  boxShadow: isCenter
                    ? "0 15px 45px rgba(0, 0, 0, 0.08)"
                    : "0 4px 20px rgba(0, 0, 0, 0.04)",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1], // Smooth cubic ease for natural full-card sliding
                }}
                onClick={() => {
                  if (!isCenter) handleSelect(idx);
                }}
                className={`absolute w-[92vw] max-w-[560px] lg:max-w-[620px] h-[330px] sm:h-[310px] bg-white rounded-3xl border border-gray-100/90 p-7 sm:p-9 text-left flex flex-col justify-between select-none ${
                  !isCenter ? "cursor-pointer" : ""
                } ${Math.abs(diff) > 1 ? "pointer-events-none" : ""}`}
              >
                {/* Giant decorative quotation mark in top-right corner */}
                <div className="absolute top-6 right-8 text-blue-100 select-none pointer-events-none">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div>
                  {/* Star Rating (5 vibrant blue stars) */}
                  <div className="flex items-center gap-1.5 text-[#2563eb]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Quote with Fixed Height to guarantee zero card resizing */}
                  <div className="h-[125px] sm:h-[110px] flex items-center mt-4">
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-black leading-relaxed italic pr-8 line-clamp-4">
                      &ldquo;{isBn ? review.quoteBn : review.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Reviewer Profile - Fixed at bottom */}
                <div className="mt-auto pt-4 flex items-center gap-3.5 border-t border-gray-50/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xs sm:text-sm font-bold tracking-wider shadow-xs shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold text-black tracking-tight">
                      {isBn ? review.nameBn : review.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Right Arrow Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-2 sm:right-4 md:right-10 lg:right-16 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100/90 hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dash Indicators */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-7 bg-[#94a3b8]"
                  : "w-5 bg-[#e2e8f0] hover:bg-[#cbd5e1]"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="#reviews"
            className="inline-flex items-center justify-center px-7 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            {isBn ? "সকল রিভিউ দেখুন" : "View all reviews"}
          </Link>
        </div>
      </div>
    </section>
  );
}
