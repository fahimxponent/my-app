"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* Left Column: Company Branding, CR/VAT numbers, Social Icons */}
          <div className="flex flex-col space-y-6 max-w-md">
            {/* Logo and Company Name */}
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-900 hover:text-blue-700 transition-colors uppercase">
                {isBn ? "মাই কোম্পানি" : "MY COMPANY"}
              </span>
            </Link>

            {/* CR & VAT Numbers */}
            <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-black">
              <div className="flex items-center gap-2">
                <span>{isBn ? "সিআর নম্বর:" : "CR Num:"}</span>
                <span className="text-[#2563eb] tracking-wide font-bold">7010513724</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{isBn ? "ভ্যাট নম্বর:" : "VAT Num:"}</span>
                <span className="text-[#2563eb] tracking-wide font-bold">300491468100003</span>
              </div>
            </div>

            {/* Social Media Icons (Solid Blue Circles) */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+966510080082"
                aria-label="Phone"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966510080082"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns: Enterprise Management & Resources */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
            {/* Column 1: Enterprise Management */}
            <div>
              <h3 className="text-base font-bold text-black tracking-tight mb-4">
                {isBn ? "এন্টারপ্রাইজ ম্যানেজমেন্ট" : "Enterprise Management"}
              </h3>
              <ul className="space-y-3 text-sm font-medium text-black">
                <li>
                  <Link
                    href="#hr-management"
                    className="hover:text-[#2563eb] transition-colors"
                  >
                    {isBn ? "এইচআর ম্যানেজমেন্ট প্যাকেজ" : "HR Management Package"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h3 className="text-base font-bold text-black tracking-tight mb-4">
                {isBn ? "রিসোর্সেস" : "Resources"}
              </h3>
              <ul className="space-y-3 text-sm font-medium text-black">
                <li>
                  <Link href="#consultation" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "কনসালটেশন সার্ভিস" : "Consultation Services"}
                  </Link>
                </li>
                <li>
                  <Link href="#government" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "সরকারি সেবাসমূহ" : "Government Services"}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "আমাদের সম্পর্কে" : "About us"}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "যোগাযোগ" : "Contact us"}
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "ব্লগ" : "Blog"}
                  </Link>
                </li>
                <li>
                  <Link href="#partner" className="hover:text-[#2563eb] transition-colors">
                    {isBn ? "পার্টনার হোন" : "Become a Partner"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment/Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Version */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xs text-black font-medium">
              {isBn
                ? "© সর্বস্বত্ব সংরক্ষিত মাই কোম্পানি ২০২৬।"
                : "© All rights reserved by My Company 2026."}
            </span>
            <span className="text-[11px] text-black/60 font-mono mt-0.5">
              v2.2.7
            </span>
          </div>

          {/* Payment, Verification & Trust Badges (Strictly English/Bangla Only, No Arabic) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Nafath Badge */}
            <div className="px-2.5 py-1 bg-[#107062] rounded-md text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs">
              <span>Nafath</span>
              <span className="text-[9px] opacity-80 font-normal">Verified</span>
            </div>

            {/* VISA */}
            <div className="px-2 py-0.5 font-serif font-black text-[#1a1f71] text-base tracking-wider">
              VISA
            </div>

            {/* Mastercard */}
            <div className="flex items-center">
              <span className="w-5 h-5 rounded-full bg-[#eb001b] -mr-2" />
              <span className="w-5 h-5 rounded-full bg-[#f79e1b] opacity-90" />
            </div>

            {/* mada Badge */}
            <div className="px-2.5 py-1 bg-[#f1f5f9] border border-gray-200 rounded-md text-[#008459] font-bold text-xs flex items-center gap-1">
              <span className="text-[#0284c7] text-[11px] font-bold">mada</span>
            </div>

            {/* Business Center */}
            <div className="px-2.5 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-[#0c2a53] flex items-center gap-1">
              <span>Business Center</span>
            </div>

            {/* Tamara Badge */}
            <div className="px-2.5 py-1 bg-[#fed7aa] border border-amber-200 rounded-md text-[#9a3412] text-xs font-bold">
              Tamara
            </div>

            {/* Verified Gov Partner Badge */}
            <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-md text-[#047857] text-[10px] font-bold flex items-center gap-1">
              <span>Gov Certified</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
