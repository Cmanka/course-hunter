import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import { QueryKey } from '@/core/constants/query-key';
import { parseUrl } from '@/core/helpers/parse-url';
import { useQuery } from '@/core/hooks/use-query';
import { User } from '@/core/interfaces/user';
import { userState } from '@/core/recoil/user';

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
  const { query, loading } = useQuery<User>({
    method: 'PATCH',
    query: parseUrl(QueryKey.UserUpdate, user.id),
  });
  const setUser = useSetRecoilState(userState);

  const handleUpdate = handleSubmit((data) => {
    query({ ...data }).then((user) => {
      if (user) {
        setUser({ ...user });
      }

      toast(t('userChanged'), { type: 'success' });
    });
  });

  return (
    <Wrapper>
      <TextInput
        {...register('account.type')}
        placeholder={t('account')}
        disabled
      />
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
        {...register('email')}
        placeholder={t('email')}
        type="email"
        disabled
      />
      <TextInput {...register('username')} placeholder={t('username')} />
      <PasswordInput
        register={register('password')}
        placeholder={t('password')}
        disabled
      />
      <LanguageSelect />
      <UpdateButton
        disabled={!isDirty || loading}
        primary
        onClick={handleUpdate}
      >{t`update`}</UpdateButton>
    </Wrapper>
  );
};

export { AccountForm };
