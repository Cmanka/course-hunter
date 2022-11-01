import { atom } from 'recoil';

import { RecoilAtomKey } from '../constants/recoil-atom-key';

const tokenState = atom({
  key: RecoilAtomKey.TokenState,
  default: '',
});

export { tokenState };
