import { Box, Text } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  position: absolute;
  align-items: center;
  width: 100%;
  top: 5%;
  word-wrap: break-word;
`;

export const ToastWrapper = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px 24px;
  cursor: pointer;
  gap: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
  max-width: 195px;
  width: 100%;
`;

export const ToastText = styled(Text)`
  color: #000;
`;
