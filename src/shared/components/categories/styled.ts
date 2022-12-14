import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/configuration/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Card = styled(Link)`
  display: flex;
  border-radius: 20px;
  padding: 7px 14px;
  background-color: ${theme.global?.colors?.brand};
  color: white;

  :hover {
    background-color: #7f00ac;
  }

  & > img {
    width: 26px;
    height: 26px;
    margin-right: 5px;
  }
`;
