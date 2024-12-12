import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en.json';
import ta from './locals/ta.json';
import hi from './locals/hi.json';

// Define resources for i18n
const resources = {
  en: { translation: en },
  ta: { translation: ta },
  hi: { translation: hi },
};

// Initialize i18n
i18n
  .use(initReactI18next) // Integrates i18n with React
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
