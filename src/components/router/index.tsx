import { AppRoutes } from 'core/constants/app-routes';
import { Courses } from 'pages/courses';
import { Home } from 'pages/home';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route path={AppRoutes.Courses} element={<Courses />} />
    </Routes>
  );
};

export { Router };
