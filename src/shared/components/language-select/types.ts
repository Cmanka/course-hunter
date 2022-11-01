import { Language } from '@/shared/constants/language';

export interface Option {
  option: {
    label: keyof typeof Language;
    value: Language;
  };
}
