import { AccountType } from 'core/constants/account-type';

export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  accountType: AccountType;
}
