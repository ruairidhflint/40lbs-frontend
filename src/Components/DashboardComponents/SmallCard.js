import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

function SmallCard(props) {
  return (
    <StyledSmallCard color={props.color}>
      <h3>
        <CountUp duration={1.75} end={props.value} />
      </h3>
    </StyledSmallCard>
  );
}

const StyledSmallCard = styled.section`
    width: 30%;
    height: 100%;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    background-color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 6px solid ${(props) =>
      props.color === 'blue'
        ? props.theme.mainBlue
        : props.color === 'green'
        ? props.theme.green
        : props.theme.yellow};

    h3 {
      font-size: 2.7rem;
    }
  }
`;

export default SmallCard;
