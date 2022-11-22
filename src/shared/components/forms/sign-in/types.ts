import { User } from '@/shared/interfaces/app/user';

export interface Form {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: User;
}
