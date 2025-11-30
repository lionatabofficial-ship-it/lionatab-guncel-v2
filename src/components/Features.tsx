'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

export default function Features() {
  const { t } = useLanguage();

  const features: Array<{ icon: string; title: TranslationKey; desc: TranslationKey; badge?: boolean }> = [
    { icon: '📅', title: 'feature1_title', desc: 'feature1_desc' },
    { icon: '🌐', title: 'feature2_title', desc: 'feature2_desc', badge: true },
    { icon: '👥', title: 'feature3_title', desc: 'feature3_desc' },
    { icon: '📱', title: 'feature4_title', desc: 'feature4_desc' },
    { icon: '🤖', title: 'feature5_title', desc: 'feature5_desc', badge: true },
    { icon: '🛍️', title: 'feature6_title', desc: 'feature6_desc', badge: true },
    { icon: '📊', title: 'feature7_title', desc: 'feature7_desc' },
    { icon: '💰', title: 'feature8_title', desc: 'feature8_desc', badge: true },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {t('features_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <article key={idx} className="feature-card bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t(feature.title)}
                {feature.badge && (
                  <span className="text-sm text-pink-600 ml-2">{t('coming_soon')}</span>
                )}
              </h3>
              <p className="text-gray-600">{t(feature.desc)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
