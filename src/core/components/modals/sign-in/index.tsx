import { SignInForm } from 'core/components/forms/sign-in';
import { ModalInstance } from 'core/constants/modal-instance';
import { createModalHook } from 'core/helpers/create-modal-hook';
import React, { FC, memo } from 'react';

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
