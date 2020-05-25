import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import Spinner from '../Reusables/Spinner';

function SmallCard(props) {
  if (props.value) {
    return (
      <StyledSmallCard
        color={
          props.title === 'Difference' ? props.differenceColor : props.color
        }
      >
        <div
          className="text"
          style={{
            color: props.title === 'Difference' ? props.differenceColor : null,
          }}
        >
          <h3>
            <CountUp start={0} duration={1.75} end={props.value} />
          </h3>
          <span>lbs</span>
        </div>
        <h4>{props.title}</h4>
      </StyledSmallCard>
    );
  } else {
    return (
      <StyledSmallCard
        color={
          props.title === 'Difference' ? props.differenceColor : props.color
        }
      >
        <Spinner />
      </StyledSmallCard>
    );
  }
}

const StyledSmallCard = styled.section`
    width: 30%;
    height: 100%;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 6px solid ${(props) =>
      props.color === 'blue'
        ? props.theme.mainBlue
        : props.color === 'yellow'
        ? props.theme.yellow
        : props.color};

    .text {
        display: flex;
        align-items: baseline;

        h3 {
          font-size: 3rem;
          display: inline-block;

          @media(max-width: 980px){
            font-size: 2.5rem;
          }

          @media(max-width: 980px){
            font-size: 2rem;
          }

          @media(max-width: 370px){
            font-size: 1.7rem;
          }
        }
    }


    h4 {
        opacity: 0.6;
        font-size: 1rem;
        margin-top: 0.7rem;

        @media(max-width: 980px){
          font-size: 0.8rem;
        }

        @media(max-width: 370px){
          font-size: 0.7rem;
        }
    }
  }
`;

export default SmallCard;
