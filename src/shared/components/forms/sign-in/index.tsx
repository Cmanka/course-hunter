import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { emailValidate } from '@/shared/helpers/email-validate';
import { passwordValidate } from '@/shared/helpers/password-validate';

import { ErrorHelper } from '../../error-helper';
import { PasswordInput } from '../../password-input';
import { ConfirmButton, Wrapper } from './styled';
import { Form } from './types';

const SignInForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>();
  const { t } = useTranslation();

  const handleConfirm = handleSubmit(() => {});

  return (
    <Wrapper>
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
      <ConfirmButton primary onClick={handleConfirm}>
        {t('сonfirm')}
      </ConfirmButton>
    </Wrapper>
  );
});

export { SignInForm };
