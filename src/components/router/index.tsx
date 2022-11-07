import { AppRoutes } from '@constants/app-routes';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Account } from '@/pages/account';
import { CourseDetail } from '@/pages/course-detail';
import { Courses } from '@/pages/courses';
import { Home } from '@/pages/home';
import { PrivateRoute } from '@/shared/components/private-route';

const Router: FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route path={AppRoutes.Courses} element={<Courses />} />
      <Route path={AppRoutes.CoursesDetail} element={<CourseDetail />} />
      <Route
        path={AppRoutes.Account}
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export { Router };
