import React from 'react';
import styled from 'styled-components';

import One from './Cards/One';
import Two from './Cards/Two';
import Three from './Cards/Three';

function LearnMore() {
  return (
    <StyledLearnMore>
      <div id="more">
        <One />
        <Two />
        <Three />
      </div>
    </StyledLearnMore>
  );
}

const StyledLearnMore = styled.section`
  width: 100%;
  height: 690px;
  margin-top: 30px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.white} 0%,
    ${(props) => props.theme.background} 15%
  );
  position: relative;
  top: 750px;

  @media (max-width: 850px) {
    width: 100%;
    height: 100%;
  }
  #more {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 3rem;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

`;

export default LearnMore;
