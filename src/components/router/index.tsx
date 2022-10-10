import { AppRoutes } from '@constants/app-routes';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Courses } from '@/pages/courses';
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
          <Route path={AppRoutes.Courses} element={<Courses />} />
        </Routes>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export { Router };
