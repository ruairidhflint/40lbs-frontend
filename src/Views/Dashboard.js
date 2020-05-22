import React, { useState, useEffect } from 'react';

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
          console.log(err.message);
        });
    }
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
