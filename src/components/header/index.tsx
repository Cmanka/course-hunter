import { AppRoutes } from 'core/constants/app-routes';
import { useSignInModal } from 'core/modals/sign-in';
import { Button } from 'grommet/components/Button';
import React, { FC } from 'react';

import { ButtonsWrapper, Link, RoutesWrapper, Wrapper } from './styled';

const HEADER_ROUTES = [
  { label: 'Home', path: AppRoutes.Home },
  { label: 'Courses', path: AppRoutes.Courses },
];

const Header: FC = () => {
  const [openSignIn] = useSignInModal();

  const handleSignIn = () => {
    openSignIn();
  };

  const handleSignUp = () => {};

  return (
    <Wrapper>
      <RoutesWrapper>
        {HEADER_ROUTES.map(({ label, path }) => (
          <Link key={label} to={path}>
            {label}
          </Link>
        ))}
      </RoutesWrapper>
      <ButtonsWrapper>
        <Button label="Sign in" primary onClick={handleSignIn} />
        <Button label="Sign up" secondary onClick={handleSignUp} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export { Header };
