import { useSignInModal } from 'core/components/modals/sign-in';
import { useSignUpModal } from 'core/components/modals/sign-up';
import { AppRoutes } from 'core/constants/app-routes';
import { Button } from 'grommet';
import React, { FC } from 'react';

import { ButtonsWrapper, Link, RoutesWrapper, Wrapper } from './styled';

const HEADER_ROUTES = [{ label: 'Home', path: AppRoutes.Home }];

const Header: FC = () => {
  const [openSignIn] = useSignInModal();
  const [openSignUp] = useSignUpModal();

  const handleSignIn = () => {
    openSignIn();
  };

  const handleSignUp = () => {
    openSignUp();
  };

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
