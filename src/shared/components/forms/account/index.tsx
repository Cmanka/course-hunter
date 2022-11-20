import { TextInput } from 'grommet';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';

import { QueryKey } from '@/shared/constants/query-key';
import { parseUrl } from '@/shared/helpers/parse-url';
import { useMutation } from '@/shared/hooks/use-mutation';
import { User } from '@/shared/interfaces/user';
import { useToast } from '@/shared/recoil/toast/hook';
import { userState } from '@/shared/recoil/user';

import { LabelWrapper } from '../../label-wrapper';
import { LanguageSelect } from '../../language-select';
import { PasswordInput } from '../../password-input';
import { UpdateButton, Wrapper } from './styled';
import { AccountFormHook, AccountFormProps } from './types';

const AccountForm: FC<AccountFormProps> = ({ user }) => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<AccountFormHook, User>({
    defaultValues: { ...user },
  });
  const { mutate, loading } = useMutation<User>({
    method: 'PATCH',
    query: parseUrl(QueryKey.UserUpdate, user.id),
  });
  const setUser = useSetRecoilState(userState);

  const handleUpdate = handleSubmit((data) => {
    mutate({ ...data }).then((user) => {
      if (user) {
        setUser({ ...user });
        addToast({ text: 'userChanged', type: 'Success' });
      }
    });
  });

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
        disabled={!isDirty || loading}
        primary
        onClick={handleUpdate}
      >{t`update`}</UpdateButton>
    </Wrapper>
  );
};

export { AccountForm };
