import React from 'react';
import styled from 'styled-components';

function Two() {
  return (
    <StyledCard>
      <div className="title">
          <h2>About</h2>
      </div>
      <div className="main"></div>
      <div className="foot"></div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 29%;
  height: 400px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transform: scale(1.05);

  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.06);
    transition: transform 0.3s ease-in-out;
  }


  .title {
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.mainText};

        h2 {
            font-size: 1.3rem;
      opacity: 0.8;

        }
  }

  .main {
    width: 100%;
    height: 80%;
    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  .foot {
    width: 100%;
    height: 3%;
    opacity: 0.8;
    background-color: ${(props) => props.theme.green};
    border-radius: 0 0 4px 4px;

  }
`;

export default Two;
