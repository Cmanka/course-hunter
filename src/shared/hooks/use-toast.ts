import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { Toast } from '../interfaces/toast';
import { toastState } from '../recoil/toast';

const TIME_TO_CLOSE = 2500;

const useToast = () => {
  const setToasts = useSetRecoilState(toastState);
  const id = uuid();

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      setToasts((prev) => [...prev, { id, ...toast }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter(({ id: toastId }) => toastId !== id));
      }, TIME_TO_CLOSE);
    },
    [id, setToasts]
  );

  return { addToast };
};

export { useToast };
