import { Heading } from 'grommet';
import { Home as HomeIcon } from 'grommet-icons';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Heading textAlign="center">{t('homeDesc')}</Heading>
      <HomeIcon size="88px" color="#000" />
    </Wrapper>
  );
};

export { Home };
