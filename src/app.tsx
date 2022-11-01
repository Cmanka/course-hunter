import 'react-toastify/dist/ReactToastify.css';
import './configuration/i18n';

import { Grommet } from 'grommet';
import React, { FC, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { GlobalStyle } from '@/configuration/global-styles';

import { AuthInit } from './components/auth-init';
import { Banner } from './components/banner';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ModalContainer } from './components/modal-container';
import { Router } from './components/router';
import { theme } from './configuration/theme';

const App: FC = memo(() => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ToastContainer position="top-center" autoClose={2500} />
        <AuthInit />
        <Grommet theme={theme}>
          <GlobalStyle />
          <ModalContainer />
          <Header />
          <Banner />
          <Router />
          <Footer />
        </Grommet>
      </RecoilRoot>
    </BrowserRouter>
  );
});

export { App };
