import { RecoilAtomKey } from 'core/constants/recoil-atom-key';
import { FC } from 'react';
import { atom } from 'recoil';

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
