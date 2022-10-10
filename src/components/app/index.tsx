import 'react-toastify/dist/ReactToastify.css';
import '../../i18n';

import { Grommet } from 'grommet';
import React, { FC, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { GlobalStyle } from '../../global-styles';
import { theme } from '../../theme';
import { AuthInit } from '../auth-init';
import { ModalContainer } from '../modal-container';
import { Router } from '../router';

const App: FC = memo(() => {
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
});

export { App };
