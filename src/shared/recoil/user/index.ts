import { atom, selector } from 'recoil';

import { AppQuery } from '@/shared/constants/app/app-query';
import { queryBuilder } from '@/shared/helpers/query-builder';
import { User } from '@/shared/interfaces/app/user';

import { tokenState } from '../token';
import { RecoilUserKeys } from './keys';

const defaultUser = selector<User | null>({
  key: RecoilUserKeys.UserPersonal,
  get: async ({ get }) => {
    const token = get(tokenState);

    if (token) {
      return await queryBuilder<User>({
        query: AppQuery.UserPersonal,
      });
    }

    return null;
  },
});

const userState = atom<User | null>({
  key: RecoilUserKeys.UserState,
  default: defaultUser,
});

export { userState };
