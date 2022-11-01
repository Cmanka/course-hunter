import logo from '@assets/header-logo.svg';
import { Button } from 'grommet';
import { User } from 'grommet-icons';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { useSignInModal } from '@/shared/components/modals/sign-in';
import { useSignUpModal } from '@/shared/components/modals/sign-up';
import { AppRoutes } from '@/shared/constants/app-routes';
import { useLocalStorage } from '@/shared/hooks/use-local-storage';
import { tokenState } from '@/shared/recoil/token';

import {
  Avatar,
  ButtonsWrapper,
  InnerWrapper,
  Logo,
  OuterWrapper,
} from './styled';

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

  const handleHome = () => {
    navigate(AppRoutes.Home);
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Logo src={logo} onClick={handleHome} />
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
