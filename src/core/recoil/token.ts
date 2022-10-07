import { RecoilAtomKey } from 'core/constants/recoil-atom-key';
import { atom } from 'recoil';

const tokenState = atom({
  key: RecoilAtomKey.TokenState,
  default: '',
});

export { tokenState };
