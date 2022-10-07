import { ErrorHelper } from 'core/components/error-helper';
import { useSignInModal } from 'core/components/modals/sign-in';
import { PasswordInput } from 'core/components/password-input';
import { QueryKey } from 'core/constants/query-key';
import { emailValidate } from 'core/helpers/email-validate';
import { passwordValidate } from 'core/helpers/password-validate';
import { useLocalStorage } from 'core/hooks/use-local-storage';
import { useQuery } from 'core/hooks/use-query';
import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { ConfirmButton, Wrapper } from './styled';
import { SignUpForm, SignUpResponse } from './types';

const SignUpForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();
  const { loading, query } = useQuery<SignUpForm, SignUpResponse>({
    method: 'POST',
    query: QueryKey.Register,
  });
  const { t } = useTranslation();
  const { set } = useLocalStorage();
  const [, close] = useSignInModal();

  const handleConfirm = handleSubmit((data) => {
    query(data).then((user) => {
      if (user) {
        toast(t('welcome'), { type: 'success' });
        set('Token', user.accessToken);
        close();
      }
    });
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
