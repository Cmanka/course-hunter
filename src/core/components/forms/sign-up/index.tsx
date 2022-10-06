import { ErrorHelper } from 'core/components/error-helper';
import { PasswordInput } from 'core/components/password-input';
import { QueryKey } from 'core/constants/query-key';
import { emailValidate } from 'core/helpers/email-validate';
import { passwordValidate } from 'core/helpers/password-validate';
import { useQuery } from 'core/hooks/use-query';
import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const handleConfirm = handleSubmit((data) => {
    query(data);
  });

  return (
    <Wrapper>
      <TextInput
        {...register('username', { required: 'errorUsername' })}
        placeholder={t('username')}
      />
      <ErrorHelper error={errors.username} />
      <TextInput
        {...register('email', { validate: emailValidate })}
        placeholder={t('email')}
        type="email"
      />
      <ErrorHelper error={errors.email} />
      <TextInput
        {...register('firstname', { required: 'errorFirstname' })}
        placeholder={t('firstname')}
      />
      <ErrorHelper error={errors.firstname} />
      <TextInput
        {...register('lastname', { required: 'errorLastname' })}
        placeholder={t('lastname')}
      />
      <ErrorHelper error={errors.lastname} />
      <PasswordInput
        register={register('password', {
          validate: passwordValidate,
        })}
        placeholder={t('password')}
      />
      <ErrorHelper error={errors.password} />
      <ConfirmButton disabled={loading} primary onClick={handleConfirm}>
        {t('сonfirm')}
      </ConfirmButton>
    </Wrapper>
  );
});

export { SignUpForm };
