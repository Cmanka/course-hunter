import { Heading } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import React, { FC } from 'react';

import { Wrapper } from './styled';

const Home: FC = () => {
  return (
    <Wrapper>
      <Heading>Welcome to the home page</Heading>
      <HomeIcon size="88px" color="#000" />
    </Wrapper>
  );
};

export { Home };
