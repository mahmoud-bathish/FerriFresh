'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: "📞",
      title: t('contact.contactInfo.0.title'),
      value: t('contact.contactInfo.0.value'),
      description: t('contact.contactInfo.0.description'),
      action: "tel:+96170176113",
      buttonText: t('contact.contactInfo.0.buttonText'),
      isPhone: true
    },
    {
      icon: "🟢",
      title: t('contact.contactInfo.1.title'),
      value: t('contact.contactInfo.1.value'),
      description: t('contact.contactInfo.1.description'),
      action: "https://wa.me/96170176113",
      buttonText: t('contact.contactInfo.1.buttonText'),
      isPhone: true,
      customIcon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      icon: "🕒",
      title: t('contact.contactInfo.2.title'),
      value: t('contact.contactInfo.2.value'),
      description: t('contact.contactInfo.2.description'),
      action: "#",
      buttonText: "",
      isPhone: false
    }
  ];

  const isRTL = i18n.language === 'ar';

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex flex-col pt-32">
        {/* Hero Section */}
        <section className={`px-6 py-16 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {i18n.language === 'en' ? (
                // English version
                <>
                  Get in{' '}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </>
              ) : (
                // Arabic version
                <>
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    تواصل
                  </span>{' '}
                  معنا
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="px-6 py-16 bg-white/80 backdrop-blur-sm flex-1">
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 hover:border-amber-200 transition-all duration-700 delay-${index * 100} ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl mb-4">
                    {info.customIcon ? (
                      <div className="text-green-500">
                        {info.customIcon}
                      </div>
                    ) : (
                      info.icon
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  <p 
                    className={`text-2xl font-semibold text-amber-600 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    dir={info.isPhone ? "ltr" : undefined}
                  >
                    {info.value}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {info.description}
                  </p>
                  {info.action !== "#" && (
                    <a
                      href={info.action}
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                    >
                      {info.buttonText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`px-6 py-20 bg-gradient-to-r from-gray-900 via-amber-900 to-orange-900 text-center transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('contact.cta.title')}
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              {t('contact.cta.subtitle')}
            </p>
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 break-words">
                {t('contact.cta.mainText').split(':').map((part, index) => (
                  <span key={index}>
                    {index === 0 ? part + ':' : <span dir="ltr">{part}</span>}
                  </span>
                ))}
              </p>
              <p className="text-amber-100 text-base md:text-lg">
                {t('contact.cta.description')}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
} 