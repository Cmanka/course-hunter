import React, { FC } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';
import { Router } from '../router';
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
