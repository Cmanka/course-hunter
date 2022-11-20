import { atom } from 'recoil';

import { RecoilAtomKey } from '@/shared/constants/recoil-atom-key';
import { Toast } from '@/shared/interfaces/toast';

const toastState = atom<Toast[]>({
  key: RecoilAtomKey.ToastState,
  default: [],
});

export { toastState };
