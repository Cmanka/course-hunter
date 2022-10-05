import { ModalInstance } from 'core/constants/modal-instance';
import { createModalHook } from 'core/helpers/create-modal-hook';
import React, { FC } from 'react';

const SignUpModal: FC = () => {
  return <div>sign up</div>;
};

const useSignUpModal = createModalHook(ModalInstance.SignUp, (props) => () => (
  <SignUpModal {...props} />
));

export { useSignUpModal };
