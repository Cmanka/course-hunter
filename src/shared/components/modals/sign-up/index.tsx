import React, { FC, memo } from 'react';

import { ModalInstance } from '@/shared/constants/modal-instance';
import { createModalHook } from '@/shared/helpers/create-modal-hook';

import { SignUpForm } from '../../forms/sign-up';
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
