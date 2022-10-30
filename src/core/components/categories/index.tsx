import React, { FC, useEffect } from 'react';

import { AppRoutes } from '@/core/constants/app-routes';
import { QueryKey } from '@/core/constants/query-key';
import { parseUrl } from '@/core/helpers/parse-url';
import { useQuery } from '@/core/hooks/use-query';
import { Category } from '@/core/interfaces/category';

import { Card, Wrapper } from './styled';

const Categories: FC = () => {
  const { data, query } = useQuery<Category[]>(
    {
      method: 'GET',
      query: QueryKey.Category,
      isQuery: true,
    },
    []
  );

  useEffect(() => {
    query();
  }, [query]);

  return (
    <Wrapper>
      {data.map(({ id, logo, title }) => (
        <Card key={id} to={parseUrl(AppRoutes.Category, id)}>
          <img src={logo} />
          {title}
        </Card>
      ))}
    </Wrapper>
  );
};

export { Categories };
