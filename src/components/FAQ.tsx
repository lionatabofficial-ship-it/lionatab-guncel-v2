'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{t('faq_title')}</h2>
        </div>

        <div className="space-y-4">
          <details className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <summary className="font-bold text-gray-900 cursor-pointer">
              {t('faq1_q')}
            </summary>
            <p className="text-gray-600 mt-4">{t('faq1_a')}</p>
          </details>

          <details className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <summary className="font-bold text-gray-900 cursor-pointer">
              {t('faq2_q')}
            </summary>
            <p className="text-gray-600 mt-4">{t('faq2_a')}</p>
          </details>

          <details className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <summary className="font-bold text-gray-900 cursor-pointer">
              {t('faq3_q')}
            </summary>
            <p className="text-gray-600 mt-4">{t('faq3_a')}</p>
          </details>
        </div>
      </div>
    </section>
  );
}
