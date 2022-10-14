import { useCallback } from 'react';

import { StorageKey } from '../constants/storage-key';

const useLocalStorage = () => {
  const handleRemoveStorage = useCallback((key: keyof typeof StorageKey) => {
    localStorage.removeItem(key);
  }, []);

  const handleGetStorage = useCallback((key: keyof typeof StorageKey) => {
    return localStorage.getItem(key);
  }, []);

  const handleSetStorage = useCallback(
    (key: keyof typeof StorageKey, value: string) => {
      localStorage.setItem(key, value);
    },
    []
  );

  return {
    get: handleGetStorage,
    remove: handleRemoveStorage,
    set: handleSetStorage,
  };
};

export { useLocalStorage };
