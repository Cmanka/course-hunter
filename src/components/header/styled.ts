import { Avatar as UIAvatar, Header, Image } from 'grommet';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/configuration/theme';
import { Container } from '@/shared/styles/container';

export const OuterWrapper = styled(Header)`
  background-color: ${theme.global?.colors?.['background-contrast']};
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

export const Logo = styled(Image)`
  cursor: pointer;
`;
