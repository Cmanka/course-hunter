import { atom } from 'recoil';

import { Toast } from '@/shared/interfaces/app/toast';

import { RecoilToastKeys } from './keys';

const toastState = atom<Toast[]>({
  key: RecoilToastKeys.ToastState,
  default: [],
});

export { toastState };
