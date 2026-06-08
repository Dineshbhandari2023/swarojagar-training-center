'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Facilities from '@/components/Facilities';
import LocationAndContact from '@/components/LocationAndContact';
import Footer from '@/components/Footer';
import { useApp } from '@/lib/context';
import { Phone, ArrowUpCircle } from 'lucide-react';

export default function Home() {
  const { language } = useApp();

  // Smooth scroll helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-blue-600/30">
      
      {/* Header & Navigation */}
      <Navbar />

      {/* Hero Welcome Unit */}
      <Hero />

      {/* Featured CTEVT Programs */}
      <Programs />

      {/* Hostels & Key Facilities */}
      <Facilities />

      {/* Contact Form & Geographical Coordinates */}
      <LocationAndContact />

      {/* Professional Footer block */}
      <Footer />

      {/* Quick Dial Floating Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Scroll back to top */}
        <button
          id="scroll-to-top-fab"
          onClick={scrollToTop}
          className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-md focus:outline-none"
          title="Scroll to Top"
        >
          <ArrowUpCircle className="h-5 w-5" />
        </button>

        {/* Dynamic call trigger */}
        <a
          id="quick-call-fab"
          href="tel:+9779862035584"
          className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-500/20 flex items-center justify-center"
          title={language === 'en' ? 'Call Admissions Counselor' : 'काउन्सिलरलाई सिधै कल गर्नुहोस्'}
        >
          <Phone className="h-5 w-5 fill-current animate-pulse" />
        </a>
      </div>

    </main>
  );
}
