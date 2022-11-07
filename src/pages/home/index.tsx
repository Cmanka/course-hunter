import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Categories } from '@/shared/components/categories';
import { CourseCard } from '@/shared/components/course-card';
import { Loader } from '@/shared/components/loader';
import { AppRoutes } from '@/shared/constants/app-routes';
import { QueryKey } from '@/shared/constants/query-key';
import { useQuery } from '@/shared/hooks/use-query';
import { Course } from '@/shared/interfaces/course';

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

  const { data, loading } = useQuery<Course[]>({
    method: 'GET',
    query: QueryKey.Course,
  });

  const handleToCourses = () => {
    navigate(AppRoutes.Courses);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Title>{t('titleHome')}</Title>
      <SubTitle>{t('subTitleHome')}</SubTitle>
      <Categories />
      <CourseTitle>{t('courseTitle')}</CourseTitle>
      {data.length && (
        <CoursesWrapper>
          {data.map((data) => (
            <CourseCard key={data.id} {...data} />
          ))}
        </CoursesWrapper>
      )}
      <MoreButton label={t`allCourses`} primary onClick={handleToCourses} />
    </Wrapper>
  );
};

export { Home };
