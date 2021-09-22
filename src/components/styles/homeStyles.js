import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const HomeHeader = styled.h1`
  color: #006644;
  font-size: ${props => props.large ? "40px" : "12px"};
  background: #19FFB2;
`

export const HomePara = styled.p`
  color: #006644;
  font-size: 14px;
`

export const MainBtn = styled(Button)`
  color: white !important;
`