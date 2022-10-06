import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';

const Footer: FC = () => {
  const { t } = useTranslation();

  return <Wrapper>{t`footerDesc`}</Wrapper>;
};

export { Footer };
