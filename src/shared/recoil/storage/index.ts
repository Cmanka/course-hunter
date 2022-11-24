import { selectorFamily } from 'recoil';

import { StorageKey } from '@/shared/constants/app/storage-key';

import { RecoilStorageKeys } from './keys';
import { StorageSelectorResult } from './types';

const storageSelector = selectorFamily<StorageSelectorResult, StorageKey>({
  key: RecoilStorageKeys.StorageValue,
  get:
    (key) =>
    ({ getCallback }) => {
      const value = localStorage.getItem(key);
      const setValue = getCallback(() => (key: StorageKey, value: string) => {
        localStorage.setItem(key, value);
      });
      const removeValue = getCallback(() => (key: StorageKey) => {
        localStorage.removeItem(key);
      });

      return { value, setValue, removeValue };
    },
});

export { storageSelector };
