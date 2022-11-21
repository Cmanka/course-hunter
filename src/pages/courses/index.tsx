import { TextInput } from 'grommet';
import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { CourseCard } from '@/shared/components/course-card';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { filteredCourses } from '@/shared/recoil/course';
import { HeadSection } from '@/shared/styles/head-section';

import {
  CoursesWrapper,
  InputWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './styled';

const Courses: FC = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const debouncedTitle = useDebounce(title);
  const courses = useRecoilValue(filteredCourses({ title: debouncedTitle }));

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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
      {courses.length > 0 && (
        <CoursesWrapper>
          {courses.map((data) => (
            <CourseCard key={data.id} {...data} />
          ))}
        </CoursesWrapper>
      )}
    </Wrapper>
  );
};

export { Courses };
