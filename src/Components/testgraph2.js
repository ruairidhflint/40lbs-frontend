import React from 'react';
import ReactApexCharts from 'react-apexcharts';

import Spinner from '../Components/Reusables/Spinner';

function TestGraph2(props) {
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
      <div style={{ width: '82%', marginTop: '1rem' }}>
        <ReactApexCharts options={options} series={series} type="line" />
      </div>
    );
  }
  else {
    return (
      <Spinner />
    )
  }
}

export default TestGraph2;
