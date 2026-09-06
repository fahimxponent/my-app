"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function OurClients() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const corporateClients = [
    {
      id: "lusine",
      name: "L'usine",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-900 border-2 border-amber-400 flex items-center justify-center text-white font-serif font-black text-xs shadow-xs">
            L&apos;u
          </div>
          <span className="font-extrabold text-blue-950 text-base tracking-tight font-sans">
            l&apos;usine
          </span>
        </div>
      ),
    },
    {
      id: "qiddiya",
      name: "Qiddiya",
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5 items-end h-5 mb-1">
            <span className="w-1 h-3 bg-amber-400 rounded-t-xs"></span>
            <span className="w-1 h-4 bg-orange-500 rounded-t-xs"></span>
            <span className="w-1 h-5 bg-pink-500 rounded-t-xs"></span>
            <span className="w-1 h-4 bg-purple-500 rounded-t-xs"></span>
            <span className="w-1 h-3 bg-blue-500 rounded-t-xs"></span>
          </div>
          <span className="font-bold text-black text-xs tracking-wider uppercase">
            Qiddiya
          </span>
        </div>
      ),
    },
    {
      id: "snb",
      name: "SNB",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#006633]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
          </svg>
          <span className="font-black text-[#006633] text-xl tracking-tight">
            SNB
          </span>
        </div>
      ),
    },
    {
      id: "neom",
      name: "NEOM",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-sky-600 flex items-center justify-center p-0.5 mb-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            </div>
          </div>
          <span className="font-bold text-black text-xs tracking-widest uppercase">
            NEOM
          </span>
        </div>
      ),
    },
    {
      id: "aramco",
      name: "Aramco",
      logo: (
        <div className="flex items-center gap-2">
          <span className="font-bold text-black text-sm tracking-tight">
            aramco
          </span>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00a3e0] to-[#00843d] flex items-center justify-center text-white text-[10px] font-bold">
            ✦
          </div>
        </div>
      ),
    },
    {
      id: "sabic",
      name: "SABIC",
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#0085ca] flex items-center justify-center text-white font-black text-xs">
            S
          </div>
          <span className="font-black text-[#0085ca] text-base tracking-wider">
            SABIC
          </span>
        </div>
      ),
    },
    {
      id: "stc",
      name: "stc",
      logo: (
        <div className="flex items-center">
          <span className="font-black text-[#4f008c] text-2xl tracking-tighter">
            stc
          </span>
        </div>
      ),
    },
  ];

  const publicFigures = [
    {
      id: 1,
      name: isBn ? "ফারিয়াল হুসাম" : "Dr. Faryal Hossam",
      role: isBn ? "লাইফস্টাইল ইনফ্লুয়েন্সার" : "Lifestyle Influencer",
      avatarBg: "from-rose-400 to-pink-600",
      initials: "FH",
    },
    {
      id: 2,
      name: isBn ? "ওসামা আল-শরীফ" : "Osama Al-Sharif",
      role: isBn ? "অভিনেতা" : "Actor",
      avatarBg: "from-amber-400 to-amber-700",
      initials: "OS",
    },
    {
      id: 3,
      name: isBn ? "টি শপিং" : "Tee Shopping",
      role: isBn ? "কন্টেন্ট ক্রিয়েটর" : "Content Creator",
      avatarBg: "from-blue-400 to-indigo-600",
      initials: "TS",
    },
    {
      id: 4,
      name: isBn ? "রায়ান আহমেদ" : "Rayan Ahmed",
      role: isBn ? "টেক রিভিউয়ার" : "Tech Reviewer",
      avatarBg: "from-emerald-400 to-teal-600",
      initials: "RA",
    },
    {
      id: 5,
      name: isBn ? "নূরা খালেদ" : "Noura Khaled",
      role: isBn ? "ফ্যাশন ডিজাইনার" : "Fashion Designer",
      avatarBg: "from-purple-400 to-fuchsia-600",
      initials: "NK",
    },
    {
      id: 6,
      name: isBn ? "তারিক রহমান" : "Tariq Rahman",
      role: isBn ? "বিজনেস স্ট্র্যাটেজিস্ট" : "Business Strategist",
      avatarBg: "from-cyan-500 to-blue-700",
      initials: "TR",
    },
  ];

  // Snapchat Ghost Icon
  const snapchatIcon = (
    <svg className="w-4 h-4 text-amber-400 fill-current opacity-80" viewBox="0 0 24 24">
      <path d="M12.2 2C9.46 2 7.74 3.65 7.6 5.86c-.05.74-.01 1.48.1 2.21-.49.2-.95.42-1.39.67-.32.18-.54.49-.62.84-.08.35.02.72.27.97.23.23.55.33.86.26.17-.04.35-.1.52-.16.14.77.47 1.49.95 2.1-.53.28-1.01.66-1.42 1.11-.27.3-.39.7-.33 1.09.06.39.29.73.64.92.51.27 1.07.44 1.65.5.09.52.28 1.02.57 1.46-.77.34-1.57.62-2.39.84-.33.09-.59.34-.69.67-.1.33-.03.69.19.95.3.36.75.54 1.21.49 1.5-.18 2.97-.56 4.38-1.12.18.07.38.1.58.1s.4-.03.58-.1c1.41.56 2.88.94 4.38 1.12.46.05.91-.13 1.21-.49.22-.26.29-.62.19-.95-.1-.33-.36-.58-.69-.67-.82-.22-1.62-.5-2.39-.84.29-.44.48-.94.57-1.46.58-.06 1.14-.23 1.65-.5.35-.19.58-.53.64-.92.06-.39-.06-.79-.33-1.09-.41-.45-.89-.83-1.42-1.11.48-.61.81-1.33.95-2.1.17.06.35.12.52.16.31.07.63-.03.86-.26.25-.25.35-.62.27-.97-.08-.35-.3-.66-.62-.84-.44-.25-.9-.47-1.39-.67.11-.73.15-1.47.1-2.21C16.66 3.65 14.94 2 12.2 2z" />
    </svg>
  );

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs mb-3">
          <span className="text-xs sm:text-sm font-semibold text-[#2563eb]">
            {isBn ? "আমাদের ক্লায়েন্টস" : "Our Clients"}
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight max-w-3xl mx-auto">
          {isBn
            ? "শীর্ষস্থানীয় ব্যবসা, বিশিষ্ট ব্যক্তিত্ব এবং অংশীদারদের বিশ্বস্ত সহযোগী"
            : "Trusted by Leading Businesses, Public Figures, and Vendors"}
        </h2>
      </div>

      {/* Marquee Rows Container (Aligned to same section content width) */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 relative">
        {/* Soft edge gradients for seamless fade-in and fade-out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Corporate Clients (Slow speed marquee) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-5 shrink-0 animate-marquee-slow hover:[animation-play-state:paused] py-1">
            {[...corporateClients, ...corporateClients, ...corporateClients].map((client, idx) => (
              <div
                key={`corp-${client.id}-${idx}`}
                className="w-[190px] sm:w-[220px] h-[96px] sm:h-[105px] bg-white border border-gray-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 select-none transition-transform duration-300 hover:scale-[1.03] hover:shadow-md"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Public Figures & Influencers (Slightly faster speed marquee) */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-5 shrink-0 animate-marquee-fast hover:[animation-play-state:paused] py-1">
            {[...publicFigures, ...publicFigures, ...publicFigures].map((figure, idx) => (
              <div
                key={`fig-${figure.id}-${idx}`}
                className="w-[230px] sm:w-[260px] h-[72px] sm:h-[78px] bg-white border border-gray-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-4 py-3 flex items-center justify-between select-none transition-transform duration-300 hover:scale-[1.03] hover:shadow-md"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  {/* Avatar Initials Badge */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${figure.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0`}
                  >
                    {figure.initials}
                  </div>
                  {/* Name and Role */}
                  <div className="flex flex-col text-left truncate">
                    <span className="text-xs sm:text-[13px] font-bold text-black truncate">
                      {figure.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-blue-600 truncate">
                      {figure.role}
                    </span>
                  </div>
                </div>
                {/* Social Ghost Icon */}
                <div className="shrink-0 ml-2">{snapchatIcon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
