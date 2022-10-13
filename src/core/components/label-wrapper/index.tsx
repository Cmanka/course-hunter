import { Text } from 'grommet';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';
import { LabelWrapperProps } from './types';

const LabelWrapper: FC<LabelWrapperProps> = ({ label, children }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text size="small">{t(label)}</Text>
      {children}
    </Wrapper>
  );
};

export { LabelWrapper };
