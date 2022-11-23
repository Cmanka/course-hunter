import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';

export const Title = styled(Text)`
  margin-bottom: 52px;
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Wrapper = styled(Box)`
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & > div {
    margin-top: 35px;
    width: 100%;
  }
`;

export const SignInButton = styled(Button)({
  marginTop: 50,
  width: '60%',
});
