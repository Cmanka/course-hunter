import { Button, TextInput } from 'grommet';
import { FormView, Hide } from 'grommet-icons';
import React, { FC, memo, useState } from 'react';

import { Wrapper } from './styled';
import { PasswordInputProps } from './types';

const PasswordInput: FC<PasswordInputProps> = memo(
  ({ placeholder, register, disabled }) => {
    const [reveal, setReveal] = useState(false);

    const handleReveal = () => {
      setReveal((prev) => !prev);
    };

    return (
      <Wrapper border>
        <TextInput
          {...register}
          placeholder={placeholder}
          plain
          type={reveal ? 'text' : 'password'}
          disabled={disabled}
        />
        <Button
          icon={reveal ? <FormView /> : <Hide />}
          disabled={disabled}
          onClick={handleReveal}
        />
      </Wrapper>
    );
  }
);

export { PasswordInput };
