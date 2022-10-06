import { SignUpForm } from 'core/components/forms/sign-up';
import { ModalInstance } from 'core/constants/modal-instance';
import { createModalHook } from 'core/helpers/create-modal-hook';
import React, { FC, memo } from 'react';

import { Modal } from '..';

const SignUpModal: FC = memo(() => {
  return (
    <Modal title="signUp">
      <SignUpForm />
    </Modal>
  );
});

const useSignUpModal = createModalHook(ModalInstance.SignUp, (props) => () => (
  <SignUpModal {...props} />
));

export { useSignUpModal };
