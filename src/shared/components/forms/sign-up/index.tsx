import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import { QueryKey } from '@/shared/constants/query-key';
import { emailValidate } from '@/shared/helpers/email-validate';
import { passwordValidate } from '@/shared/helpers/password-validate';
import { useLocalStorage } from '@/shared/hooks/use-local-storage';
import { useQuery } from '@/shared/hooks/use-query';
import { tokenState } from '@/shared/recoil/token';
import { userState } from '@/shared/recoil/user';

import { ErrorHelper } from '../../error-helper';
import { useSignUpModal } from '../../modals/sign-up';
import { PasswordInput } from '../../password-input';
import { ConfirmButton, Wrapper } from './styled';
import { Form, SignUpResponse } from './types';

const SignUpForm: FC = memo(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>();
  const { loading, query } = useQuery<SignUpResponse, Form>({
    method: 'POST',
    query: QueryKey.Register,
    isQuery: false,
  });
  const { t } = useTranslation();
  const { set } = useLocalStorage();
  const [, close] = useSignUpModal();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);

  const handleConfirm = handleSubmit((data) => {
    query(data).then((response) => {
      if (response) {
        toast(t('welcome'), { type: 'success' });
        set('Token', response.accessToken);
        setToken(response.accessToken);
        setUser(response.user);
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
