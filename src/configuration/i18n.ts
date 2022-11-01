import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Language } from '@/shared/constants/language';

import en from '../translations/en.json';
import ru from '../translations/en.json';

const resources = {
  en,
  ru,
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  fallbackLng: Language.English,
});
