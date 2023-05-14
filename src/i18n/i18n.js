import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import rosEN from '../locales/rosLocales/en.json'
import rosRU from '../locales/rosLocales/ru.json'
import portalEN from '../locales/portalLocales/en.json'
import portalRU from '../locales/portalLocales/ru.json'

const rosTranslation = {
  en: {
    translation: rosEN,
  },
  ru: {
    translation: rosRU,
  },
}

const portalTranslation = {
  en: {
    translation: portalEN,
  },
  ru: {
    translation: portalRU,
  },
}

export const initRosTranslator = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'ru',
      key: 'rosTranslation',
      interpolation: {
        escapeValue: false,
      },
      resources: rosTranslation,
      saveMissing: true,
      saveMissingTo: 'localStorage',
    })
}

export const initPortalTranslator = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'ru',
      key: 'portalTranslation',
      interpolation: {
        escapeValue: false,
      },
      resources: portalTranslation,
      saveMissing: true,
      saveMissingTo: 'localStorage',
    })
}
