import 'react-toastify/dist/ReactToastify.css';
import '../../i18n';

import { AuthInit } from 'components/auth-init';
import { ModalContainer } from 'components/modal-container';
import { GlobalStyle } from 'global-styles';
import { Grommet } from 'grommet';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { theme } from 'theme';

import { Router } from '../router';

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ToastContainer position="top-center" autoClose={2500} />
        <AuthInit />
        <Grommet theme={theme}>
          <GlobalStyle />
          <ModalContainer />
          <Router />
        </Grommet>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export { App };
