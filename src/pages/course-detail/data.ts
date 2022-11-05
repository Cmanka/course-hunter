import { Course } from '@/shared/interfaces/course';

enum Key {
  Duration = 'study_hours',
  Source = 'publisher__username',
  СountOfLessons = 'count_lessons',
  CreatedAt = 'created_at',
  Language = 'language',
}

export const getDetails = (course: Course) => {
  return Object.entries(Key)
    .map(([label, value]) => ({
      label,
      value: course[value],
    }))
    .filter(({ value }) => value);
};
