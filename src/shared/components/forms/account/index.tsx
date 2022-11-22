import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { User } from '@/shared/interfaces/app/user';

import { LabelWrapper } from '../../label-wrapper';
import { LanguageSelect } from '../../language-select';
import { PasswordInput } from '../../password-input';
import { UpdateButton, Wrapper } from './styled';
import { AccountFormHook, AccountFormProps } from './types';

const AccountForm: FC<AccountFormProps> = ({ user }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<AccountFormHook, User>({
    defaultValues: { ...user },
  });

  const handleUpdate = handleSubmit(() => {});

  return (
    <Wrapper>
      <LabelWrapper label="accountType">
        <TextInput
          {...register('account.type')}
          placeholder={t('account')}
          disabled
        />
      </LabelWrapper>
      <LabelWrapper label="firstname">
        <TextInput
          {...register('firstname')}
          placeholder={t('firstname')}
          disabled
        />
      </LabelWrapper>
      <LabelWrapper label="lastname">
        <TextInput
          {...register('lastname')}
          placeholder={t('lastname')}
          disabled
        />
      </LabelWrapper>
      <LabelWrapper label="email">
        <TextInput
          {...register('email')}
          placeholder={t('email')}
          type="email"
          disabled
        />
      </LabelWrapper>
      <LabelWrapper label="username">
        <TextInput {...register('username')} placeholder={t('username')} />
      </LabelWrapper>
      <LabelWrapper label="changePassword">
        <PasswordInput
          register={register('password')}
          placeholder={t('password')}
          disabled
        />
      </LabelWrapper>
      <LanguageSelect />
      <UpdateButton
        disabled={!isDirty}
        primary
        onClick={handleUpdate}
      >{t`update`}</UpdateButton>
    </Wrapper>
  );
};

export { AccountForm };
