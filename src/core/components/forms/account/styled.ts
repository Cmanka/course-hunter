import { Box, Button } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  max-width: 540px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  & > div {
    height: 45px;
    width: 100%;
  }
`;

export const UpdateButton = styled(Button)({
  maxWidth: 230,
  width: '100%',
  borderRadius: 5,
  letterSpacing: 2,
  fontSize: 16,
  textAlign: 'center',
  padding: 15,
  textTransform: 'uppercase',
  transition: '0.25s',

  '&:hover': {
    backgroundColor: '#333',
  },
  '&:active': {
    backgroundColor: '#000',
  },
});
