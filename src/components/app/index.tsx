import { ModalContainer } from 'components/modal-container';
import { GlobalStyle } from 'global-styles';
import { Grommet } from 'grommet';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from 'theme';

import { Router } from '../router';

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
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
