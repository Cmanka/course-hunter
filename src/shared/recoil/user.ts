import { atom } from 'recoil';

import { RecoilAtomKey } from '../constants/recoil-atom-key';
import { User } from '../interfaces/user';

const userState = atom<User | null>({
  key: RecoilAtomKey.UserState,
  default: null,
});

export { userState };
