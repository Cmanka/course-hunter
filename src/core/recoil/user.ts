import { RecoilAtomKey } from 'core/constants/recoil-atom-key';
import { atom } from 'recoil';

const userState = atom({
  key: RecoilAtomKey.UserState,
  default: null,
});

export { userState };
