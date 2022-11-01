import React, { FC, useEffect } from 'react';

import { AppRoutes } from '@/shared/constants/app-routes';
import { QueryKey } from '@/shared/constants/query-key';
import { parseUrl } from '@/shared/helpers/parse-url';
import { useQuery } from '@/shared/hooks/use-query';
import { Category } from '@/shared/interfaces/category';

import { Card, Wrapper } from './styled';

const Categories: FC = () => {
  const { data, query } = useQuery<Category[]>(
    {
      method: 'GET',
      query: QueryKey.Category,
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
