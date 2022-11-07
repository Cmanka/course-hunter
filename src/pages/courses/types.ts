import { Language } from '@/shared/constants/language';

export interface CoursesFiltersVariables {
  page?: number;
  title?: string;
  limit?: number;
  category_title?: string;
  language?: Language;
}
