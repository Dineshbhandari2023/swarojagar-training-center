"use client";

import React from "react";
import { useApp } from "@/lib/context";
import { translations, Course } from "@/lib/translations";
import { motion } from "motion/react";
import {
  Laptop,
  Scissors,
  Utensils,
  Wrench,
  Zap,
  Clock,
  Coins,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconsMap: Record<string, React.ReactNode> = {
  "ac-repair": <Wrench className="h-6 w-6 text-sky-600 dark:text-sky-450" />,
  computer: <Laptop className="h-6 w-6 text-indigo-600 dark:text-indigo-455" />,
  tailoring: <Scissors className="h-6 w-6 text-pink-600 dark:text-pink-455" />,
  cook: <Utensils className="h-6 w-6 text-amber-650 dark:text-amber-455" />,
  wiring: <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-455" />,
};

const bgColorsMap: Record<string, string> = {
  "ac-repair":
    "bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-900/40",
  computer:
    "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/40",
  tailoring:
    "bg-pink-50 dark:bg-pink-950/30 border-pink-100 dark:border-pink-900/40",
  cook: "bg-amber-50 dark:bg-amber-955/20 border-amber-100 dark:border-amber-900/30",
  wiring:
    "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-101 dark:border-yellow-905/30",
};

export default function Programs() {
  const { language, setSelectedCourseId } = useApp();
  const t = translations[language];

  const handleEnrollClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="programs"
      className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-350"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="programs-heading"
            className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {t.programs.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded mb-5" />
          <p
            id="programs-lead"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed"
          >
            {t.programs.subtitle}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.courses.map((course: Course, index: number) => {
            const iconObj = iconsMap[course.id] || (
              <Wrench className="h-6 w-6" />
            );
            const cardBg =
              bgColorsMap[course.id] || "bg-blue-50 dark:bg-blue-950/30";

            return (
              <motion.div
                id={`course-card-${course.id}`}
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-850 shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
              >
                {/* Course Decorative Header Bar */}
                <div
                  className={`p-6 flex items-center gap-4 border-b ${cardBg}`}
                >
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                    {iconObj}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg leading-tight text-slate-900 dark:text-white">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Basic specs: Duration & Price */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-450">
                        <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                        <span>
                          <strong className="text-slate-700 dark:text-slate-300">
                            {t.programs.durationLabel}:
                          </strong>{" "}
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-450">
                        <Coins className="h-4 w-4 shrink-0 text-slate-400" />
                        <span>
                          <strong className="text-slate-700 dark:text-slate-300">
                            {t.programs.priceLabel}:
                          </strong>{" "}
                          {course.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 mb-6">
                      {course.description}
                    </p>

                    {/* Course Highlights */}
                    <div className="space-y-2 mb-6">
                      {course.highlights.map((highlight, highlightIdx) => (
                        <div
                          key={highlightIdx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Destinations & CTA */}
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-900">
                    {course.target && (
                      <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-100 dark:border-slate-850/50 mb-5">
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                          <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">
                            {course.target}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Two-button row: View Details + Enroll */}
                    <div className="flex gap-2">
                      <Link
                        id={`view-details-btn-${course.id}`}
                        href={`/courses/${course.id}`}
                        className="flex-1 py-2.5 px-3 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-sans font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <button
                        id={`enroll-btn-${course.id}`}
                        onClick={() => handleEnrollClick(course.id)}
                        className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-blue-600 dark:bg-slate-900 dark:hover:bg-blue-600 text-slate-850 dark:text-slate-200 hover:text-white dark:hover:text-white font-sans font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-blue-500/40 border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-600"
                      >
                        {t.programs.enrollBtn}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
