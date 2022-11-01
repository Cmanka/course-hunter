import { Box } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  & > * {
    height: 100%;
    padding: 11px;
  }
`;
