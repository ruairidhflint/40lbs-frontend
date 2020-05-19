import React from './node_modules/react';
import ReactApexCharts from 'react-apexcharts';

const settings = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    foreColor: 'rgba(0,0,0,0)',
    animations: {
      enabled: false,
      easing: 'easeinout',
      speed: 1000,
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  colors: ['#0390fb'],
  // annotations: {
  //   yaxis: [
  //     {
  //       y: 160,
  //       borderColor: '#00E396',
  //       label: {
  //         borderColor: '#00E396',
  //         style: {
  //           color: '#fff',
  //           background: '#00E396',
  //         },
  //         text: 'Goal',
  //       },
  //     },
  //   ],
  // },
 
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: '',
    align: 'left',
  },
  grid: {
    row: {
      show: false,
      colors: ['#ffffff', 'transparent'],
      opacity: 0,
    },
  },
  xaxis: {
    lines: {
      show: false
    },
    categories: [
      '22-03-2019',
      '23-03-2019',
      '24-03-2019',
      '25-03-2019',
      '26-03-2019',
      '27-03-2019',
      '28-03-2019',
      '29-03-2019',
      '30-03-2019',
      '31-03-2019',
      '01-04-2019',
      '02-04-2019',
      '03-04-2019',
      '04-04-2019',
      '05-04-2019',
      '06-04-2019',
      '07-04-2019',
      '08-04-2019',
      '09-04-2019',
      '10-04-2019',
      '11-04-2019',
    ],
  },
  yaxis: {
    min: 150,
    max: 210,
    lines: {
      show: false,
    }
  },
};

const data1 = [
  {
    name: 'weight',
    data: [
      205,
      200,
      199,
      199,
      197,
      195,
      191,
      188,
      187,
      187,
      187,
      186,
      184,
      180,
      179,
      178,
      174,
      173,
      173,
      171,
      170,
    ],
  },
];

function TestGraph() {
  return (
    <div style={{ width: '60%', marginTop: '3rem'  }}>
      <ReactApexCharts options={settings} series={data1} type="line" />;
    </div>
  );
}

export default TestGraph;
