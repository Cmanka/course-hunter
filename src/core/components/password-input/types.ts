import { UseFormRegisterReturn } from 'react-hook-form';

export interface PasswordInputProps {
  placeholder: string;
  register: UseFormRegisterReturn<string>;
}
