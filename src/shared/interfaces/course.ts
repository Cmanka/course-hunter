import { Difficult } from '../constants/difficult';
import { Category } from './category';
import { Rate } from './rate';

export interface Course {
  id: number;
  title: string;
  description: string;
  preview: string;
  difficult: Difficult;
  rating: string;
  rated: Rate;
  video: string;
  tools: string[];
  publisher__username: string;
  study_hours: string;
  category: Category;
  count_lessons: number;
  language: string;
  created_at: string;
}
