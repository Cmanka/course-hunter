import { Heading } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Loader } from '@/core/components/loader';
import { QueryKey } from '@/core/constants/query-key';
import { useQuery } from '@/core/hooks/use-query';
import { Course } from '@/core/interfaces/course';

import { Wrapper } from './styled';

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
      <Heading textAlign="center">{t('homeDesc')}</Heading>
      <HomeIcon size="88px" color="#000" />
    </Wrapper>
  );
};

export { Home };
