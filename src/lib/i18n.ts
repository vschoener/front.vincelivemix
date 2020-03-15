import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import getConfig from 'next/config';

import enTranslate from "../../public/locales/en/common.json";
import frTranslate from "../../public/locales/fr/common.json";

const { publicRuntimeConfig } = getConfig();

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: publicRuntimeConfig.translate.debug,
    fallbackLng: 'en',
    preload: ['en', 'fr'],
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common',
    resources: {
      en:{
        common: enTranslate,
      },
      fr: {
        common: frTranslate
      },
    },
  });

export { i18next }
