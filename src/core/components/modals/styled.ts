import { Box } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  padding-top: 15px;
  padding-bottom: 15px;
  & > div {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const Header = styled(Box)`
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  font-size: 24px;
  align-items: center;
  text-transform: uppercase;
`;
