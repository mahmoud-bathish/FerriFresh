import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation resources
import enCommon from '../locales/en/common.json';
import arCommon from '../locales/ar/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  ar: {
    common: arCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Namespace options
    defaultNS: 'common',
    ns: ['common'],
    
    // Supported languages
    supportedLngs: ['en', 'ar'],
    
    // React options
    react: {
      useSuspense: false,
    },
  });

export default i18n; 