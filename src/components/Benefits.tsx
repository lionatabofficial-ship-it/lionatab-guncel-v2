'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-4">
              <span className="text-4xl">📈</span>
            </div>
            <div className="text-4xl font-black text-pink-600 mb-2">40%</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('benefit1_title')}</h3>
            <p className="text-gray-600 text-sm">{t('benefit1_desc')}</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-4">
              <span className="text-4xl">⏱️</span>
            </div>
            <div className="text-4xl font-black text-pink-600 mb-2">
              5<span className="text-2xl">{t('benefit2_unit')}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('benefit2_title')}</h3>
            <p className="text-gray-600 text-sm">{t('benefit2_desc')}</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-4">
              <span className="text-4xl">💰</span>
            </div>
            <div className="text-4xl font-black text-pink-600 mb-2">35%</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t('benefit3_title')}</h3>
            <p className="text-gray-600 text-sm">{t('benefit3_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
