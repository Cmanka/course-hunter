import { Language } from 'core/constants/language';

export interface Option {
  option: {
    label: keyof typeof Language;
    value: Language;
  };
}
