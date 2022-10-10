import React, { FC, memo } from 'react';

import { ModalInstance } from '@/core/constants/modal-instance';
import { createModalHook } from '@/core/helpers/create-modal-hook';

import { SignInForm } from '../../forms/sign-in';
import { Modal } from '..';

const SignInModal: FC = memo(() => {
  return (
    <Modal title="signIn">
      <SignInForm />
    </Modal>
  );
});

const useSignInModal = createModalHook(ModalInstance.SignIn, (props) => () => (
  <SignInModal {...props} />
));

export { useSignInModal };
