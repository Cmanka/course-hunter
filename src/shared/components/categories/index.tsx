import React, { FC } from 'react';

import { AppQuery } from '@/shared/constants/app-query';
import { AppRoutes } from '@/shared/constants/app-routes';
import { parseUrl } from '@/shared/helpers/parse-url';
import { useQuery } from '@/shared/hooks/use-query';
import { Category } from '@/shared/interfaces/category';

import { Card, Wrapper } from './styled';

const Categories: FC = () => {
  const { data } = useQuery<Category[]>(
    {
      method: 'GET',
      query: AppQuery.Category,
    },
    []
  );

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
