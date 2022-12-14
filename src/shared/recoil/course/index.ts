import { atom, selector, selectorFamily } from 'recoil';

import { AppQuery } from '@/shared/constants/app/app-query';
import { parseUrl } from '@/shared/helpers/parse-url';
import { queryBuilder } from '@/shared/helpers/query-builder';
import { Course } from '@/shared/interfaces/course/course';

import { RecoilCourseKeys } from './keys';
import { CourseById, CoursesFiltersVariables } from './types';

const defaultCourses = selector<Course[]>({
  key: RecoilCourseKeys.HomeCourses,
  get: async () => {
    const courses = await queryBuilder<Course[]>({ query: AppQuery.Courses });

    return courses;
  },
});

const coursesState = atom<Course[]>({
  key: RecoilCourseKeys.CoursesState,
  default: defaultCourses,
});

const filteredCourses = selectorFamily<Course[], CoursesFiltersVariables>({
  key: RecoilCourseKeys.FilteredCourses,
  get: (variables) => async () => {
    const courses = await queryBuilder<Course[]>({
      query: AppQuery.Courses,
      variables,
    });

    return courses;
  },
});

const courseById = selectorFamily<Course, CourseById>({
  key: RecoilCourseKeys.CourseById,
  get:
    ({ id }) =>
    async () => {
      try {
        const course = await queryBuilder<Course>({
          query: parseUrl(AppQuery.CourseDetail, id),
        });

        return course;
      } catch (e) {
        throw new Error('Cannot fetch course by id');
      }
    },
});

export { coursesState, courseById, filteredCourses };
