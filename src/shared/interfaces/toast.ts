import { ToastType } from '../constants/toast-type';

export interface Toast {
  id: string;
  text: string;
  type: keyof typeof ToastType;
}
