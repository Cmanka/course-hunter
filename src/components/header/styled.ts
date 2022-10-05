import { Header } from 'grommet/components/Header';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Header)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const RoutesWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Link = styled(RouterLink)``;
