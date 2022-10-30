import { Difficult } from '../constants/difficult';

export interface Course {
  id: number;
  title: string;
  description: string;
  preview: string;
  difficult: Difficult;
  rating: string;
  video: string;
  tools: string[];
}
