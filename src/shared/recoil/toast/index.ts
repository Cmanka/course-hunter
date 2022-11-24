import { atom, selectorFamily } from 'recoil';
import { v4 as uuid } from 'uuid';

import { Toast } from '@/shared/interfaces/app/toast';

import { RecoilToastKeys } from './keys';

const TIME_TO_CLOSE = 2500;

const addToastSelector = selectorFamily({
  key: RecoilToastKeys.AddToastSelector,
  get:
    () =>
    ({ get, getCallback }) => {
      const id = uuid();

      const addToast = getCallback(({ set }) => (toast: Omit<Toast, 'id'>) => {
        set(toastState, [...get(toastState), { id, ...toast }]);

        setTimeout(() => {
          set(toastState, [
            ...get(toastState).filter(({ id: toastId }) => toastId !== id),
          ]);
        }, TIME_TO_CLOSE);
      });

      return { addToast };
    },
});

const toastState = atom<Toast[]>({
  key: RecoilToastKeys.ToastState,
  default: [],
});

export { toastState, addToastSelector };
