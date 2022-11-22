import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { Toast } from '@/shared/interfaces/app/toast';

import { toastState } from '.';

const TIME_TO_CLOSE = 2500;

const useToast = () => {
  const setToasts = useSetRecoilState(toastState);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = uuid();
      setToasts((prev) => [...prev, { id, ...toast }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter(({ id: toastId }) => toastId !== id));
      }, TIME_TO_CLOSE);
    },
    [setToasts]
  );

  return { addToast };
};

export { useToast };
