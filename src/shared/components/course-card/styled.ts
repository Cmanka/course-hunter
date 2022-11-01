import { Box } from 'grommet';
import styled from 'styled-components';

import { theme } from '@/configuration/theme';

export const Wrapper = styled(Box)`
  flex-direction: row;
  background-color: ${theme.global?.colors?.brand};
  height: 220px;

  & > img {
    max-width: 360px;
    width: 100%;
    height: 100%;
  }
`;

export const ProductInfo = styled(Box)`
  padding: 20px;
  justify-content: space-between;
`;
