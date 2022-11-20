import { Box, Text } from 'grommet';
import styled from 'styled-components';

export const ToastWrapper = styled(Box)`
  position: absolute;
  top: 2%;
  left: 50%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px 24px;
  cursor: pointer;
  gap: 20px;
  border-radius: 5px;
`;

export const ToastText = styled(Text)`
  color: #000;
`;
