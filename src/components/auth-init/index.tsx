import { FC, memo, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { AppRoutes } from '@/shared/constants/app-routes';
import { QueryKey } from '@/shared/constants/query-key';
import { useLocalStorage } from '@/shared/hooks/use-local-storage';
import { useQuery } from '@/shared/hooks/use-query';
import { User } from '@/shared/interfaces/user';
import { tokenState } from '@/shared/recoil/token';
import { userState } from '@/shared/recoil/user';

const AuthInit: FC = memo(() => {
  const { get, remove } = useLocalStorage();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const token = get('Token');
  const { data } = useQuery<User>({
    method: 'GET',
    query: QueryKey.UserPersonal,
    isFetch: Boolean(token),
  });

  useLayoutEffect(() => {
    if (token) {
      setToken(token);
      if (data) {
        setUser(data);
      } else {
        navigate(AppRoutes.Home);
        remove('Token');
      }
    }
  }, [data, navigate, remove, setToken, setUser, token]);

  return null;
});

export { AuthInit };
