import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';

const NotFound: FC = () => {
  const { t } = useTranslation();

  return <Wrapper>{t`notFounded`}</Wrapper>;
};

export { NotFound };
