import logo from '@assets/header-logo.svg';
import { Button } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { AppRoutes } from '@/shared/constants/app/app-routes';
import { userState } from '@/shared/recoil/user';

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
  const user = useRecoilValue(userState);

  const handleSignIn = () => {};

  const handleSignUp = () => {};

  const handleToAccount = () => {
    navigate(AppRoutes.Account);
  };

  const handleLogout = () => {
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
          {user && (
            <>
              <Avatar
                src={user?.image}
                background="brand"
                onClick={handleToAccount}
              />
              <Button label={t`logout`} secondary onClick={handleLogout} />
            </>
          )}
          {!user && (
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
