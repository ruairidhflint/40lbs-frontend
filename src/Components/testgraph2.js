import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';

const series = [
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
    curve: 'straight',
  },
  title: {
    text: 'Progress',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
};

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
      curve: 'straight',
    },
    title: {
      text: 'Progress',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: props.dates,
    },
    yaxis: {
      min: Math.min([...props.weights]) - 20,
      max: Math.max([...props.weights]) + 20,
    },
  };
  return (
    <div style={{ width: '82%', marginTop: '1rem' }}>
      <ReactApexCharts options={options} series={series} type="line" />
    </div>
  );
}

export default TestGraph2;
