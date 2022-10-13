import { User } from '@/core/interfaces/user';

export interface AccountFormProps {
  user: User;
}

export interface AccountFormHook extends Omit<User, 'id'> {
  password: string;
}
