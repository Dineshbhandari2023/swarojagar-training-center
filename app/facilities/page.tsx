"use client";

import React from "react";
import { useApp } from "@/lib/context";
import { translations } from "@/lib/translations";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hotel,
  ThumbsUp,
  BookOpen,
  Users,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  Award,
  Clock,
  MapPin,
  Phone,
  Wifi,
  Coffee,
  Car,
  Dumbbell,
  Shield,
  Heart,
  GraduationCap,
} from "lucide-react";

const facilityThemes: Record<
  string,
  {
    gradient: string;
    iconBg: string;
    iconText: string;
    accent: string;
    lightBg: string;
    badge: string;
  }
> = {
  hostel: {
    gradient: "from-purple-900 via-purple-800 to-slate-900",
    iconBg: "bg-purple-500/20",
    iconText: "text-purple-300",
    accent: "text-purple-400",
    lightBg: "bg-purple-50 dark:bg-purple-950/20",
    badge:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  },
  skill: {
    gradient: "from-green-900 via-green-800 to-slate-900",
    iconBg: "bg-green-500/20",
    iconText: "text-green-300",
    accent: "text-green-400",
    lightBg: "bg-green-50 dark:bg-green-950/20",
    badge:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  },
  ctevt: {
    gradient: "from-blue-900 via-blue-800 to-slate-900",
    iconBg: "bg-blue-500/20",
    iconText: "text-blue-300",
    accent: "text-blue-400",
    lightBg: "bg-blue-50 dark:bg-blue-950/20",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  },
  trainer: {
    gradient: "from-amber-900 via-amber-800 to-slate-900",
    iconBg: "bg-amber-500/20",
    iconText: "text-amber-300",
    accent: "text-amber-400",
    lightBg: "bg-amber-50 dark:bg-amber-950/20",
    badge:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  },
};

const facilityIcons: Record<string, React.ReactNode> = {
  hostel: <Hotel className="h-8 w-8" />,
  skill: <ThumbsUp className="h-8 w-8" />,
  ctevt: <BookOpen className="h-8 w-8" />,
  trainer: <Users className="h-8 w-8" />,
};

const facilityDetails: Record<
  string,
  {
    features: string[];
    description: string;
    benefits: string[];
  }
> = {
  hostel: {
    features: [
      "Clean and hygienic rooms with regular housekeeping",
      "Separate hostels for male and female students",
      "24/7 security with CCTV surveillance",
      "Hot water bathing facility",
      "Common room with TV and entertainment",
      "Study hall with quiet environment",
      "Laundry services available",
      "Mess facility with nutritious meals",
    ],
    description:
      "Our on-campus hostel provides a safe, comfortable, and conducive living environment for students coming from outside Itahari. The hostel is designed to make you feel at home while you focus on your skill development journey.",
    benefits: [
      "Save on daily commute time and costs",
      "Live with like-minded peers and build networks",
      "Access to extended study hours",
      "Structured routine for optimal learning",
    ],
  },
  skill: {
    features: [
      "100% practical, hands-on training approach",
      "Industry-standard tools and equipment",
      "Real-world project simulations",
      "Personalized attention with small batch sizes",
      "Post-training business setup support",
      "Job placement assistance",
      "Lifetime access to course materials",
      "Regular skill assessment and feedback",
    ],
    description:
      "We don't just teach theory – we guarantee you'll master real-world skills that make you immediately employable or capable of starting your own business. Our curriculum is designed by industry experts with decades of experience.",
    benefits: [
      "Start earning immediately after course completion",
      "Confidence to work independently",
      "Skills recognized by employers across Nepal and abroad",
      "Entrepreneurial mindset development",
    ],
  },
  ctevt: {
    features: [
      "Government-recognized certification",
      "Curriculum aligned with CTEVT standards",
      "Regular inspections and quality audits",
      "Standardized examination system",
      "National and international credential recognition",
      "Pathway to further technical education",
      "Access to CTEVT skill testing programs",
      "Industry-validated competency standards",
    ],
    description:
      "As a CTEVT-affiliated institution, we maintain the highest standards of technical education. Our courses follow the national curriculum framework, ensuring your certification is recognized by employers and educational institutions across Nepal and internationally.",
    benefits: [
      "Government-validated qualification",
      "Eligible for skilled worker visas abroad",
      "Credit transfer options for higher education",
      "Access to government skill development programs",
    ],
  },
  trainer: {
    features: [
      "Trainers with 10+ years industry experience",
      "Exposure to international work standards",
      "Patient and supportive teaching approach",
      "Regular trainer development programs",
      "Industry connections for placements",
      "Multilingual instruction (Nepali, English, Hindi)",
      "One-on-one mentorship available",
      "Continuous assessment and feedback",
    ],
    description:
      "Learn from the best! Our trainers are seasoned professionals who have worked in top industries across Nepal, Gulf countries, Japan, Korea, and beyond. They bring real-world insights and practical knowledge that textbooks simply cannot provide.",
    benefits: [
      "Learn industry secrets and best practices",
      "Get career guidance from experienced mentors",
      "Build professional network through trainer connections",
      "Understand international work culture expectations",
    ],
  },
};

