'use client';

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { GraduationCap, Award, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: About (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 text-white p-2.5 rounded-lg shadow-sm">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-sans font-bold text-xl text-white tracking-tight">
                Swarojagar <span className="text-emerald-400">TC</span>
              </span>
            </div>
            <p className="text-sm text-slate-350 leading-relaxed font-medium">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-slate-400 bg-slate-850/60 p-3 rounded-lg border border-slate-800/80 max-w-sm">
              <Award className="h-5 w-5 text-green-500 shrink-0" />
              <span>{t.footer.affiliation}: Registered & Registered under Government of Nepal and CTEVT rules.</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-blue-400 transition-colors">
                  {t.nav.programs}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-blue-400 transition-colors">
                  {t.nav.facilities}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              {language === 'en' ? 'Get in Touch' : 'सम्पर्क ठेगाना'}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-405 mt-0.5 shrink-0" />
                <span>
                  Itahari-06, Pragati Chowk, Sunsari,<br />Koshi Province, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-green-405 shrink-0" />
                <span className="font-semibold block text-slate-300">025-583511 / 986-2035584</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <span className="block text-slate-300 truncate">swarojagartrainingcenter@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider / Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-semibold text-center sm:text-left">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Made for Koshi Province & Nepal Skill Growth</span>
            <span className="text-lg">🇳🇵</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
