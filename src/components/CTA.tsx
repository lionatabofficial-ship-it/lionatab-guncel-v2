'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          {t('cta_title')}
        </h2>
        <p className="text-xl text-pink-100 mb-12">
          {t('cta_subtitle')}
        </p>
        <button className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-4 rounded-lg text-xl font-bold transition transform hover:scale-105 shadow-xl">
          {t('cta_button')}
        </button>
      </div>
    </section>
  );
}
