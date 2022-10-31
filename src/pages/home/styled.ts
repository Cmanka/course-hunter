import { Box, Text } from 'grommet';
import styled from 'styled-components';

import { Container } from '@/core/styles/container';

export const Wrapper = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;

  & > * {
    margin-bottom: 15px;
  }
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
`;

export const SubTitle = styled(Text)`
  max-width: 620px;
`;

export const CoursesWrapper = styled(Box)`
  & > div {
    margin-bottom: 20px;
  }
`;

export const CourseTitle = styled(Text)`
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;
