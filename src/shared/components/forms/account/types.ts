import { User } from '@/shared/interfaces/app/user';

export interface AccountFormProps {
  user: User;
}

export interface AccountFormHook extends Omit<User, 'id'> {
  password: string;
}
