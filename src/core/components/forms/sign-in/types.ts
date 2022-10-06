import { AccountType } from 'core/constants/account-type';

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  accountType: AccountType;
  username: string;
}
