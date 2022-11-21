import { TextInput } from 'grommet';
import React, { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';

import { AppQuery } from '@/shared/constants/app-query';
import { emailValidate } from '@/shared/helpers/email-validate';
import { passwordValidate } from '@/shared/helpers/password-validate';
import { useLocalStorage } from '@/shared/hooks/use-local-storage';
import { useMutation } from '@/shared/hooks/use-mutation';
import { useToast } from '@/shared/recoil/toast/hook';
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
  const { loading, mutate } = useMutation<SignUpResponse, Form>({
    method: 'POST',
    query: AppQuery.Register,
  });
  const { t } = useTranslation();
  const { set } = useLocalStorage();
  const [, close] = useSignUpModal();
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const { addToast } = useToast();

  const handleConfirm = handleSubmit((data) => {
    mutate(data).then((response) => {
      if (response) {
        addToast({ text: 'welcome', type: 'Success' });
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
