import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { emailValidate } from '@/core/helpers/email-validate';
import { passwordValidate } from '@/core/helpers/password-validate';

import { LanguageSelect } from '../../language-select';
import { PasswordInput } from '../../password-input';
import { UpdateButton, Wrapper } from './styled';
import { AccountFormHook, AccountFormProps } from './types';

const AccountForm: FC<AccountFormProps> = ({ user }) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<AccountFormHook>({
    defaultValues: { ...user },
  });

  const handleUpdate = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Wrapper>
      <TextInput
        {...register('firstname')}
        placeholder={t('firstname')}
        disabled
      />
      <TextInput
        {...register('lastname')}
        placeholder={t('lastname')}
        disabled
      />
      <TextInput
        {...register('email', { validate: emailValidate })}
        placeholder={t('email')}
        type="email"
        disabled
      />
      <TextInput {...register('username')} placeholder={t('username')} />
      <PasswordInput
        register={register('password', {
          validate: passwordValidate,
        })}
        placeholder={t('password')}
        disabled
      />
      <LanguageSelect />
      <UpdateButton primary onClick={handleUpdate}>{t`update`}</UpdateButton>
    </Wrapper>
  );
};

export { AccountForm };