export default function FacilitiesPage() {
  const { language } = useApp();
  const t = translations[language];

  const facilities = [
    { id: "hostel", title: t.facilities.hostelTitle },
    { id: "skill", title: t.facilities.skillTitle },
    { id: "ctevt", title: t.facilities.ctevtTitle },
    { id: "trainer", title: t.facilities.trainerTitle },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white/40" />
          <div className="absolute -bottom-20 -left-10 w-96 h-96 rounded-full border-2 border-white/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">Key Facilities</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              {t.facilities.title}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
              {t.facilities.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {facilities.map((facility, index) => {
              const theme = facilityThemes[facility.id];
              const details = facilityDetails[facility.id];
              const icon = facilityIcons[facility.id];

              return (
                <motion.section
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  {/* Facility Header */}
                  <div className="flex items-start gap-5">
                    <div
                      className={`p-4 rounded-2xl ${theme.iconBg} ${theme.iconText} shrink-0`}
                    >
                      {icon}
                    </div>
                    <div>
                      <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white leading-tight">
                        {facility.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {details.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {details.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div
                    className={`${theme.lightBg} rounded-2xl p-6 border border-slate-100 dark:border-slate-800`}
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {details.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                          <span className="text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              );
            })}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-950 dark:from-blue-950 dark:to-indigo-950 p-8 sm:p-12 rounded-3xl text-center text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-snug">
                  {language === "en"
                    ? "Ready to experience our facilities firsthand?"
                    : "के तपाईं हाम्रो सुविधाहरू प्रत्यक्ष अनुभव गर्न तयार हुनुहुन्छ?"}
                </h3>
                <p className="text-sm sm:text-base text-blue-50 dark:text-slate-300 leading-relaxed font-semibold">
                  {language === "en"
                    ? "Visit our campus at Pragati Chowk, Itahari for a free tour and consultation."
                    : "निःशुल्क भ्रमण र परामर्शका लागि इटहरी प्रगति चोकमा रहेको हाम्रो क्याम्पस आउनुहोस्।"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/#contact"
                    className="inline-block bg-white hover:bg-slate-50 text-blue-700 font-sans font-extrabold px-8 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    {t.hero.ctaSecondary}
                  </Link>
                  <a
                    href="tel:+9779862035584"
                    className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-900 font-sans font-bold px-8 py-3 rounded-xl transition-all"
                  >
                    <Phone className="h-4 w-4 inline mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Links */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Explore More
                  </h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <Link
                    href="/#programs"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                  >
                    <GraduationCap className="h-5 w-5 text-blue-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      View All Courses
                    </span>
                  </Link>
                  <Link
                    href="/#contact"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Contact & Location
                    </span>
                  </Link>
                  <a
                    href="tel:+9779862035584"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                  >
                    <Shield className="h-5 w-5 text-purple-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Free Counseling
                    </span>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-900 dark:bg-blue-950 rounded-2xl p-6 text-center">
                <GraduationCap className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-2">
                  Need More Information?
                </h3>
                <p className="text-xs text-blue-200 mb-4 leading-relaxed">
                  Our team is ready to answer all your questions about our
                  facilities and programs.
                </p>
                <Link
                  href="/#contact"
                  className="block py-2.5 px-4 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs rounded-xl transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
