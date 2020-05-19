import React from 'react';
import styled from 'styled-components';
import Minimal from '../../../Assets/minimal.svg';
import Graph from '../../../Assets/graph.svg';
import Target from '../../../Assets/target.svg';
import Share from '../../../Assets/share.svg';

function One() {
  return (
    <StyledCard>
      <div className="title">
        <h2>Features</h2>
      </div>
      <div className="main">
        <div className="feature">
          <div className="img-cont">
            <img src={Minimal} alt="thumbs up" />
          </div>
          <p>Sleak, minimal dashboard to focus on only what matters</p>
        </div>
        <div className="feature">
          <div className="img-cont">
            <img src={Graph} alt="thumbs up" />
          </div>
          <p>Monitor progress with detailed graphic display</p>
        </div>
        <div className="feature">
          <div className="img-cont">
            <img src={Target} alt="thumbs up" />
          </div>
          <p>Set multiple weekly, monthly or yearly goals </p>
        </div>
        <div className="feature">
          <div className="img-cont">
            <img src={Share} alt="thumbs up" />
          </div>
          <p>Share your progress privately or publicly</p>
        </div>
      </div>
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
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
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
    padding: 0 2.5rem 0.5rem 2.5rem;

    .feature {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 0.8rem;
        width: 83%;
        opacity: 0.7;

      }

      .img-cont {
        width: 2rem;

        img {
          max-width: 100%;
          height: auto;
          opacity: 1;
        }
      }
    }
  }

  .foot {
    width: 100%;
    height: 3%;
    opacity: 0.8;
    background-color: ${(props) => props.theme.yellow};
  }
`;

export default One;
