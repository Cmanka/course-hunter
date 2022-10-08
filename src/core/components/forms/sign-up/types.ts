import { User } from 'core/interfaces/user';

export interface SignUpForm {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
  user: User;
}
