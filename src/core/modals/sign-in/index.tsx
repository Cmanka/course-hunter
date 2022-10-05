import { ModalInstance } from 'core/constants/modal-instance';
import { createModalHook } from 'core/helpers/create-modal-hook';
import React, { FC } from 'react';

const SignInModal: FC = () => {
  return <div>sign in</div>;
};

const useSignInModal = createModalHook(ModalInstance.SignIn, (props) => () => (
  <SignInModal {...props} />
));

export { useSignInModal };
