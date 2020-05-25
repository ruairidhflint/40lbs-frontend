import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithBase } from '../Helpers/axios';

import SmallCard from '../Components/DashboardComponents/SmallCard';
import Graph from '../Components/DashboardComponents/Graph';

function Dashboard(props) {
  const [data, setData] = useState({
    currentWeight: '',
    startWeight: '',
    weights: [],
    dates: [],
  });

  useEffect(() => {
    if (props.user) {
      axiosWithBase
        .get('weight/user/all', {
          headers: {
            authorization: localStorage.getItem('authorization'),
          },
        })
        .then((res) => {
          const { data } = res.data;

          const weights = data.weights.map((weight) => {
            return weight.current_weight;
          });

          const dates = data.weights.map((weight) => {
            return weight.date;
          });
          setData({
            currentWeight: data.currentWeight,
            startWeight: data.startWeight,
            weights,
            dates,
          });
        })
        .catch((err) => {
          localStorage.clear();
          props.setUser(null);
          props.history.push('/error');
        });
    }
  }, [props]);

  let differenceColor = '#373d3f';
  if (data.startWeight < data.currentWeight) {
    differenceColor = '#ff4560';
  } else if (data.startWeight > data.currentWeight) {
    differenceColor = '#02d8b7';
  }

  return (
    <StyledDashboardContainer>
      <div className="boxes">
        <SmallCard
          title={'Start Weight'}
          value={data.startWeight}
          color={'blue'}
        />
        <SmallCard
          title={'Current Weight'}
          value={data.currentWeight}
          color={'yellow'}
        />
        <SmallCard
          title={'Difference'}
          value={data.currentWeight - data.startWeight}
          color={'yellow'}
          differenceColor={differenceColor}
        />
      </div>
      <div className="graph">
        <Graph weights={data.weights} dates={data.dates} />
      </div>
      <TestButton />
    </StyledDashboardContainer>
  );
}

const StyledDashboardContainer = styled.main`
  width: 100vw;
  height: 92vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    justify-content: flex-start;
  }

  .boxes {
    height: 26%;
    width: 55%;
    margin: 0.7rem 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
      width: 90%;
    }

    @media (max-width: 350px) {
      width: 97%;
    }
  }

  .graph {
    height: 65%;
    width: 55%;
    margin: 0.7rem 0;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      width: 90%;
      padding: 3rem;
    }

    @media (max-width: 550px) {
      padding: 0;
    }



    @media (max-width: 550px) {
      height: auto;
    }

    @media (max-width: 350px) {
      width: 97%;
    }
  }
`;

function TestButton() {
  return <StyledTestButton></StyledTestButton>;
}

const StyledTestButton = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.theme.mainBlue};
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  bottom: 18px !important;
  right: 13px !important;
`;

export default Dashboard;
