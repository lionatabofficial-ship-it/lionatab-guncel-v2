'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TrustStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-pink-600">50K+</div>
            <p className="text-gray-600 mt-2">{t('stat2')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600">4.8★</div>
            <p className="text-gray-600 mt-2">{t('stat3')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600">24/7</div>
            <p className="text-gray-600 mt-2">{t('stat4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
