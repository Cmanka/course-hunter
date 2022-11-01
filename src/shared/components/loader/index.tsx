import { Spinner } from 'grommet';
import React, { FC } from 'react';

import { Wrapper } from './styled';

const Loader: FC = () => {
  return (
    <Wrapper>
      <Spinner color="#fff" />
    </Wrapper>
  );
};

export { Loader };
