import React from 'react';
import styled from 'styled-components';

function ConfirmEmail() {
  return (
    <StyledLoginContainer>
      <div className="container"></div>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled.main`
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  .container {
    width: 65vw;
    height: 550px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    border-radius: 4px;
    background-color: ${(props) => props.theme.white};

    @media(max-width: 600px){
      width: 100%;
      height: 92vh;
      box-shadow: 0;
  }
`;

export default ConfirmEmail;
