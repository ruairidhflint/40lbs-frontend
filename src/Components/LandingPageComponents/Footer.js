import React from './node_modules/react';
import styled from './node_modules/styled-components';

function Footer() {
  return <StyledFooter></StyledFooter>;
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.white};    
  position: absolute;
  bottom: -90%;
`;

export default Footer;
