import { AppRoutes } from 'core/constants/app-routes';
import React, { FC } from 'react';

import { Link, Routes, Wrapper } from './styled';

const Header: FC = () => {
  return (
    <Wrapper>
      <Routes>
        {Object.entries(AppRoutes).map(([label, route]) => (
          <Link key={label} to={route}>
            {label}
          </Link>
        ))}
      </Routes>
    </Wrapper>
  );
};

export { Header };
