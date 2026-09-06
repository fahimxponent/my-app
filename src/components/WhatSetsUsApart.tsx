"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatSetsUsApart() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const services = [
    {
      id: 1,
      title: isBn ? "ব্যবসায়িক গঠন ও নিবন্ধন" : "Business Formation",
      desc: isBn
        ? "কোম্পানি রেজিস্ট্রেশন থেকে শুরু করে পূর্ণাঙ্গ কার্যক্রম চালু করা পর্যন্ত, আমরা প্রতিটি ধাপ পরিচালনা করি যাতে আপনি প্রবৃদ্ধিতে মনোযোগ দিতে পারেন।"
        : "From registering your company to getting it fully operational, we handle every step so you can focus on growth.",
      // Building / Corporate icon
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 16H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V8h4v2zm0-4H7V4h4v2zm6 12h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V8h4v2zm0-4h-4V4h4v2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: isBn ? "সরকারি লাইসেন্সিং" : "Government Licensing",
      desc: isBn
        ? "সকল সরকারি মন্ত্রণালয় এবং কর্তৃপক্ষ থেকে আপনার লাইসেন্স ও অনুমোদন দ্রুত সম্পন্ন করুন।"
        : "Fast-track your licenses and approvals from all government ministries and authorities.",
      // License / Certificate badge icon
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.59 8.59 17 10l-7 7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: isBn ? "সরকারি সেবাসমূহ" : "Government Services",
      desc: isBn
        ? "আমরা দক্ষতার সাথে আপনার সরকারি সেবাগুলো পরিচালনা করি, আপনার সময় বাঁচাই এবং মসৃণ কার্যক্রম নিশ্চিত করি।"
        : "We handle your government services efficiently, saving you time and ensuring smooth operations.",
      // Cart / Service bag icon
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: isBn ? "সরকারি প্ল্যাটফর্ম ব্যবস্থাপনা" : "Government Platform Management",
      desc: isBn
        ? "আমরা মুদাদ, গোসি, কিওয়া, মুকিম এবং অন্যান্য প্ল্যাটফর্মে আপনার অ্যাকাউন্ট পরিচালনা করে আপনাকে সম্পূর্ণ কমপ্লায়েন্ট রাখি।"
        : "We manage your accounts on platforms like Mudad, GOSI, Qiwa, Muqeem, and more keeping you compliant and up to date",
      // Settings / Gear platform icon
      icon: (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#2161eb] text-white overflow-hidden">
      {/* Aligned to the exact same content width container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top White Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white shadow-sm mb-3">
          <span className="text-xs sm:text-sm font-semibold text-[#2161eb]">
            {isBn ? "আবিষ্কার করুন" : "Discover"}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          {isBn ? "যা আমাদের অনন্য করে তুলেছে" : "What Sets Us Apart"}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-white/90 font-normal tracking-wide max-w-2xl leading-relaxed">
          {isBn
            ? "বিশেষ সরকারি লাইসেন্সিং এবং ব্যবসায়িক সমাধান যা আপনি অন্য কোথাও পাবেন না।"
            : "Exclusive government licensing and business solutions you won't find anywhere else."}
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl p-7 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white shadow-md hover:shadow-2xl hover:scale-[1.02]"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-6 text-white group-hover:text-[#2161eb] transition-colors">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold tracking-tight mb-3 text-white group-hover:text-black transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed font-normal text-white/90 group-hover:text-black/85 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="mt-8 pt-4 border-t border-transparent">
                <span className="text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 text-white/95 group-hover:text-black group-hover:hover:text-[#2161eb] transition-colors">
                  {isBn ? "আরও জানুন" : "Learn More"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-14">
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-bold text-sm sm:text-base rounded-xl shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
          >
            {isBn ? "সকল সেবা দেখুন" : "Explore All Services"}
          </Link>
        </div>
      </div>
    </section>
  );
}
