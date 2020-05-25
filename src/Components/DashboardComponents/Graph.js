import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import styled from 'styled-components';

import Spinner from '../Reusables/Spinner';

function Graph(props) {
  const series = [
    {
      name: 'Weights',
      data: props.weights,
    },
  ];
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Progress',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#fafbfd', 'transparent'], // takes an array which will be repeated on columns
        opacity: 1,
      },
    },
    xaxis: {
      categories: props.dates,
    },
    yaxis: {
      tickAmount: props.weights.length + 3,
      min: Math.min(...props.weights.map((num) => Math.round(num))) - 10,
      max: Math.max(...props.weights.map((num) => Math.round(num))) + 10,
      floating: false,
    },
  };
  if (props.weights.length) {
    return (
      <StyledGraphContainer>
        <ReactApexCharts options={options} series={series} type="line" />
      </StyledGraphContainer>
    );
  } else {
    return <Spinner />;
  }
}

const StyledGraphContainer = styled.div`
  width: 82%;
  margin-top: 1rem;

  @media(max-width: 850px){
    width: 90%;
  }

  @media(max-width: 390px){
    width: 99%;
  }
`;

export default Graph;
