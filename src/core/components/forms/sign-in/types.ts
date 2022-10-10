import { User } from '@core/interfaces/user';

export interface Form {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: User;
}
