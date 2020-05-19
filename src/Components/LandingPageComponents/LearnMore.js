import React from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard';

function LearnMore() {
  return (
    <StyledLearnMore>
      <div id="more">
        <AboutCard />
        <AboutCard />
        <AboutCard />
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
`;

export default LearnMore;
