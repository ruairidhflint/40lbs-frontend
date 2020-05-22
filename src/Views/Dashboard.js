import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithBase } from '../Helpers/axios';

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
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="graph"></div>
    </StyledDashboardContainer>
  );
}

const StyledDashboardContainer = styled.main`
  width: 100vw;
  height: 92vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;

  .boxes {
    height: 90%;
    width: 18%;
    margin: 0 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .box {
      width: 100%;
      height: 30%;
      box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
      background-color: ${(props) => props.theme.white};
    }
  }

  .graph {
    height: 90%;
    width: 45%;
    margin: 0 1.1rem;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  }
`;

export default Dashboard;
