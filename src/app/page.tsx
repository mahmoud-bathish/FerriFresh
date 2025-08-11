'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isRTL = i18n.language === 'ar';

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex flex-col pt-32">
        <div className={`px-6 py-16 text-center transition-all duration-1000 ease-out flex-1 flex items-center justify-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  {t('home.brand')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                {t('home.tagline')}
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
              {i18n.language === 'en' ? (
                // English version with colored "Quality"
                <>
                  Discover Nature's Finest{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Quality
                  </span>
                </>
              ) : (
                // Arabic version with colored "جودة"
                <>
                  اكتشف أفضل{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    جودة
                  </span>{' '}
                  طبيعيّة
                </>
              )}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              {t('home.description')}
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link 
                href="/meat"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-2 border-amber-500 hover:border-amber-400 min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('home.meatButton')}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link 
                href="/eggs"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-2 border-yellow-500 hover:border-yellow-400 min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('home.eggsButton')}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-medium">{t('home.trustIndicators.natural')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span className="font-medium">{t('home.trustIndicators.hormoneFree')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="font-medium">{t('home.trustIndicators.qualityGuaranteed')}</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
