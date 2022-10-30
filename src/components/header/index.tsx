import { Button } from 'grommet';
import { User } from 'grommet-icons';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { useSignInModal } from '@/core/components/modals/sign-in';
import { useSignUpModal } from '@/core/components/modals/sign-up';
import { AppRoutes } from '@/core/constants/app-routes';
import { useLocalStorage } from '@/core/hooks/use-local-storage';
import { tokenState } from '@/core/recoil/token';

import {
  Avatar,
  ButtonsWrapper,
  InnerWrapper,
  Link,
  OuterWrapper,
  RoutesWrapper,
} from './styled';

const HEADER_ROUTES = [{ label: 'home', path: AppRoutes.Home }];

const Header: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openSignIn] = useSignInModal();
  const [openSignUp] = useSignUpModal();
  const { remove } = useLocalStorage();
  const [token, setToken] = useRecoilState(tokenState);

  const handleSignIn = () => {
    openSignIn();
  };

  const handleSignUp = () => {
    openSignUp();
  };

  const handleToAccount = () => {
    navigate(AppRoutes.Account);
  };

  const handleLogout = () => {
    remove('Token');
    setToken('');
    navigate(AppRoutes.Home);
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <RoutesWrapper>
          {HEADER_ROUTES.map(({ label, path }) => (
            <Link key={label} to={path}>
              {t(label)}
            </Link>
          ))}
        </RoutesWrapper>
        <ButtonsWrapper>
          {token && (
            <>
              <Avatar background="brand" onClick={handleToAccount}>
                <User />
              </Avatar>
              <Button label={t`logout`} secondary onClick={handleLogout} />
            </>
          )}
          {!token && (
            <>
              <Button label={t`signIn`} primary onClick={handleSignIn} />
              <Button label={t`signUp`} secondary onClick={handleSignUp} />
            </>
          )}
        </ButtonsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export { Header };
