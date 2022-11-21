import { selectorFamily } from 'recoil';

import { StorageKey } from '@/shared/constants/storage-key';

import { RecoilStorageKeys } from './keys';

const storageValue = selectorFamily<string | null, StorageKey>({
  key: RecoilStorageKeys.StorageValue,
  get: (key) => () => {
    const value = localStorage.getItem(key);

    return value;
  },
});

export { storageValue };
