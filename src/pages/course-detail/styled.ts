import { Box, Text } from 'grommet';
import styled from 'styled-components';

import { Container } from '@/shared/styles/container';

export const Wrapper = styled(Container)`
  padding-top: 20px;
`;

export const AbsoluteBackground = styled(Box)`
  position: absolute;
  left: 0;
  top: 120px;
  background-color: #392e5c;
  height: 300px;
  width: 100%;
  z-index: -1;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Description = styled(Text)`
  font-size: 20px;
  font-weight: 400;
`;
