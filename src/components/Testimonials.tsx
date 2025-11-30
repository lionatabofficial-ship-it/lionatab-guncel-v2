'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-2xl mb-6">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              {t('testimonial1_text')}
            </p>
            <div className="mt-auto">
              <h4 className="font-bold text-gray-900">Selin C.</h4>
              <p className="text-gray-500 text-sm">{t('testimonial1_role')}</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-2xl mb-6">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              {t('testimonial2_text')}
            </p>
            <div className="mt-auto">
              <h4 className="font-bold text-gray-900">Anastasia K.</h4>
              <p className="text-gray-500 text-sm">{t('testimonial2_role')}</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-2xl mb-6">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              {t('testimonial3_text')}
            </p>
            <div className="mt-auto">
              <h4 className="font-bold text-gray-900">Min-seo K.</h4>
              <p className="text-gray-500 text-sm">{t('testimonial3_role')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
