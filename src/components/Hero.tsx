'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="gradient-bg pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight hero-title"
            dangerouslySetInnerHTML={{ __html: t('hero_title') }}
          />
          <p className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto hero-subtitle">
            {t('hero_subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-xl">
            {t('hero_cta')}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-pink-600 transition">
            {t('hero_demo')}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-pink-100 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl">✓</span>
            <span>{t('hero_check2')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
