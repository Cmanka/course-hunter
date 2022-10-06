import { Text } from 'grommet';
import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorHelperProps } from './types';

const ErrorHelper: FC<ErrorHelperProps> = memo(({ error }) => {
  const { t } = useTranslation();

  if (!error) {
    return null;
  }

  return (
    <Text size="small" color="status-error">
      {t(error.message as string)}
    </Text>
  );
});

export { ErrorHelper };
