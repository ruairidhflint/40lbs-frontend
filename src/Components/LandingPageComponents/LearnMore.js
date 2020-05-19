import React from 'react';
import styled from 'styled-components';

function LearnMore() {
  return (
    <StyledLearnMore>
      <div id="test"></div>
    </StyledLearnMore>
  );
}

const StyledLearnMore = styled.section`
  width: 100%;
  height: 670px;
  margin-top: 50px;
  background: linear-gradient(
    180deg,
    ${props => props.theme.white} 0%,
    ${props => props.theme.background} 15%
  );
  position: absolute;
  bottom: -80%;
`;

export default LearnMore;
