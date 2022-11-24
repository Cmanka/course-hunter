import { selectorFamily } from 'recoil';

import { AppQuery } from '@/shared/constants/app/app-query';
import { StorageKey } from '@/shared/constants/app/storage-key';
import { mutationBuilder } from '@/shared/helpers/mutation-builder';
import { ServerError } from '@/shared/interfaces/app/error';
import { tokenState } from '@/shared/recoil/token';

import { storageSelector } from '../storage';
import { userState } from '../user';
import { RecoilAuthKeys } from './keys';
import {
  LogoutSelectorResult,
  SignInCallbackVariables,
  SignInRequestResult,
  SignInResult,
} from './types';

const signInSelector = selectorFamily<SignInResult, {}>({
  key: RecoilAuthKeys.SignInSelect,
  get:
    () =>
    async ({ getCallback, get }) => {
      const signIn = getCallback(
        ({ set }) =>
          async (variables: SignInCallbackVariables) => {
            const result = await mutationBuilder<
              SignInRequestResult | ServerError
            >({
              query: AppQuery.Login,
              variables,
            });
            const { setValue } = get(storageSelector(StorageKey.Token));

            if ('detail' in result) {
              return result.detail;
            }

            set(userState, result.user);
            set(tokenState, result.accessToken);
            setValue(StorageKey.Token, result.accessToken);

            return result;
          }
      );

      return {
        signIn,
      };
    },
});

const logoutSelector = selectorFamily<LogoutSelectorResult, {}>({
  key: RecoilAuthKeys.SignInSelect,
  get:
    () =>
    async ({ getCallback, get }) => {
      const logout = getCallback(({ set }) => async () => {
        const { removeValue } = get(storageSelector(StorageKey.Token));
        removeValue(StorageKey.Token);
        set(userState, null);
        set(tokenState, null);
      });

      return {
        logout,
      };
    },
});

export { signInSelector, logoutSelector };
