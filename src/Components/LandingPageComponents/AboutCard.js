import React from 'react';
import styled from 'styled-components';

function AboutCard(props) {
  return (
  <StyledCard>  
      <div className="title"></div>
      <div className="main"></div>
      <div style={{backgroundColor: props.bg}}className="foot"></div>
  </StyledCard>
    );
}

const StyledCard = styled.div`
  width: 30%;
  height: 400px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

    .title {
        width: 100%;
        height: 17%;
    }

    .main {
        width: 100%;
        height: 80%;
        background-color: ${props => props.theme.backgroundSecondary};
    }

    .foot {
        width: 100%;
        height: 3%;
    }


`;

export default AboutCard;
