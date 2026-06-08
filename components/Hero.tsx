'use client';

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, UserCheck, Star, Award } from 'lucide-react';

export default function Hero() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <section id="home" className="relative overflow-hidden py-16 lg:py-24 bg-blue-900 dark:bg-slate-900 text-white">
      {/* Decorative Diagonal Background Wave */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
          <path d="M0 0 L100 0 L100 100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Badges Segment */}
          <motion.div
            id="hero-badge-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
          >
            <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-3 py-1 rounded tracking-wider uppercase shadow-sm">
              CTEVT AFFILIATED
            </span>
            <span className="bg-blue-700 text-white text-[10px] font-extrabold px-3 py-1 rounded tracking-wider uppercase shadow-sm border border-blue-600/30">
              NEPAL GOVT. RECOGNIZED
            </span>
            <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-3 py-1 rounded tracking-wider uppercase shadow-sm">
              {language === 'en' ? 'SKILL DEVELOPMENT' : 'सीप विकास केन्द्र'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-blue-100/90 dark:text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            id="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              id="hero-btn-primary"
              href="#programs"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              id="hero-btn-secondary"
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-sans font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Trust Highlights Bento row */}
          <motion.div
            id="hero-highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-white/15 pt-10"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg text-emerald-400">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="font-extrabold font-sans text-xl text-white">100%</span>
              </div>
              <p className="text-[11px] font-bold text-blue-200/80 uppercase tracking-widest leading-none">
                {t.hero.experienceBadge}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg text-blue-300">
                  <Award className="h-5 w-5" />
                </div>
                <span className="font-extrabold font-sans text-xl text-white">CTEVT</span>
              </div>
              <p className="text-[11px] font-bold text-blue-200/80 uppercase tracking-widest leading-none">
                Affiliation guidelines
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg text-emerald-400">
                  <UserCheck className="h-5 w-5" />
                </div>
                <span className="font-extrabold font-sans text-xl text-white">Guaranteed</span>
              </div>
              <p className="text-[11px] font-bold text-blue-200/80 uppercase tracking-widest leading-none">
                Skill Learning
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg text-indigo-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-extrabold font-sans text-xl text-white">Hostels</span>
              </div>
              <p className="text-[11px] font-bold text-blue-200/80 uppercase tracking-widest leading-none">
                Full accommodations
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
