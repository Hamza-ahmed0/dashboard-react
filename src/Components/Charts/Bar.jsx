import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Bar 1', 'Bar 2', 'Bar 3'], 
    datasets: [
      {
        label: 'Blue',
        data: [30, 20, 25], 
        backgroundColor: '#0000FF', 
      },
      {
        label: 'Sea Green',
        data: [40, 50, 35], 
        backgroundColor: '#2E8B57', 
      },
      {
        label: 'Orange',
        data: [30, 30, 40], 
        backgroundColor: '#FFA500',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true, 
      },
      y: {
        stacked: true, 
        beginAtZero: true,
        max: 100, 
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          // @ts-ignore
          label: function(tooltipItem) {
            return tooltipItem.raw + '%'; // Display percentage in the tooltip
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
