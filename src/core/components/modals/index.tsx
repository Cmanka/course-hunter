import React, { FC, memo } from 'react';

import { Header, Wrapper } from './styled';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = memo(({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  );
});

export { Modal };
