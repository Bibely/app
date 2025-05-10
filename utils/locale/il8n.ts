import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locale_resources } from '@/utils/locale/index';

i18n.use(initReactI18next).init({
  resources: locale_resources,
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
