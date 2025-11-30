'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { languages } from '@/lib/translations';
import type { Language } from '@/lib/translations';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMobileMenu(false);
    }
  };

  const changeLang = (lang: Language) => {
    setLanguage(lang);
    setShowLangMenu(false);
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold gradient-text cursor-pointer">
              LionaTab
            </h1>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-700 hover:text-pink-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                {t('nav_features')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                {t('nav_pricing')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                {t('nav_faq')}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium"
                >
                  <span>{languages[language].flag}</span>
                  <span>{languages[language].code}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden max-h-96 overflow-y-auto">
                    {Object.entries(languages).map(([lang, info]) => (
                      <button
                        key={lang}
                        onClick={() => changeLang(lang as Language)}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition ${
                          language === lang ? 'bg-pink-100' : ''
                        }`}
                      >
                        <span className="text-xl">{info.flag}</span>
                        <span>{info.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
                {t('nav_login')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileMenu(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold gradient-text">LionaTab</h2>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg font-medium transition"
                >
                  {t('nav_features')}
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg font-medium transition"
                >
                  {t('nav_pricing')}
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg font-medium transition"
                >
                  {t('nav_faq')}
                </button>

                <hr className="my-4" />

                <div className="py-2">
                  <p className="text-sm text-gray-500 font-medium mb-3 px-4">{t('select_language')}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(languages).map(([lang, info]) => (
                      <button
                        key={lang}
                        onClick={() => changeLang(lang as Language)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-pink-50 transition text-left ${
                          language === lang ? 'bg-pink-100 border-2 border-pink-500' : ''
                        }`}
                      >
                        <span className="text-xl">{info.flag}</span>
                        <span className="text-gray-700 text-sm font-medium">{info.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="my-4" />

                <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                  {t('nav_login')}
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
