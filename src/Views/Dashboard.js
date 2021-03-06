import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithBase } from '../Helpers/axios';

import SmallCard from '../Components/DashboardComponents/SmallCard';
import Graph from '../Components/DashboardComponents/Graph';
import AddButton from '../Components/DashboardComponents/AddButton';
import AddModal from '../Components/DashboardComponents/AddModal';

function Dashboard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSpinning, setModalSpinning] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [data, setData] = useState({
    currentWeight: '',
    startWeight: '',
    weights: [],
    dates: [],
  });

  const addNewWeight = (newWeight) => {
    setModalSpinning(true);
    setModalError(false);
    const newData = {
      date: new Date().toLocaleDateString(),
      current_weight: newWeight,
      user_id: props.user.id,
    };
    axiosWithBase
      .post('weight/new', newData, {
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      })
      .then(() => {
        setModalSpinning(false);
        setModalVisible(false);
        setData({
          ...data,
          currentWeight: newWeight,
          weights: [...data.weights, newWeight],
          dates: [...data.dates, new Date().toLocaleDateString()],
        });
      })
      .catch(() => {
        setModalSpinning(false);
        setModalError(true);
      });
  };

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
        .catch(() => {
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
    <>
      <AddModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        addNewWeight={addNewWeight}
        modalSpinning={modalSpinning}
        modalError={modalError}
        setModalError={setModalError}
      />
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
        <AddButton setModalVisible={setModalVisible} />
      </StyledDashboardContainer>
    </>
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
    border-radius: 3px;
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

export default Dashboard;
