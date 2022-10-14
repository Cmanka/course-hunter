import { Box, Page, Text } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Page)`
  flex: 1;
  align-items: center;
  text-transform: uppercase;
  gap: 80px;
`;

export const CarouselWrapper = styled(Box)`
  width: 100%;
  height: 25vh;
  padding: 20px;
`;

export const CarouselContent = styled(Box)`
  padding-top: 45px;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Link = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
`;
