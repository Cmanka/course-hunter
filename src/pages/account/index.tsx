import { Avatar } from 'grommet';
import { User } from 'grommet-icons';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { AccountForm } from '@/core/components/forms/account';
import { Loader } from '@/core/components/loader';
import { userState } from '@/core/recoil/user';

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
