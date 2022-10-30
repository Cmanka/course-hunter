import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Categories } from '@/core/components/categories';
import { Loader } from '@/core/components/loader';
import { QueryKey } from '@/core/constants/query-key';
import { useQuery } from '@/core/hooks/use-query';
import { Course } from '@/core/interfaces/course';

import { SubTitle, Title, Wrapper } from './styled';

const Home: FC = () => {
  const { t } = useTranslation();

  const { loading, query } = useQuery<Course[]>({
    method: 'GET',
    query: QueryKey.Course,
    isQuery: true,
  });

  useEffect(() => {
    query();
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Title>{t('titleHome')}</Title>
      <SubTitle>{t('subTitleHome')}</SubTitle>
      <Categories />
    </Wrapper>
  );
};

export { Home };
