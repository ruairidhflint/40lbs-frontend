import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithBase } from '../Helpers/axios';

import SmallCard from '../Components/DashboardComponents/SmallCard';
import TestGraph2 from '../Components/testgraph2';

function Dashboard(props) {
  const [data, setData] = useState({
    currentWeight: '',
    startWeight: '',
    weights: [],
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
          setData(res.data.data);
        })
        .catch((err) => {
          localStorage.clear();
          props.setUser(null);
          props.history.push('/error');
        });
    }
  }, [props]);

  console.log(data);

  return (
    <StyledDashboardContainer>
      <div className="boxes">
        <SmallCard value={data.currentWeight} color={'blue'} />
        <SmallCard value={data.startWeight} color={'green'} />
        <SmallCard
          value={data.startWeight - data.currentWeight}
          color={'yellow'}
        />
      </div>
      <div className="graph">
        <TestGraph2 />
      </div>
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

  .boxes {
    height: 26%;
    width: 55%;
    margin: 0.7rem 0 ;
    display: flex;
    justify-content: space-between;
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
  }
`;

export default Dashboard;
