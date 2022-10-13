import { User } from '@/core/interfaces/user';

export interface AccountFormProps {
  user: User;
}

export interface AccountFormHook {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
