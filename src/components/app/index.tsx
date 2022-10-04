import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Router } from 'components/router';
import React, { FC } from 'react';

import { AppLayout } from './styled';

const App: FC = () => {
  return (
    <AppLayout>
      <Header />
      <Router />
      <Footer />
    </AppLayout>
  );
};

export { App };
