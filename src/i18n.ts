import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import ru from './translations/ru.json';

const resources = {
  en,
  ru,
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'ru',
});
