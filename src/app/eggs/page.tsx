'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function EggsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = useMemo(() => [
    {
      icon: "🩸",
      title: t('eggs.benefits.0.title'),
      description: t('eggs.benefits.0.description')
    },
    {
      icon: "🦴",
      title: t('eggs.benefits.1.title'),
      description: t('eggs.benefits.1.description')
    },
    {
      icon: "🫀",
      title: t('eggs.benefits.2.title'),
      description: t('eggs.benefits.2.description')
    },
    {
      icon: "🤧",
      title: t('eggs.benefits.3.title'),
      description: t('eggs.benefits.3.description')
    },
    {
      icon: "👁️",
      title: t('eggs.benefits.4.title'),
      description: t('eggs.benefits.4.description')
    },
    {
      icon: "⚖️",
      title: t('eggs.benefits.5.title'),
      description: t('eggs.benefits.5.description')
    },
    {
      icon: "💪",
      title: t('eggs.benefits.6.title'),
      description: t('eggs.benefits.6.description')
    },
    {
      icon: "🧠",
      title: t('eggs.benefits.7.title'),
      description: t('eggs.benefits.7.description')
    },
    {
      icon: "⚡",
      title: t('eggs.benefits.8.title'),
      description: t('eggs.benefits.8.description')
    },
    {
      icon: "👶",
      title: t('eggs.benefits.9.title'),
      description: t('eggs.benefits.9.description')
    }
  ], [t]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex flex-col pt-32">
        {/* Hero Section */}
        <section className={`px-6 py-16 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {i18n.language === 'en' ? (
                // English version
                <>
                  Start your day with the perfect natural{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    protein
                  </span>{' '}
                  from{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    quail eggs
                  </span>
                </>
              ) : (
                // Arabic version
                <>
                  ابدأ يومك مع{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    البروتين الطبيعي المثالي
                  </span>{' '}
                  من{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    بيض الفرّي
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('eggs.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-16 bg-white/80 backdrop-blur-sm flex-1">
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-100/50 hover:border-yellow-200 transition-all duration-700 delay-${index * 100} ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`px-6 py-20 bg-gradient-to-r from-gray-900 via-yellow-900 to-orange-900 text-center transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('eggs.cta.title')}
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              {t('eggs.cta.subtitle')}
            </p>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('eggs.cta.mainText')}
              </p>
              <p className="text-yellow-100 text-lg mb-6">
                {t('eggs.cta.description')}
              </p>
              
              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t('eggs.cta.contactButton')}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <FloatingContactButton />
    </>
  );
} 