import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '@/shared/components/loader';
import { QueryKey } from '@/shared/constants/query-key';
import { parseUrl } from '@/shared/helpers/parse-url';
import { useQuery } from '@/shared/hooks/use-query';
import { Course } from '@/shared/interfaces/course';

import { AbsoluteBackground, Description, Title, Wrapper } from './styled';

const CourseDetail: FC = () => {
  const { id } = useParams();
  const { data, loading, query } = useQuery<Course>({
    method: 'GET',
    query: parseUrl(QueryKey.CourseDetail, id),
  });

  useEffect(() => {
    query();
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <AbsoluteBackground />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Wrapper>
  );
};

export { CourseDetail };
