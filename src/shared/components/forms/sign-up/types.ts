import { User } from '@/shared/interfaces/app/user';

export interface Form {
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
