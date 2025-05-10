import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en-US/translations.json';
import translationKo from './locales/ko-KR/translations.json';

const resources = {
  en: { translation: translationEn },
  ko: { translation: translationKo },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: getLocales()[0].languageCode || 'ko',
    fallbackLng: {
      'en-*': ['en'],
      'ko-*': ['ko'],
      default: ['en'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
};

initI18n();

export default i18n;
