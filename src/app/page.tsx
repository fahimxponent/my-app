"use client";

import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OurClients from "@/components/OurClients";
import LiveStats from "@/components/LiveStats";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import CustomerReviews from "@/components/CustomerReviews";
import LatestArticles from "@/components/LatestArticles";
import BookConsultation from "@/components/BookConsultation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function MainContent() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <div
      lang={language}
      data-lang={language}
      className={`min-h-screen flex flex-col bg-white text-black selection:bg-blue-600 selection:text-white ${
        isBn ? "font-bengali" : "font-sans"
      }`}
    >
      {/* Top Notification Announcement Bar */}
      <TopBanner />

      {/* Header Navigation Bar */}
      <Navbar companyNameEn="MY COMPANY" companyNameBn="মাই কোম্পানি" sinceYear="1991" />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero companyNameEn="MY COMPANY" companyNameBn="মাই কোম্পানি" sinceYear="1991" />
        <HowItWorks />
        <OurClients />
        <LiveStats />
        <WhatSetsUsApart />
        <CustomerReviews />
        <LatestArticles />
        <BookConsultation />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
