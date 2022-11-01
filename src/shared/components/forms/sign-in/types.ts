import { User } from '@shared/interfaces/user';

export interface Form {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: User;
}
