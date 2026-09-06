"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Helper to convert English digits to Bengali numerals when Bangla is active
function toBengaliNumerals(numStr: string): string {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return numStr.replace(/[0-9]/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
}

interface StatItemProps {
  target: number;
  suffix: string;
  labelTop: string;
  labelBottom: string;
  isBn: boolean;
  isVisible: boolean;
}

function AnimatedStat({
  target,
  suffix,
  labelTop,
  labelBottom,
  isBn,
  isVisible,
}: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2200; // 2.2 seconds animation
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, target]);

  // Format count with commas
  const formattedCount = count.toLocaleString();
  const displayValue = isBn
    ? `${toBengaliNumerals(formattedCount)}${suffix}`
    : `${formattedCount}${suffix}`;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Number with green indicator dot */}
      <div className="relative inline-flex items-center justify-center">
        {/* Top-left Green Dot */}
        <span className="absolute -left-3 sm:-left-4 top-2 sm:top-3 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10b981]" />

        {/* Counter Number */}
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight select-none">
          {displayValue}
        </span>
      </div>

      {/* Label: 2 lines */}
      <div className="mt-3 sm:mt-4 flex flex-col items-center">
        <span className="text-xs sm:text-[13px] font-bold tracking-widest text-black uppercase">
          {labelTop}
        </span>
        <span className="text-xs sm:text-[13px] font-bold tracking-widest text-black uppercase mt-0.5">
          {labelBottom}
        </span>
      </div>
    </div>
  );
}

export default function LiveStats() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on scroll
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 38022,
      suffix: "+",
      labelTop: isBn ? "ব্যবসায়িক" : "BUSINESS",
      labelBottom: isBn ? "লাইসেন্স ইস্যু" : "LICENSES ISSUED",
    },
    {
      target: 29,
      suffix: "+",
      labelTop: isBn ? "সরকারি" : "GOVERNMENT",
      labelBottom: isBn ? "সেক্টরস" : "SECTORS",
    },
    {
      target: 92,
      suffix: "%",
      labelTop: isBn ? "সম্পন্ন" : "COMPLETED",
      labelBottom: isBn ? "সেবাসমূহ" : "SERVICES",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 bg-[#f4f7fc] border-t border-gray-100/80 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Indicator Badge with Pulsing Dot */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-[#10b981]">
            {isBn ? "লাইভ ডাটা" : "Live Data"}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2563eb] tracking-tight max-w-3xl leading-tight">
          {isBn
            ? "আমাদের সিআরএম থেকে সরাসরি আপডেটকৃত রিয়েল-টাইম তথ্য"
            : "Real-time figures updated directly from our CRM"}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-xs sm:text-sm text-black font-normal tracking-wide">
          {isBn
            ? "যাতে আপনি আমাদের কাজের প্রভাব সরাসরি দেখতে পারেন"
            : "so you see our impact as it happens"}
        </p>

        {/* 3 Metrics Counter Grid */}
        <div className="mt-14 sm:mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 items-center justify-between">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              labelTop={stat.labelTop}
              labelBottom={stat.labelBottom}
              isBn={isBn}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
