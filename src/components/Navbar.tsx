"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  companyNameEn?: string;
  companyNameBn?: string;
  sinceYear?: string;
}

export default function Navbar({
  companyNameEn = "MY COMPANY",
  companyNameBn = "মাই কোম্পানি",
  sinceYear = "1991",
}: NavbarProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isBn = language === "bn";

  const navLinks = {
    consultation: isBn ? "কনসালটেশন সার্ভিস" : "Consultation Services",
    government: isBn ? "সরকারি সেবাসমূহ" : "Government Services",
    enterprise: isBn ? "এন্টারপ্রাইজ ম্যানেজমেন্ট" : "Enterprise Management",
    knowledge: isBn ? "নলেজ সেন্টার" : "Knowledge Center",
    about: isBn ? "আমাদের সম্পর্কে" : "About us",
    contact: isBn ? "যোগাযোগ" : "Contact us",
    licensing: isBn ? "ব্যবসায়িক লাইসেন্সিং" : "Business Licensing",
    compliance: isBn ? "রেগুলেটরি কমপ্লায়েন্স" : "Regulatory Compliance",
    restructuring: isBn ? "কর্পোরেট পুনর্গঠন" : "Corporate Restructuring",
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Company Branding */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-900 group-hover:text-blue-700 transition-colors">
              {isBn ? companyNameBn : companyNameEn}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="#consultation"
              className="text-[15px] font-medium text-black hover:text-blue-600 transition-colors"
            >
              {navLinks.consultation}
            </Link>

            <Link
              href="#government"
              className="text-[15px] font-medium text-black hover:text-blue-600 transition-colors"
            >
              {navLinks.government}
            </Link>

            {/* Enterprise Management Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{navLinks.enterprise}</span>
                <svg
                  className={`w-4 h-4 text-black transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="#licensing"
                    className="block px-4 py-2 text-[13px] font-medium text-black hover:bg-blue-50 hover:text-blue-600"
                  >
                    {navLinks.licensing}
                  </Link>
                  <Link
                    href="#compliance"
                    className="block px-4 py-2 text-[13px] font-medium text-black hover:bg-blue-50 hover:text-blue-600"
                  >
                    {navLinks.compliance}
                  </Link>
                  <Link
                    href="#corporate"
                    className="block px-4 py-2 text-[13px] font-medium text-black hover:bg-blue-50 hover:text-blue-600"
                  >
                    {navLinks.restructuring}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#knowledge"
              className="text-[15px] font-medium text-black hover:text-blue-600 transition-colors"
            >
              {navLinks.knowledge}
            </Link>

            <Link
              href="#about"
              className="text-[15px] font-medium text-black hover:text-blue-600 transition-colors"
            >
              {navLinks.about}
            </Link>
          </nav>

          {/* Right Action Items: Contact & Language Switcher (Bangla / English) */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="#contact"
              className="text-[14px] sm:text-[15px] font-semibold tracking-wide text-black hover:text-blue-600 uppercase transition-colors"
            >
              {navLinks.contact}
            </Link>

            {/* Language Toggle Switch (EN <-> বাংলা) */}
            <div className="flex items-center gap-2.5 bg-gray-100/80 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-colors">
              <span
                onClick={() => setLanguage("en")}
                className={`text-xs font-semibold cursor-pointer select-none transition-colors ${
                  !isBn ? "text-blue-600 font-bold" : "text-black/80 hover:text-black"
                }`}
              >
                EN
              </span>
              <Switch
                id="language-switch"
                checked={isBn}
                onCheckedChange={(checked) => setLanguage(checked ? "bn" : "en")}
                aria-label="Toggle language between English and Bangla"
                className="cursor-pointer data-checked:bg-green-700 data-unchecked:bg-gray-300"
              />
              <span
                onClick={() => setLanguage("bn")}
                style={{ fontFamily: "var(--font-bengali), serif" }}
                className={`text-xs cursor-pointer select-none transition-colors ${
                  isBn ? "text-green-800 font-bold" : "text-black/80 hover:text-black font-semibold"
                }`}
              >
                বাংলা
              </span>
            </div>
          </div>

          {/* Mobile Menu Hamburger & Mobile Lang Switch */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">
              <span className={`text-[11px] font-semibold select-none ${!isBn ? "text-blue-600 font-bold" : "text-black"}`}>
                EN
              </span>
              <Switch
                checked={isBn}
                onCheckedChange={(checked) => setLanguage(checked ? "bn" : "en")}
                size="sm"
                aria-label="Toggle language"
                className="cursor-pointer data-checked:bg-green-700 data-unchecked:bg-gray-300"
              />
              <span
                style={{ fontFamily: "var(--font-bengali), serif" }}
                className={`text-[11px] select-none ${isBn ? "text-green-800 font-bold" : "text-black"}`}
              >
                বাংলা
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-black hover:text-blue-600 hover:bg-gray-50"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Right-side slide-in & slide-out using Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Right-side Drawer */}
            <motion.aside
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Drawer Header: Title & Close Button */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                  <span className="text-base font-bold text-blue-900">
                    {isBn ? companyNameBn : companyNameEn}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-black hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <nav className="mt-6 space-y-4">
                  <Link
                    href="#consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.consultation}
                  </Link>
                  <Link
                    href="#government"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.government}
                  </Link>
                  <Link
                    href="#enterprise"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.enterprise}
                  </Link>
                  <Link
                    href="#knowledge"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.knowledge}
                  </Link>
                  <Link
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-medium text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.about}
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15px] font-semibold text-black hover:text-blue-600 transition-colors py-1"
                  >
                    {navLinks.contact}
                  </Link>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
