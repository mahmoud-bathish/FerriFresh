'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect } from 'react';
import LanguagePopup from './LanguagePopup';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    const updateHtmlAttributes = () => {
      const currentLang = i18n.language;
      const isRTL = currentLang === 'ar';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    };

    updateHtmlAttributes();
    
    const handleLanguageChanged = () => {
      updateHtmlAttributes();
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
      <LanguagePopup />
    </I18nextProvider>
  );
} 