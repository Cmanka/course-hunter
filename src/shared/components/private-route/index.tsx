import React, { FC, PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

import { tokenState } from '@/shared/recoil/token';

import { NotFound } from '../not-found';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const token = useRecoilValue(tokenState);

  if (token) {
    return <>{children}</>;
  }

  return <NotFound />;
};

export { PrivateRoute };
