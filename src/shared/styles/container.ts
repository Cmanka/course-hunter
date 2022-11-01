import { Box } from 'grommet';
import styled from 'styled-components';

const Container = styled(Box)`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export { Container };
