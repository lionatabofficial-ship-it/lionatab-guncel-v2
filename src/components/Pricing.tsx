'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {t('pricing_title')}
          </h2>
          <p className="text-xl text-gray-600">{t('pricing_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Starter Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">{t('plan1_name')}</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-pink-600">{t('plan1_price')}</span>
              <span className="text-gray-600">{t('price_month')}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">{t('plan1_desc')}</p>
            <ul className="space-y-2.5 mb-6 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{t('plan1_feat1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{t('plan1_feat2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{t('plan1_feat3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{t('plan1_feat4')}</span>
              </li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-green-700 font-semibold flex items-start">
                <span className="mr-1">✔</span>
                <span>{t('plan1_benefit')}</span>
              </p>
            </div>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-bold transition">
              {t('btn_start')}
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">{t('plan2_name')}</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-pink-600">{t('plan2_price')}</span>
              <span className="text-gray-600">{t('price_month')}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">{t('plan2_desc')}</p>
            <ul className="space-y-2.5 mb-6 text-sm">
              {['plan2_feat1', 'plan2_feat2', 'plan2_feat3', 'plan2_feat4', 'plan2_feat5'].map((feat, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span>{t(feat as TranslationKey)}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-green-700 font-semibold flex items-start">
                <span className="mr-1">✔</span>
                <span>{t('plan2_benefit')}</span>
              </p>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-bold transition">
              {t('btn_start')}
            </button>
          </div>

          {/* Business Plan (Popular) */}
          <div className="bg-pink-600 text-white rounded-xl p-6 transform scale-105 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-pink-900 px-4 py-1 rounded-full text-xs font-black">
                🏆 {t('popular')}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 mt-2">{t('plan3_name')}</h3>
            <div className="mb-4">
              <span className="text-4xl font-black">{t('plan3_price')}</span>
              <span className="opacity-90">{t('price_month')}</span>
            </div>
            <p className="text-sm text-pink-50 mb-6">{t('plan3_desc')}</p>
            <ul className="space-y-2.5 mb-6 text-sm">
              {['plan3_feat1', 'plan3_feat2', 'plan3_feat3', 'plan3_feat4', 'plan3_feat5'].map((feat, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-300 mr-2 mt-0.5">✓</span>
                  <span>{t(feat as TranslationKey)}</span>
                </li>
              ))}
              {['plan3_feat5a', 'plan3_feat5b', 'plan3_feat5c', 'plan3_feat5d'].map((feat, idx) => (
                <li key={idx} className="flex items-start ml-4">
                  <span className="text-pink-200 mr-2 mt-0.5">•</span>
                  <span>{t(feat as TranslationKey)}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="text-green-300 mr-2 mt-0.5">✓</span>
                <span>{t('plan3_feat6')}</span>
              </li>
            </ul>
            <div className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg p-3 mb-4">
              <p className="text-xs text-white font-semibold flex items-start">
                <span className="mr-1">✔</span>
                <span>{t('plan3_benefit')}</span>
              </p>
            </div>
            <button className="w-full bg-white text-pink-600 hover:bg-gray-100 py-3 rounded-lg font-bold transition">
              {t('btn_start')}
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">{t('plan4_name')}</h3>
            <div className="mb-4">
              <span className="text-3xl font-black">{t('custom_price')}</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">{t('plan4_desc')}</p>
            <ul className="space-y-2.5 mb-6 text-sm">
              {['plan4_feat1', 'plan4_feat2', 'plan4_feat3', 'plan4_feat4', 'plan4_feat5'].map((feat, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={idx === 4 ? "text-yellow-400 mr-2 mt-0.5" : "text-green-400 mr-2 mt-0.5"}>
                    {idx === 4 ? '⭐' : '✓'}
                  </span>
                  <span>{t(feat as TranslationKey)}</span>
                </li>
              ))}
              {['plan4_feat5a', 'plan4_feat5b', 'plan4_feat5c'].map((feat, idx) => (
                <li key={idx} className="flex items-start ml-4">
                  <span className="text-gray-400 mr-2 mt-0.5">•</span>
                  <span>{t(feat as TranslationKey)}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-0.5">✓</span>
                <span>{t('plan4_feat6')}</span>
              </li>
            </ul>
            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-200 font-semibold flex items-start">
                <span className="mr-1">✔</span>
                <span>{t('plan4_benefit')}</span>
              </p>
            </div>
            <button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg font-bold transition">
              {t('btn_contact')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
