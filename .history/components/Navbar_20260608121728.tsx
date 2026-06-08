"use client";

import React, { useState, useRef, useEffect } from "react";
import { useApp } from "@/lib/context";
import { translations } from "@/lib/translations";
import {
  Sun,
  Moon,
  Menu,
  X,
  GraduationCap,
  Award,
  ChevronDown,
  Wrench,
  Laptop,
  Scissors,
  Utensils,
  Zap,
} from "lucide-react";
import Link from "next/link";

const courseIcons: Record<string, React.ReactNode> = {
  "ac-repair": <Wrench className="h-4 w-4 text-sky-500" />,
  computer: <Laptop className="h-4 w-4 text-indigo-500" />,
  tailoring: <Scissors className="h-4 w-4 text-pink-500" />,
  cook: <Utensils className="h-4 w-4 text-amber-500" />,
  wiring: <Zap className="h-4 w-4 text-yellow-500" />,
};

export default function Navbar() {
  const { theme, toggleTheme, language, setLanguage } = useApp();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#home", hasDropdown: false },
    { label: t.nav.facilities, href: "#facilities", hasDropdown: false },
    { label: t.nav.contact, href: "#contact", hasDropdown: false },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="bg-blue-900 dark:bg-blue-850 text-white p-2.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-350">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-none uppercase tracking-tight text-blue-900 dark:text-white">
                Swarojagar
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mt-0.5 block">
                Training Center IT & Vocational
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home */}
            <a
              id="nav-link-home"
              href="#home"
              className="font-sans text-sm font-semibold text-slate-600 hover:text-blue-900 dark:text-slate-350 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t.nav.home}
            </a>

            {/* Programs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="nav-programs-dropdown-trigger"
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                className="flex items-center gap-1 font-sans text-sm font-semibold text-slate-600 hover:text-blue-900 dark:text-slate-350 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {t.nav.programs}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${programsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              {programsDropdownOpen && (
                <div
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden z-50"
                >
                  {/* Dropdown Header */}
                  <div className="px-4 py-3 bg-blue-900 dark:bg-blue-950">
                    <p className="text-[10px] font-bold text-blue-200 tracking-widest uppercase">
                      {t.nav.programs}
                    </p>
                    <p className="text-xs text-blue-100 mt-0.5">
                      CTEVT Certified Courses
                    </p>
                  </div>

                  {/* Course Links */}
                  <div className="py-2">
                    {t.courses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        id={`dropdown-course-${course.id}`}
                        onClick={() => setProgramsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150 group"
                      >
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 rounded-lg transition-colors shrink-0">
                          {courseIcons[course.id]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight truncate">
                            {course.title}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {course.duration}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* View All */}
                  <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href="#programs"
                      onClick={() => setProgramsDropdownOpen(false)}
                      className="block text-center text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                    >
                      View All Programs →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Facilities */}
            <a
              id="nav-link-facilities"
              href="#facilities"
              className="font-sans text-sm font-semibold text-slate-600 hover:text-blue-900 dark:text-slate-350 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t.nav.facilities}
            </a>

            {/* Contact */}
            <a
              id="nav-link-contact"
              href="#contact"
              className="font-sans text-sm font-semibold text-slate-600 hover:text-blue-900 dark:text-slate-350 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* CTEVT Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500 dark:bg-emerald-900/40 border border-emerald-600 dark:border-emerald-800/50 rounded">
              <Award className="h-3.5 w-3.5 text-white dark:text-emerald-300" />
              <span className="text-[10px] font-bold text-white dark:text-emerald-350 tracking-wider">
                {t.nav.ctevtAffiliated.toUpperCase()}
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                id="lang-toggle-en"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === "en"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                EN
              </button>
              <button
                id="lang-toggle-np"
                onClick={() => setLanguage("np")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === "np"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                NP
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              id="theme-toggler-btn"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="lang-mobile-toggle"
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="px-2 py-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-205 rounded-md border border-slate-200 dark:border-slate-700"
            >
              {language === "en" ? "नेपाली" : "English"}
            </button>
            <button
              id="theme-mobile-toggle"
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-350"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-450" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              id="mobile-menu-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-350"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 transition-all animate-in fade-in-50 duration-200">
          <div className="flex flex-col gap-1">
            <a
              id="mobile-nav-link-home"
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300 py-2.5 border-b border-slate-100 dark:border-slate-800"
            >
              {t.nav.home}
            </a>

            {/* Mobile Programs Accordion */}
            <div className="border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-between font-sans text-base font-semibold text-slate-700 dark:text-slate-300 py-2.5"
              >
                {t.nav.programs}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileProgramsOpen && (
                <div className="pb-3 flex flex-col gap-1 pl-2">
                  {t.courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      {courseIcons[course.id]}
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-tight">
                        {course.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              id="mobile-nav-link-facilities"
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300 py-2.5 border-b border-slate-100 dark:border-slate-800"
            >
              {t.nav.facilities}
            </a>

            <a
              id="mobile-nav-link-contact"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300 py-2.5 border-b border-slate-100 dark:border-slate-800"
            >
              {t.nav.contact}
            </a>

            <div className="flex items-center gap-2 mt-2 px-3 py-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-xs font-semibold text-green-800 dark:text-green-200">
                {t.nav.ctevtAffiliated} - Government Registered
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
