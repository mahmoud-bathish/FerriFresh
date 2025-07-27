'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function LanguagePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    // Check if user has already made a language choice
    const hasChosenLanguage = localStorage.getItem('languageChosen');
    
    if (!hasChosenLanguage) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const selectLanguage = (language: 'en' | 'ar') => {
    i18nInstance.changeLanguage(language);
    localStorage.setItem('languageChosen', 'true');
    localStorage.setItem('i18nextLng', language);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Choose Your Language
          </h2>
          <p className="text-gray-600 mb-8">
            اختر لغتك المفضلة
          </p>

          {/* Language Options */}
          <div className="space-y-4">
            {/* English Option */}
            <button
              onClick={() => selectLanguage('en')}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-6 rounded-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="900" height="600" fill="#B22234"/>
                  <rect width="900" height="46.15" y="0" fill="#fff"/>
                  <rect width="900" height="46.15" y="92.3" fill="#fff"/>
                  <rect width="900" height="46.15" y="184.6" fill="#fff"/>
                  <rect width="900" height="46.15" y="276.9" fill="#fff"/>
                  <rect width="900" height="46.15" y="369.2" fill="#fff"/>
                  <rect width="900" height="46.15" y="461.5" fill="#fff"/>
                  <rect width="900" height="46.15" y="553.8" fill="#fff"/>
                  <rect width="360" height="323.1" fill="#3C3B6E"/>
                  <g fill="#fff">
                    <polygon points="24,0 29.5,8.5 39,8.5 31.5,14 34.5,23.5 24,18 13.5,23.5 16.5,14 9,8.5 18.5,8.5"/>
                  </g>
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">English</div>
                  <div className="text-sm text-gray-500">الإنجليزية</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Arabic Option */}
            <button
              onClick={() => selectLanguage('ar')}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-6 rounded-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="900" height="600" fill="#006C35"/>
                  <text x="450" y="320" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="80" font-weight="bold">لا إله إلا الله محمد رسول الله</text>
                  <path d="M450 200 L500 280 L580 280 L520 340 L540 420 L450 380 L360 420 L380 340 L320 280 L400 280 Z" fill="#fff"/>
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">العربية</div>
                  <div className="text-sm text-gray-500">Arabic</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-6">
            You can change this later in the navigation menu
          </p>
        </div>
      </div>
    </div>
  );
} 