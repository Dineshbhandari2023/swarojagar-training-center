"use client";

import React, { use } from "react";
import { useApp } from "@/lib/context";
import { translations } from "@/lib/translations";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Wrench,
  Laptop,
  Scissors,
  Utensils,
  Zap,
  Clock,
  Coins,
  Briefcase,
  CheckCircle2,
  Award,
  ArrowLeft,
  Phone,
  MapPin,
  Users,
  Star,
  ChevronRight,
  GraduationCap,
  CalendarCheck,
} from "lucide-react";

const courseIcons: Record<string, React.ReactNode> = {
  "ac-repair": <Wrench className="h-8 w-8" />,
  computer: <Laptop className="h-8 w-8" />,
  tailoring: <Scissors className="h-8 w-8" />,
  cook: <Utensils className="h-8 w-8" />,
  wiring: <Zap className="h-8 w-8" />,
};

const courseThemes: Record<
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
  "ac-repair": {
    gradient: "from-sky-900 via-sky-800 to-slate-900",
    iconBg: "bg-sky-500/20",
    iconText: "text-sky-300",
    accent: "text-sky-400",
    lightBg: "bg-sky-50 dark:bg-sky-950/20",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  },
  computer: {
    gradient: "from-indigo-900 via-indigo-800 to-slate-900",
    iconBg: "bg-indigo-500/20",
    iconText: "text-indigo-300",
    accent: "text-indigo-400",
    lightBg: "bg-indigo-50 dark:bg-indigo-950/20",
    badge:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  },
  tailoring: {
    gradient: "from-pink-900 via-pink-800 to-slate-900",
    iconBg: "bg-pink-500/20",
    iconText: "text-pink-300",
    accent: "text-pink-400",
    lightBg: "bg-pink-50 dark:bg-pink-950/20",
    badge: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  },
  cook: {
    gradient: "from-amber-900 via-amber-800 to-slate-900",
    iconBg: "bg-amber-500/20",
    iconText: "text-amber-300",
    accent: "text-amber-400",
    lightBg: "bg-amber-50 dark:bg-amber-950/20",
    badge:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  },
  wiring: {
    gradient: "from-yellow-900 via-yellow-800 to-slate-900",
    iconBg: "bg-yellow-500/20",
    iconText: "text-yellow-300",
    accent: "text-yellow-400",
    lightBg: "bg-yellow-50 dark:bg-yellow-950/20",
    badge:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
};

// Static course extra details (extend with more info not in translations)
const courseExtraDetails: Record<
  string,
  {
    eligibility: string[];
    outcomes: string[];
    schedule: string;
    batchSize: string;
    certification: string;
  }
