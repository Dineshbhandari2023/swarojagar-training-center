'use client';

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { motion } from 'motion/react';
import { BookOpen, ThumbsUp, Hotel, Users } from 'lucide-react';

export default function Facilities() {
  const { language } = useApp();
  const t = translations[language];

  const cards = [
    {
      id: 'hostel',
      icon: <Hotel className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: t.facilities.hostelTitle,
      description: t.facilities.hostelDesc,
      bg: 'bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30',
    },
    {
      id: 'skill',
      icon: <ThumbsUp className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: t.facilities.skillTitle,
      description: t.facilities.skillDesc,
      bg: 'bg-green-50 dark:bg-green-950/20 border-green-100 dark:border-green-900/30',
    },
    {
      id: 'ctevt',
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: t.facilities.ctevtTitle,
      description: t.facilities.ctevtDesc,
      bg: 'bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30',
    },
    {
      id: 'trainer',
      icon: <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: t.facilities.trainerTitle,
      description: t.facilities.trainerDesc,
      bg: 'bg-amber-50 dark:bg-amber-950/15 border-amber-100 dark:border-amber-905/20',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="facilities-heading" className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.facilities.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded mb-5" />
          <p id="facilities-lead" className="text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed">
            {t.facilities.subtitle}
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              id={`facility-card-${card.id}`}
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${card.bg} flex flex-col md:flex-row gap-6 items-start hover:shadow-lg shadow-sm transition-all duration-300`}
            >
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm shrink-0">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner Card */}
        <motion.div
          id="facilities-support-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-950 dark:from-blue-950 dark:to-indigo-950 p-8 sm:p-12 rounded-3xl text-center text-white relative overflow-hidden shadow-xl"
        >
          {/* Subtle Graphic Glow inside banner */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-snug">
              {language === 'en'
                ? 'Ready to embark on practical skill training?'
                : 'के तपाईं व्यावहारिक सीप सिकेर आफैं रोजगार बन्न तयार हुनुहुन्छ?'}
            </h3>
            <p className="text-sm sm:text-base text-blue-50 dark:text-slate-300 leading-relaxed font-semibold">
              {language === 'en'
                ? 'Fill the seat inquiry form below, dial our direct lines, or visit Pragati Chowk Campus for a live workshop tour!'
                : 'तलको फारम भर्नुहोस्, सिधै हाम्रो फोन नम्बरहरूमा सम्पर्क गर्नुहोस् वा इटहरी प्रगति चोकमा रहेको कक्षा भ्रमण गरी बुझ्नुहोस्!'}
            </p>
            <div className="pt-2">
              <a
                id="banner-cta-contact"
                href="#contact"
                className="inline-block bg-white hover:bg-slate-50 text-blue-700 font-sans font-extrabold px-8 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
