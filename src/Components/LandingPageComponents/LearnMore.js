import React from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard';

function LearnMore() {
  return (
    <StyledLearnMore>
      <div id="more">
        <AboutCard bg={'#02d8b7'}></AboutCard>
        <AboutCard bg={'#0390fb'}></AboutCard>
        <AboutCard bg={'#ffb019'}></AboutCard>
      </div>
    </StyledLearnMore>
  );
}

const StyledLearnMore = styled.section`
  width: 100%;
  height: 670px;
  margin-top: 50px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.white} 0%,
    ${(props) => props.theme.background} 15%
  );
  position: absolute;
  bottom: -80%;
  #more {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 3rem;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5rem;
  }
`;

export default LearnMore;