> = {
  "ac-repair": {
    eligibility: [
      "Minimum SEE / SLC pass",
      "Age 16–45",
      "Interest in technical/mechanical work",
      "Basic understanding of electricity preferred",
    ],
    outcomes: [
      "Diagnose and repair all major AC/refrigerator brands",
      "Perform gas charging independently",
      "Handle compressor and electrical repairs",
      "Set up your own repair shop or work abroad",
    ],
    schedule: "Morning (6 AM – 9 AM) / Evening (4 PM – 7 PM)",
    batchSize: "15–20 students per batch",
    certification: "CTEVT National Certificate + Center Completion Certificate",
  },
  computer: {
    eligibility: [
      "Grade 8 pass or above",
      "Age 14+",
      "No prior computer knowledge required",
      "Willingness to learn",
    ],
    outcomes: [
      "Operate MS Office suite professionally",
      "Basic web and graphic design skills",
      "Accounting software proficiency",
      "Freelancing and remote work readiness",
    ],
    schedule: "Morning / Afternoon / Evening batches available",
    batchSize: "12–15 students per batch",
    certification: "CTEVT Affiliated Computer Certificate + Center Completion",
  },
  tailoring: {
    eligibility: [
      "Age 16+, male or female",
      "No prior sewing experience required",
      "Creative interest preferred",
      "Basic reading ability",
    ],
    outcomes: [
      "Cut and stitch Nepali & western garments",
      "Operate industrial & household machines",
      "Design and run a boutique business",
      "Take custom orders professionally",
    ],
    schedule: "Morning (7 AM – 10 AM) / Afternoon (12 PM – 3 PM)",
    batchSize: "10–15 students per batch",
    certification: "CTEVT Tailoring Certificate + Skill Completion Certificate",
  },
  cook: {
    eligibility: [
      "Minimum SEE pass preferred",
      "Age 18+",
      "Interest in culinary arts",
      "Basic kitchen hygiene awareness",
    ],
    outcomes: [
      "Cook multi-cuisine menus professionally",
      "Manage commercial kitchen operations",
      "Meet hotel/restaurant employment standards",
      "Demonstrate plating and presentation skills",
    ],
    schedule: "Morning intensive session (7 AM – 12 PM)",
    batchSize: "10–12 students per batch",
    certification:
      "CTEVT National Cook Certificate + International Readiness Letter",
  },
  wiring: {
    eligibility: [
      "SEE pass with science background preferred",
      "Age 18+",
      "No prior electrical background needed",
      "Physical fitness for site work",
    ],
    outcomes: [
      "Wire single-phase and three-phase systems",
      "Install and maintain control panels",
      "Read and draw electrical circuit diagrams",
      "Work safely in industrial environments",
    ],
    schedule: "Morning (6 AM – 10 AM) / Evening (4 PM – 8 PM)",
    batchSize: "10–15 students per batch",
    certification: "CTEVT Electrical Certificate + Safety Compliance Card",
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CoursePage({ params }: PageProps) {
  const { id } = use(params);
  const { language, setSelectedCourseId } = useApp();
  const t = translations[language];

  const course = t.courses.find((c) => c.id === id);
  if (!course) notFound();

  const theme = courseThemes[id] || courseThemes["computer"];
  const extra = courseExtraDetails[id];
  const icon = courseIcons[id];

  // Other courses for sidebar
  const otherCourses = t.courses.filter((c) => c.id !== id);

  const handleEnroll = () => {
    setSelectedCourseId(id);
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      {/* Hero Banner */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradient} overflow-hidden`}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white/40" />
          <div className="absolute -bottom-20 -left-10 w-96 h-96 rounded-full border-2 border-white/20" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/10" />
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
            <Link
              href="/#programs"
              className="hover:text-white transition-colors"
            >
              Programs
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">{course.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Course Info */}
            <div className="flex-1">
              {/* Icon + Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-5 mb-6"
              >
                <div
                  className={`p-4 rounded-2xl ${theme.iconBg} ${theme.iconText} shrink-0`}
                >
                  {icon}
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">
                      <Award className="h-3 w-3" />
                      CTEVT Certified
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full">
                      <Star className="h-3 w-3 fill-emerald-300" />
                      High Demand Course
                    </span>
                  </div>
                  <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    {course.title}
                  </h1>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-8"
              >
                {course.description}
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {[
                  {
                    icon: <Clock className="h-4 w-4" />,
                    label: "Duration",
                    value: course.duration,
                  },
                  {
                    icon: <Coins className="h-4 w-4" />,
                    label: "Course Fee",
                    value: course.price,
                  },
                  {
                    icon: <Users className="h-4 w-4" />,
                    label: "Batch Size",
                    value: extra?.batchSize || "15–20 students",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center gap-1.5 text-white/60 text-xs mb-1">
                      {stat.icon}
                      {stat.label}
                    </div>
                    <p className="text-white font-bold text-sm leading-snug">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Enroll Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full lg:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden shrink-0"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Enroll in This Course
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CalendarCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>New batch starting soon</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Award className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>
                      {extra?.certification || "CTEVT Certificate provided"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <MapPin className="h-4 w-4 text-red-400 shrink-0" />
                    <span>Itahari-06, Pragati Chowk, Sunsari</span>
                  </div>
                </div>

                <button
                  id={`enroll-cta-${id}`}
                  onClick={handleEnroll}
                  className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors duration-200 mb-3"
                >
                  Book Your Seat Now
                </button>

                <a
                  href="tel:+977"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm rounded-xl transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  Call for Free Counseling
                </a>
              </div>

              {/* Schedule pill */}
              {extra?.schedule && (
                <div className="px-6 pb-5">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      Class Schedule:{" "}
                    </span>
                    {extra.schedule}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What You'll Learn */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-blue-600 rounded-full inline-block" />
                Course Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Learning Outcomes */}
            {extra?.outcomes && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-emerald-500 rounded-full inline-block" />
                  After Completing This Course, You Can...
                </h2>
                <ul className="space-y-3">
                  {extra.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Eligibility */}
            {extra?.eligibility && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-amber-400 rounded-full inline-block" />
                  Who Can Apply?
                </h2>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-6">
                  <ul className="space-y-2">
                    {extra.eligibility.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )}

            {/* Career Target */}
            {course.target && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-indigo-500 rounded-full inline-block" />
                  Career & Employment Scope
                </h2>
                <div className="flex items-start gap-4 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6">
                  <Briefcase className="h-6 w-6 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {course.target}
                  </p>
                </div>
              </motion.section>
            )}

            {/* Certification */}
            {extra?.certification && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-sky-500 rounded-full inline-block" />
                  Certification & Recognition
                </h2>
                <div className="flex items-start gap-4 bg-sky-50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/30 rounded-2xl p-6">
                  <Award className="h-6 w-6 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white mb-1">
                      {extra.certification}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Recognized by Government of Nepal – Ministry of Education,
                      Science and Technology
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar: Other Courses */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Explore Other Courses
                  </h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {otherCourses.map((other) => (
                    <Link
                      key={other.id}
                      href={`/courses/${other.id}`}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                        {courseIcons[other.id]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
                          {other.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {other.duration}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-900 dark:bg-blue-950 rounded-2xl p-6 text-center">
                <GraduationCap className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-bold text-white text-sm mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-xs text-blue-200 mb-4 leading-relaxed">
                  Our counselors will guide you to the best course for your
                  goals and budget.
                </p>
                <a
                  href="/#contact"
                  className="block py-2.5 px-4 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs rounded-xl transition-colors"
                >
                  Free Career Counseling
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
