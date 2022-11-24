import { atom, selector } from 'recoil';

import { StorageKey } from '@/shared/constants/app/storage-key';

import { storageSelector } from '../storage';
import { RecoilTokenKeys } from './keys';

const tokenByDefault = selector({
  key: RecoilTokenKeys.TokenSelector,
  get: ({ get }) => {
    const { value } = get(storageSelector(StorageKey.Token));

    return value;
  },
});

const tokenState = atom({
  key: RecoilTokenKeys.TokenState,
  default: tokenByDefault,
});

export { tokenState };
