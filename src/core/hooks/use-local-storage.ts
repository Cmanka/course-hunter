import { StorageKey } from 'core/constants/storage-key';

const useLocalStorage = () => {
  const handleRemoveStorage = (key: keyof typeof StorageKey) => {
    localStorage.removeItem(key);
  };

  const handleGetStorage = (key: keyof typeof StorageKey) => {
    return localStorage.getItem(key);
  };

  const handleSetStorage = (key: keyof typeof StorageKey, value: string) => {
    localStorage.setItem(key, value);
  };

  return {
    get: handleGetStorage,
    remove: handleRemoveStorage,
    set: handleSetStorage,
  };
};

export { useLocalStorage };
