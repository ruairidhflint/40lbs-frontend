import React, { useState, useEffect } from 'react';

import { axiosWithBase } from '../Helpers/axios';

function Dashboard() {
  const [data, setData] = useState({currentWeight:"", startWeight:"", weights: []});
  const fetchData = () => {
    axiosWithBase
      .get('weight/user/all')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ fontSize: '22vw' }}>dashboard</h1>
      <h2>Current Weight: {data.currentWeight}</h2>
      <h2>Start Weight: {data.startWeight}</h2>
      {data.weights.map((weight) => {
        return <p>{weight.current_weight}</p>;
      })}
    </>
  );
}

export default Dashboard;
