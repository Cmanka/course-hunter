import { AppRoutes } from '@constants/app-routes';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/core/components/private-route';
import { Account } from '@/pages/account';
import { Home } from '@/pages/home';

import { ErrorBoundary } from '../error-boundary';
import { Footer } from '../footer';
import { Header } from '../header';

const Router: FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
          <Route
            path={AppRoutes.Account}
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export { Router };
