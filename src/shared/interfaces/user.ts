import { AccountType } from '../constants/account-type';

interface Account {
  type: AccountType;
}

export interface User {
  id: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  account: Account;
  image: string;
}
