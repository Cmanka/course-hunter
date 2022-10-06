import { Text } from 'grommet';
import React, { FC, memo } from 'react';

import { ErrorHelperProps } from './types';

const ErrorHelper: FC<ErrorHelperProps> = memo(({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <Text size="small" color="status-error">
      {error.message}
    </Text>
  );
});

export { ErrorHelper };
