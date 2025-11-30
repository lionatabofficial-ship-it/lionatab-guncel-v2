'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function RegisterPage() {
  const { t, language } = useLanguage();
  const [businessName, setBusinessName] = useState('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');

    alert(
      'Kayıt işlemi başarılı! Hoş geldiniz ' +
        name +
        '!\n\nE-posta: ' +
        email +
        '\n\nNot: Bu bir demo sayfasıdır.'
    );
  };

  const copyUrl = () => {
    const url = 'https://' + (businessName || '') + '.lionatab.com';
    navigator.clipboard.writeText(url).then(() => {
      alert('URL kopyalandı!');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 pt-24">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <Link href={'/' + language}>
              <h1 className="text-3xl font-black gradient-text mb-2 cursor-pointer">LionaTab</h1>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">{t('register_subtitle')}</p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {t('register_name')}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                placeholder="Ahmet Yılmaz"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {t('register_business_url')}
              </label>
              <div className="flex items-center gap-2 border-2 border-pink-300 dark:border-pink-600 rounded-lg px-4 py-3">
                <span className="text-gray-400 dark:text-gray-500 text-sm">https://</span>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="flex-1 border-none outline-none bg-transparent dark:text-white"
                  placeholder="işletmeadı"
                  required
                />
                <span className="text-gray-400 dark:text-gray-500 text-sm">.lionatab.com</span>
              </div>
              <div className="mt-3 p-3 bg-pink-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                <span className="text-sm text-pink-900 dark:text-pink-200 font-mono">
                  https://{businessName || ''}.lionatab.com
                </span>
                <button type="button" onClick={copyUrl} className="text-xs text-pink-600 font-bold">
                  {t('register_copy')}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {t('register_email')}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
                {t('register_password')}
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 rounded-lg text-lg font-bold hover:from-pink-700 hover:to-rose-700 transition shadow-lg"
            >
              {t('register_button')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              {t('register_have_account')}{' '}
              <Link href={'/' + language + '/login'} className="text-pink-600 font-bold">
                {t('register_login_link')}
              </Link>
            </p>
            <Link href={'/' + language} className="block mt-4 text-gray-600 dark:text-gray-400">
              ← {t('back_to_home')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
