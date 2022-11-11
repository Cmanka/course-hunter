import { TextInput } from 'grommet';
import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CourseCard } from '@/shared/components/course-card';
import { Loader } from '@/shared/components/loader';
import { QueryKey } from '@/shared/constants/query-key';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { useQuery } from '@/shared/hooks/use-query';
import { Course } from '@/shared/interfaces/course';
import { HeadSection } from '@/shared/styles/head-section';

import {
  CoursesWrapper,
  InputWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './styled';
import { CoursesFiltersVariables } from './types';

const Courses: FC = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const debouncedTitle = useDebounce(title);
  const variables = useMemo(
    () => ({ title: debouncedTitle }),
    [debouncedTitle]
  );
  const { data, loading } = useQuery<Course[], CoursesFiltersVariables>(
    {
      method: 'GET',
      query: QueryKey.Course,
      variables,
    },
    []
  );

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <HeadSection align="center" justify="center">
        <Title>{t('allCourses')}</Title>
        <SubTitle>{t('allCoursesDescription')}</SubTitle>
        <InputWrapper>
          <TextInput
            placeholder={t('search')}
            onChange={handleSearchOnChange}
            value={title}
          />
        </InputWrapper>
      </HeadSection>
      {data.length > 0 && (
        <CoursesWrapper>
          {data.map((data) => (
            <CourseCard key={data.id} {...data} />
          ))}
        </CoursesWrapper>
      )}
    </Wrapper>
  );
};

export { Courses };
