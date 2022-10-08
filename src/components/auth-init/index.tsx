import { QueryKey } from 'core/constants/query-key';
import { useLocalStorage } from 'core/hooks/use-local-storage';
import { useQuery } from 'core/hooks/use-query';
import { User } from 'core/interfaces/user';
import { tokenState } from 'core/recoil/token';
import { userState } from 'core/recoil/user';
import { FC, memo, useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const AuthInit: FC = memo(() => {
  const { get } = useLocalStorage();
  const { query } = useQuery<User>({
    method: 'GET',
    query: QueryKey.UserPersonal,
  });
  const token = get('Token');
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);

  useLayoutEffect(() => {
    if (token) {
      setToken(token);
      query().then((data) => {
        if (data) {
          setUser(data);
        }
      });
    }
  }, [token]);

  return null;
});

export { AuthInit };
