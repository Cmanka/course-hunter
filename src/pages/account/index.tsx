import { Avatar } from 'grommet';
import { User } from 'grommet-icons';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { AccountForm } from '@/shared/components/forms/account';
import { Loader } from '@/shared/components/loader';
import { userState } from '@/shared/recoil/user';

import { MainSection, TopSection, Wrapper } from './styled';

const Account: FC = () => {
  const user = useRecoilValue(userState);

  if (!user) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <TopSection>
        <Avatar size="large" background="brand">
          <User />
        </Avatar>
      </TopSection>
      <MainSection>
        <AccountForm user={user} />
      </MainSection>
    </Wrapper>
  );
};

export { Account };
