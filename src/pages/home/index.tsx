import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Categories } from '@/shared/components/categories';
import { CourseCard } from '@/shared/components/course-card';
import { AppRoutes } from '@/shared/constants/app-routes';
import { coursesState } from '@/shared/recoil/course';

import {
  CoursesWrapper,
  CourseTitle,
  MoreButton,
  SubTitle,
  Title,
  Wrapper,
} from './styled';

const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const courses = useRecoilValue(coursesState);

  const handleToCourses = () => {
    navigate(AppRoutes.Courses);
  };

  return (
    <Wrapper>
      <Title>{t('titleHome')}</Title>
      <SubTitle>{t('subTitleHome')}</SubTitle>
      <Categories />
      <CourseTitle>{t('courseTitle')}</CourseTitle>
      {courses.length && (
        <CoursesWrapper>
          {courses.map((data) => (
            <CourseCard key={data.id} {...data} />
          ))}
        </CoursesWrapper>
      )}
      <MoreButton label={t`allCourses`} primary onClick={handleToCourses} />
    </Wrapper>
  );
};

export { Home };
