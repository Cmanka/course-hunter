import { Footer } from 'grommet/components/Footer';
import styled from 'styled-components';

import { theme } from '@/configuration/theme';

export const Wrapper = styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.global?.colors?.brand};
  padding: 60px 0;
`;
