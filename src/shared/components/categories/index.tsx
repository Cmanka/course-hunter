import React, { FC } from 'react';

import { AppRoutes } from '@/shared/constants/app/app-routes';
import { parseUrl } from '@/shared/helpers/parse-url';

import { Card, Wrapper } from './styled';
import { CategoriesProps } from './types';

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(({ id, logo, title }) => (
        <Card key={id} to={parseUrl(AppRoutes.Category, id)}>
          <img src={logo} />
          {title}
        </Card>
      ))}
    </Wrapper>
  );
};

export { Categories };
