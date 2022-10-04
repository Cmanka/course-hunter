import { Layout } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const { Header } = Layout;

export const Wrapper = styled(Header)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const Routes = styled.div`
  display: flex;
  gap: 25px;
`;

export const Link = styled(RouterLink)``;
