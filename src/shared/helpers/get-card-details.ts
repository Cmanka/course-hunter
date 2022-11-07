import { Course } from '@/shared/interfaces/course';

enum Key {
  duration = 'study_hours',
  source = 'publisher__username',
  countOfLessons = 'count_lessons',
  createdAt = 'created_at',
  language = 'language',
}

export const getDetails = (course: Course) => {
  return Object.entries(Key)
    .map(([label, value]) => ({
      label,
      value: course[value],
    }))
    .filter(({ value }) => value);
};
