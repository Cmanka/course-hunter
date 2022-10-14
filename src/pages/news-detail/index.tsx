import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '@/core/components/loader';
import { ApiUrl } from '@/core/constants/api-url';
import { QueryKey } from '@/core/constants/query-key';
import { parseUrl } from '@/core/helpers/parse-url';
import { useQuery } from '@/core/hooks/use-query';
import { News } from '@/core/interfaces/news';

import { Description, Wrapper } from './styled';

// TODO: update data when it will be object

const NewsDetails: FC = () => {
  const { id } = useParams();

  const { data, loading, query } = useQuery<News[]>({
    method: 'GET',
    api: ApiUrl.Node,
    query: parseUrl(QueryKey.NewsDetails, id),
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
      {Object.entries(data[0]).map(([key, value]) => (
        <Description key={key}>
          {key} - {value}
        </Description>
      ))}
    </Wrapper>
  );
};

export { NewsDetails };
