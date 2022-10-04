import { Layout } from 'antd';
import styled from 'styled-components';

export const AppLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > main {
    flex: 1;
  }
`;
