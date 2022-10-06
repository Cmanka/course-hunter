import { StorageKey } from 'core/constants/storage-key';

const useLocalStorage = () => {
  const handleRemoveStorage = (key: StorageKey) => {
    localStorage.removeItem(key);
  };

  const handleGetStorage = (key: StorageKey) => {
    localStorage.getItem(key);
  };

  const handleSetStorage = (key: StorageKey, value: string) => {
    localStorage.setItem(key, value);
  };

  return {
    get: handleGetStorage,
    remove: handleRemoveStorage,
    set: handleSetStorage,
  };
};

export { useLocalStorage };
