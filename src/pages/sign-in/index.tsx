import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorHelper } from '@/shared/components/error-helper';
import { PasswordInput } from '@/shared/components/password-input';
import { emailValidate } from '@/shared/helpers/email-validate';
import { passwordValidate } from '@/shared/helpers/password-validate';

import { SignInButton, Title, Wrapper } from './styled';
import { SignInForm } from './types';

const SignIn: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();
  const { t } = useTranslation();

  const handleConfirm = handleSubmit(() => {});

  return (
    <Wrapper>
      <Title>{t`signInTitle`}</Title>
      <TextInput
        {...register('email', { validate: emailValidate })}
        placeholder={t('email')}
        type="email"
      />
      <ErrorHelper error={errors.email} />
      <PasswordInput
        register={register('password', {
          validate: passwordValidate,
        })}
        placeholder={t('password')}
      />
      <ErrorHelper error={errors.password} />
      <SignInButton label={t`signIn`} primary onClick={handleConfirm} />
    </Wrapper>
  );
};

export { SignIn };
