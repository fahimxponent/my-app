"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const steps = [
    {
      id: 1,
      title: isBn ? "ডিজিটাল চুক্তিপত্র" : "Contract via Nafath",
      desc: isBn
        ? "চুক্তিপত্র দ্রুত এবং নিরাপদে সম্পন্ন করুন, যা শুরু থেকেই সমস্ত প্রক্রিয়াকে আনুষ্ঠানিক ও সুনির্দিষ্ট করে।"
        : "Sign your contract quickly and securely through Nafath, ensuring all agreements are official from the start.",
      // Badge icon for Contract
      icon: (
        <div className="w-11 h-11 rounded-xl bg-[#1e7a68] flex items-center justify-center text-white shadow-xs">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: isBn ? "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার" : "Dedicated Account Manager",
      desc: isBn
        ? "একজন ব্যক্তিগত অ্যাকাউন্ট ম্যানেজার আপনার চাহিদা তদারকি করবেন, প্রশ্নের উত্তর দেবেন এবং সব কাগজপত্র পরিচালনা করবেন।"
        : "A personal account manager follows up on your needs, answers your questions, and handles all paperwork for you.",
      // Person / Avatar icon in solid blue
      icon: (
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-xs">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: isBn ? "কার্য সম্পাদন" : "Execution",
      desc: isBn
        ? "আমাদের বিশেষজ্ঞরা প্রয়োজনীয় সকল নিয়মকানুন ও কমপ্লায়েন্স মেনে সেবা প্রদান করবেন, যাতে আপনি আপনার ব্যবসায় মনোযোগ দিতে পারেন।"
        : "Our specialists deliver your services in full compliance with Saudi regulations, letting you focus on your business.",
      // Overlapping document sheets icon
      icon: (
        <div className="w-11 h-11 rounded-xl bg-blue-100/70 flex items-center justify-center text-blue-600 shadow-xs">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </div>
      ),
      isElevated: true,
    },
    {
      id: 4,
      title: isBn ? "হ্যান্ডওভার ও সমাপ্তি" : "Handover & Closure",
      desc: isBn
        ? "আমরা চূড়ান্ত সকল কাগজপত্র হস্তান্তর করি এবং প্রতিটি ধাপ আনুষ্ঠানিকভাবে সম্পন্ন ও সমাপ্ত হওয়া নিশ্চিত করি।"
        : "We deliver all final documents and ensure every step is officially completed and closed.",
      // Handshake icon in blue
      icon: (
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-xs">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.48-.48a3.001 3.001 0 0 0 0-4.24 3.001 3.001 0 0 0-4.24 0l-3.54 3.54a3.001 3.001 0 0 0 0 4.24zM13.41 10.59c-.41-.39-.41-1.03 0-1.42.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.42l-.48.48a3.001 3.001 0 0 0 0 4.24 3.001 3.001 0 0 0 4.24 0l3.54-3.54a3.001 3.001 0 0 0 0-4.24z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f8faff]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs mb-3">
            <span className="text-xs sm:text-sm font-semibold text-[#2563eb]">
              {isBn ? "কীভাবে কাজ করে" : "How It Works"}
            </span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
            {isBn ? "আমাদের সাথে আপনার যাত্রা" : "Your Journey with Us"}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`rounded-2xl p-7 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                step.isElevated ? "ring-1 ring-blue-100 shadow-md" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6">{step.icon}</div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-black tracking-tight leading-snug mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-[13px] text-black/85 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
