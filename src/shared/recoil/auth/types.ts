import { User } from '@/shared/interfaces/app/user';

export type SignInCallbackVariables = { email: string; password: string };

export type SignInRequestResult = { user: User; accessToken: string };

export type SignInResult = {
  signIn: (variables: SignInCallbackVariables) => void;
};

export type LogoutSelectorResult = {
  logout: () => void;
};
