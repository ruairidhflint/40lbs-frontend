import React from 'react';
import ReactApexCharts from 'react-apexcharts';

const settings = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: true,
    },
    foreColor: 'rgba(0,0,0,0)',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1000,
      dynamicAnimation: {
        enabled: true,
        speed: 1000,
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
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    lines: {
      show: true,
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
    show: true,
    showAlways: true,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    tickAmount: 6,
    min: 6,
    max: 6,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        // cssClass: 'apexcharts-yaxis-label',
      },
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
      axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      title: {
        text: 'hello world',
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#123345',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: '#b6b6b6',
          width: 1,
          dashArray: 0,
        },
      },
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },
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
    <div style={{ width: '90%', height: '90%' }}>
      <ReactApexCharts options={settings} series={data1} type="line" />
    </div>
  );
}

export default TestGraph;
