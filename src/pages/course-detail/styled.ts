import { Box, Text } from 'grommet';
import styled from 'styled-components';

import { Container } from '@/shared/styles/container';

export const Wrapper = styled(Container)`
  padding-top: 20px;
`;

export const AbsoluteBackground = styled(Box)`
  position: absolute;
  left: 0;
  top: 120px;
  background-color: #392e5c;
  height: 300px;
  width: 100%;
  z-index: -1;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Description = styled(Text)`
  font-size: 20px;
  font-weight: 400;
`;

export const Owner = styled(Text)`
  font-size: 18px;
  text-decoration: underline;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

export const TopWrapper = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Rate = styled(Text)`
  color: #dad8de;
  font-size: 20px;
`;

export const InfoWrapper = styled(Box)`
  background: #201c2b;
  box-shadow: 0 3px 21px rgb(117 117 117 / 20%);
  padding: 30px;
  flex-direction: row;
  gap: 30px;

  & > img {
    width: 270px;
    height: 160px;
  }
`;

export const InfoLabel = styled(Text)`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #dad8de;
`;

export const InfoValue = styled(Text)`
  font-size: 13px;
  color: #dad8de;
`;
