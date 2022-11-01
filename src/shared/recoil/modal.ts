import { FC } from 'react';
import { atom } from 'recoil';

import { RecoilAtomKey } from '../constants/recoil-atom-key';

interface Modal<T> {
  id: string;
  Component: FC<T>;
}

const modalsState = atom({
  key: RecoilAtomKey.ModalState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: [] as Modal<any>[],
});

export { modalsState };
