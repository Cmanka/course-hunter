import { StorageKey } from '@/shared/constants/app/storage-key';

export type StorageSelectorResult = {
  setValue: (key: StorageKey, value: string) => void;
  removeValue: (key: StorageKey) => void;
  value: string | null;
};
