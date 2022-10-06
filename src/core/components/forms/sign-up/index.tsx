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
import { SignUpForm } from './types';

const SignUpForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();
  const { loading, query } = useQuery({
    method: 'POST',
    query: QueryKey.Register,
  });

  const handleConfirm = handleSubmit((data) => {
    query(data);
  });

  return (
    <Wrapper>
      <TextInput
        {...register('username', { required: 'username is required field' })}
        placeholder="username"
      />
      <ErrorHelper error={errors.username} />
      <TextInput
        {...register('email', { validate: emailValidate })}
        placeholder="email"
        type="email"
      />
      <ErrorHelper error={errors.email} />
      <TextInput
        {...register('firstname', { required: 'firstname is required field' })}
        placeholder="firstname"
      />
      <ErrorHelper error={errors.firstname} />
      <TextInput
        {...register('lastname', { required: 'lastname is required field' })}
        placeholder="lastname"
      />
      <ErrorHelper error={errors.lastname} />
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

export { SignUpForm };
