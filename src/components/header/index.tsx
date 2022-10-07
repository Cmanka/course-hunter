import { LanguageSelect } from 'core/components/language-select';
import { useSignInModal } from 'core/components/modals/sign-in';
import { useSignUpModal } from 'core/components/modals/sign-up';
import { AppRoutes } from 'core/constants/app-routes';
import { Button } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonsWrapper, Link, RoutesWrapper, Wrapper } from './styled';

const HEADER_ROUTES = [{ label: 'home', path: AppRoutes.Home }];

const Header: FC = () => {
  const { t } = useTranslation();
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
            {t(label)}
          </Link>
        ))}
      </RoutesWrapper>
      <ButtonsWrapper>
        <LanguageSelect />
        <Button label={t`signIn`} primary onClick={handleSignIn} />
        <Button label={t`signUp`} secondary onClick={handleSignUp} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export { Header };
