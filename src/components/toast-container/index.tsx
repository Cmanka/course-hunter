import { Close } from 'grommet-icons';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { toastState } from '@/shared/recoil/toast';

import { ToastText, ToastWrapper } from './styled';

const ToastContainer: FC = () => {
  const [toasts, setToasts] = useRecoilState(toastState);
  const { t } = useTranslation();

  const handleClose = (id: string) => () => {
    setToasts((prev) => prev.filter(({ id: toastId }) => toastId !== id));
  };

  if (!toasts.length) {
    return null;
  }

  return (
    <>
      {toasts.map(({ id, text }) => {
        return (
          <ToastWrapper key={id} onClick={handleClose(id)}>
            <ToastText>{t(text)}</ToastText>
            <Close />
          </ToastWrapper>
        );
      })}
    </>
  );
};

export { ToastContainer };
