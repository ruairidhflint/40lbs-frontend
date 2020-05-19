import React from 'react';
import styled from 'styled-components';

function Three() {
  return (
    <StyledCard>
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="main">
        <p>
          ‟Simple to use, aesthetically pleasing with no nonsense features.”
          <span>- Ryan</span>
        </p>
        <p>
          ‟I needed to gain 10lbs for a competition at a very specific rate; 40
          pounds allowed me to keep visual track of my daily progress - far
          superior to pen and paper.” <span>- Thomas M</span>
        </p>
        <p>
          ‟Holding myself accountable my sharing weekly progress has been a
          great motivator to lose the extra lockdown pounds!”{' '}
          <span>- Sarah</span>
        </p>
      </div>
      <div className="foot"></div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 29%;
  height: 450px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 860px) {
    height: 600px;
  }

  .title {
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.mainText};

    h2 {
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }

  .main {
    width: 100%;
    height: 80%;
    background-color: ${(props) => props.theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    p {
      opacity: 0.75;
      width: 80%;
      font-size: 0.85rem;
      line-height: 1.4;
      text-align: center;
      font-style: italic;

      span {
        color: ${(props) => props.theme.mainBlue};
        font-size: 0.95rem;
        display: block;
      }
    }
  }

  .foot {
    width: 100%;
    height: 3%;
    opacity: 0.8;
    background-color: ${(props) => props.theme.mainBlue};
    border-radius: 0 0 4px 4px;
  }
`;

export default Three;
