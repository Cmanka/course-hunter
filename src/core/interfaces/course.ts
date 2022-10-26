import { Difficult } from '../constants/difficult';

export interface Course {
  id: number;
  title: string;
  difficult: Difficult;
  rating: string;
  video: string;
  tools: string[];
}
