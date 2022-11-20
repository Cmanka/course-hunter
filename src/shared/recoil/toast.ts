import { atom } from 'recoil';

import { RecoilAtomKey } from '../constants/recoil-atom-key';
import { Toast } from '../interfaces/toast';

const toastState = atom<Toast[]>({
  key: RecoilAtomKey.ToastState,
  default: [],
});

export { toastState };
