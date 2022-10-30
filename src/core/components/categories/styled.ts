import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Card = styled(Link)`
  display: flex;
  border-radius: 20px;
  padding: 7px 14px;
  background-color: #000;
  color: white;

  & > img {
    width: 26px;
    height: 26px;
    margin-right: 5px;
  }
`;
