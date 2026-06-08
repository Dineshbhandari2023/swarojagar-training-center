'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { Sun, Moon, Menu, X, GraduationCap, Award } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, language, setLanguage } = useApp();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.programs, href: '#programs' },
    { label: t.nav.facilities, href: '#facilities' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Title */}
          <a id="nav-logo" href="#home" className="flex items-center gap-3 group">
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

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                id={`nav-link-${item.href.replace('#', '')}`}
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-semibold text-slate-600 hover:text-blue-900 dark:text-slate-350 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: Theme, Language, Affiliation Status */}
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
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                id="lang-toggle-np"
                onClick={() => setLanguage('np')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  language === 'np'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
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
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Language Toggle for mobile (smalls) */}
            <button
              id="lang-mobile-toggle"
              onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
              className="px-2 py-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-205 rounded-md border border-slate-200 dark:border-slate-700"
            >
              {language === 'en' ? 'नेपाली' : 'English'}
            </button>

            {/* Theme Toggle for mobile */}
            <button
              id="theme-mobile-toggle"
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-350"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-450" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Menu Button */}
            <button
              id="mobile-menu-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-350"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 transition-all animate-in fade-in-50 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                id={`mobile-nav-link-${item.href.replace('#', '')}`}
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800"
              >
                {item.label}
              </a>
            ))}
            
            {/* CTEVT Affiliation text in Mobile */}
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
