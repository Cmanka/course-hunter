import { ToastType } from '../../constants/app/toast-type';

export interface Toast {
  id: string;
  text: string;
  type: keyof typeof ToastType;
}
