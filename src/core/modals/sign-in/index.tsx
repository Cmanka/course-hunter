import { ModalInstance } from 'core/constants/modal-instance';
import { SignInForm } from 'core/forms/sign-in';
import { createModalHook } from 'core/helpers/create-modal-hook';
import React, { FC, memo } from 'react';

import { Header, Wrapper } from './styled';

const SignInModal: FC = memo(() => {
  return (
    <Wrapper>
      <Header>Sign in</Header>
      <SignInForm />
    </Wrapper>
  );
});

const useSignInModal = createModalHook(ModalInstance.SignIn, (props) => () => (
  <SignInModal {...props} />
));

export { useSignInModal };
