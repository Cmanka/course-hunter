import { Language } from '@/shared/constants/app/language';

export interface Option {
  option: {
    label: keyof typeof Language;
    value: Language;
  };
}
