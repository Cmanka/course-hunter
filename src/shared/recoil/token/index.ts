import { atom, selector } from 'recoil';

import { StorageKey } from '@/shared/constants/app/storage-key';

import { storageValue } from '../storage';
import { RecoilTokenKeys } from './keys';

const tokenByDefault = selector({
  key: RecoilTokenKeys.TokenSelector,
  get: ({ get }) => {
    const token = get(storageValue(StorageKey.Token));

    return token;
  },
});

const tokenState = atom({
  key: RecoilTokenKeys.TokenState,
  default: tokenByDefault,
});

export { tokenState };
