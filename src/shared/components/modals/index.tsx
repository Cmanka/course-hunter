import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Header, Wrapper } from './styled';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = memo(({ title, children }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header>{t(title)}</Header>
      {children}
    </Wrapper>
  );
});

export { Modal };
