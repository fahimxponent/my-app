"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookConsultation() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f4f8]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large White Container Box */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Heading, Description & Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:space-y-12">
              <div>
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-tight leading-tight">
                  {isBn ? "আপনার ফ্রি পরামর্শ বুক করুন" : "Book Your Free Consultation"}
                </h2>

                {/* Section Description */}
                <p className="mt-5 text-sm sm:text-base text-black font-normal leading-relaxed">
                  {isBn
                    ? "৩০ বছরেরও বেশি প্রমাণিত দক্ষতার সাথে, মাই কোম্পানি আপনার ব্যবসা সেটআপ এবং সরকারি লাইসেন্সিংয়ের জন্য ধারণা থেকে সমাপ্তি পর্যন্ত উপযোগী সমাধান তৈরি করতে নিখরচায় বিনামূল্যে পরামর্শ প্রদান করে।"
                    : "With over 30 years of proven expertise, My Company offers a complimentary consultation to craft tailored solutions for your business setup and government licensing from concept to completion."}
                </p>
              </div>

              {/* Contact Information Points */}
              <div className="space-y-5 pt-4">
                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-black tracking-wide">
                    +966 510080082
                  </span>
                </div>

                {/* Working Hours Item */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-black">
                    {isBn ? "রবি - বৃহস্পতি সকাল ৯টা থেকে বিকাল ৫টা" : "Sun - Thu from 9 am till 5 pm"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Royal Blue Consultation Form */}
            <div className="lg:col-span-7 bg-[#2161eb] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md text-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name & Establishment Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={isBn ? "পুরো নাম" : "Full Name"}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-black/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs"
                  />
                  <input
                    type="text"
                    required
                    placeholder={isBn ? "প্রতিষ্ঠানের নাম" : "Establishment Name"}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-black/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs"
                  />
                </div>

                {/* Row 2: Email & Mobile Phone with Country Code Indicator */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder={isBn ? "ইমেইল" : "Email"}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-black/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs"
                  />
                  
                  {/* Phone Input */}
                  <div className="relative flex items-center w-full bg-white rounded-lg shadow-xs overflow-hidden">
                    <div className="flex items-center gap-1 pl-3 pr-2 border-r border-gray-200 shrink-0 text-black/80 font-bold text-xs">
                      <span>+966</span>
                      <svg className="w-3 h-3 text-black/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder={isBn ? "মোবাইল নম্বর" : "Mobile Phone"}
                      className="w-full px-3 py-3 bg-white text-black placeholder:text-black/60 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 3: Contact Language & Preferred Contact Times Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg bg-white text-black text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs cursor-pointer"
                    >
                      <option value="" disabled>
                        {isBn ? "যোগাযোগের ভাষা" : "Contact Language"}
                      </option>
                      <option value="en">English</option>
                      <option value="bn">বাংলা (Bengali)</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-black/60">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg bg-white text-black text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs cursor-pointer"
                    >
                      <option value="" disabled>
                        {isBn ? "যোগাযোগের পছন্দের সময়" : "Preferred Contact Times"}
                      </option>
                      <option value="morning">{isBn ? "সকাল (৯টা - ১২টা)" : "Morning (9 am - 12 pm)"}</option>
                      <option value="afternoon">{isBn ? "দুপুর (১২টা - ৩টা)" : "Afternoon (12 pm - 3 pm)"}</option>
                      <option value="evening">{isBn ? "বিকাল (৩টা - ৫টা)" : "Evening (3 pm - 5 pm)"}</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-black/60">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 4: Select Service Full Width */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg bg-white text-black text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs cursor-pointer"
                  >
                    <option value="" disabled>
                      {isBn ? "আপনার আগ্রহের সেবা নির্বাচন করুন" : "Select the service you are interested in"}
                    </option>
                    <option value="company-formation">{isBn ? "কোম্পানি গঠন ও লাইসেন্সিং" : "Company Formation & Licensing"}</option>
                    <option value="commercial-registration">{isBn ? "বাণিজ্যিক নিবন্ধন ও নথিপত্র" : "Commercial Registration & CR"}</option>
                    <option value="compliance">{isBn ? "আইনি ও কমপ্লায়েন্স পরামর্শ" : "Legal & Compliance Consulting"}</option>
                    <option value="tax-zakat">{isBn ? "ট্যাক্স ও যাকাত ফাইলিং" : "Tax & Zakat Advisory"}</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-black/60">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Row 5: Note Textarea */}
                <div>
                  <textarea
                    rows={4}
                    placeholder={isBn ? "নোট..." : "Note"}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-black/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-xs resize-none"
                  />
                </div>

                {/* Row 6: reCAPTCHA Widget Simulation */}
                <div className="pt-1">
                  <div
                    onClick={() => setIsRobotChecked(!isRobotChecked)}
                    className="inline-flex items-center justify-between gap-6 px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isRobotChecked}
                        onChange={(e) => setIsRobotChecked(e.target.checked)}
                        className="w-5 h-5 rounded-xs border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-medium text-black">
                        {isBn ? "আমি রোবট নই" : "I'm not a robot"}
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                      <span className="text-[9px] text-gray-500 font-semibold tracking-tighter">
                        reCAPTCHA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 7: Bottom Send Message Button & Response Time Text */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#1447bd] hover:bg-[#0f3695] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    {isBn ? "বার্তা পাঠান" : "Send Message"}
                  </button>

                  <span className="text-xs sm:text-[13px] text-white font-medium">
                    {isBn ? "আমরা ২৪ ঘণ্টার মধ্যে সাড়া দেব" : "We will respond within 24 hours"}
                  </span>
                </div>

                {isSubmitted && (
                  <div className="p-3 bg-green-500/20 border border-green-300/40 rounded-lg text-xs text-white font-medium text-center">
                    {isBn ? "ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।" : "Thank you! Your message has been sent successfully."}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
