import { Avatar as UIAvatar, Header } from 'grommet';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '@/core/styles/container';

export const OuterWrapper = styled(Header)`
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const InnerWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
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

export const Avatar = styled(UIAvatar)`
  cursor: pointer;
`;
