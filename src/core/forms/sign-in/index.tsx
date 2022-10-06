import { ErrorHelper } from 'core/components/error-helper';
import { PasswordInput } from 'core/components/password-input';
import { QueryKey } from 'core/constants/query-key';
import { emailValidate } from 'core/helpers/email-validate';
import { passwordValidate } from 'core/helpers/password-validate';
import { useQuery } from 'core/hooks/use-query';
import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { ConfirmButton, Wrapper } from './styled';
import { SignInForm } from './types';

const SignInForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();
  const { loading, query } = useQuery({
    method: 'POST',
    query: QueryKey.Login,
  });

  const handleConfirm = handleSubmit((data) => {
    query(data);
  });

  return (
    <Wrapper>
      <TextInput
        {...register('email', { validate: emailValidate })}
        placeholder="email"
        type="email"
      />
      <ErrorHelper error={errors.email} />
      <PasswordInput
        register={register('password', {
          validate: passwordValidate,
        })}
        placeholder="password"
      />
      <ErrorHelper error={errors.password} />
      <ConfirmButton disabled={loading} primary onClick={handleConfirm}>
        Confirm
      </ConfirmButton>
    </Wrapper>
  );
});

export { SignInForm };
