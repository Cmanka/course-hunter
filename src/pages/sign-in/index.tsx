import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { ErrorHelper } from '@/shared/components/error-helper';
import { PasswordInput } from '@/shared/components/password-input';
import { emailValidate } from '@/shared/helpers/email-validate';
import { passwordValidate } from '@/shared/helpers/password-validate';
import { signInSelector } from '@/shared/recoil/auth';

import { SignInButton, Title, Wrapper } from './styled';
import { SignInForm } from './types';

const SignIn: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();
  const { t } = useTranslation();
  const { signIn } = useRecoilValue(signInSelector({}));

  const handleConfirm = handleSubmit((variables) => {
    signIn(variables);
  });

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
