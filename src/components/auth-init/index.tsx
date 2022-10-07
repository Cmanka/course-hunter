import { useLocalStorage } from 'core/hooks/use-local-storage';
import { tokenState } from 'core/recoil/token';
import { FC, useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const AuthInit: FC = () => {
  const { get } = useLocalStorage();
  const token = get('Token');
  const setToken = useSetRecoilState(tokenState);

  useLayoutEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  return null;
};

export { AuthInit };
