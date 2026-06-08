'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from './translations';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');

  // Load state from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('swarojagar-theme') as 'light' | 'dark';
    const savedLang = localStorage.getItem('swarojagar-lang') as Language;

    setTimeout(() => {
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', prefersDark);
      }

      if (savedLang) {
        setLanguage(savedLang);
      }
    }, 0);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('swarojagar-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('swarojagar-lang', lang);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage: handleSetLanguage,
        selectedCourseId,
        setSelectedCourseId,
      }}
    >
      <div className={theme === 'dark' ? 'dark text-slate-100 bg-slate-950' : 'text-slate-900 bg-white'}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
