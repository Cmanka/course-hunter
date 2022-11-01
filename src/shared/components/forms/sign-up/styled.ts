import { Box, Button } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  & > div {
    margin-top: 35px;
  }
`;

export const ConfirmButton = styled(Button)({
  borderRadius: 5,
  letterSpacing: 2,
  fontSize: 16,
  textAlign: 'center',
  padding: 15,
  textTransform: 'uppercase',
  transition: '0.25s',
  marginTop: 25,

  '&:hover': {
    backgroundColor: '#333',
  },
  '&:active': {
    backgroundColor: '#000',
  },
});
