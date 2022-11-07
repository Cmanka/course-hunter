import { Box, Text } from 'grommet';
import styled from 'styled-components';

import { Container } from '@/shared/styles/container';

export const Wrapper = styled(Box)``;

export const TopWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 28px;
  opacity: 0.8;
`;

export const SubTitle = styled(Text)`
  font-size: 24px;
  margin-top: 20px;
  opacity: 0.8;
`;

export const InputWrapper = styled(Box)`
  max-width: 520px;
  width: 100%;
  margin-top: 45px;
`;

export const CoursesWrapper = styled(Container)`
  margin-top: 45px;
  margin-bottom: 45px;
  & > div {
    margin-bottom: 20px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;
