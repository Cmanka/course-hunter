import { RecoilAtomKey } from 'core/constants/recoil-atom-key';
import { User } from 'core/interfaces/user';
import { atom } from 'recoil';

const userState = atom<User | null>({
  key: RecoilAtomKey.UserState,
  default: null,
});

export { userState };
