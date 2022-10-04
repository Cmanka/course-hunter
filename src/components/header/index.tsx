import { AppRoutes } from 'core/constants/app-routes';
import React, { FC } from 'react';

import { Link, Routes, Wrapper } from './styled';

const HEADER_ROUTES = [
  { label: 'Home', path: AppRoutes.Home },
  { label: 'Courses', path: AppRoutes.Courses },
];

const Header: FC = () => {
  return (
    <Wrapper>
      <Routes>
        {HEADER_ROUTES.map(({ label, path }) => (
          <Link key={label} to={path}>
            {label}
          </Link>
        ))}
      </Routes>
    </Wrapper>
  );
};

export { Header };
