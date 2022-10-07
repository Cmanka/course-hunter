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
import { SignInForm, SignInResponse } from './types';

const SignInForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();
  const { loading, query } = useQuery<SignInForm, SignInResponse>({
    method: 'POST',
    query: QueryKey.Login,
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
      <ConfirmButton disabled={loading} primary onClick={handleConfirm}>
        {t('сonfirm')}
      </ConfirmButton>
    </Wrapper>
  );
});

export { SignInForm };
