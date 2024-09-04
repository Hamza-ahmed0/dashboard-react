import React from 'react';
import { Line } from 'react-chartjs-2';

const WaveLineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    datasets: [
      {
        label: 'Blue Line',
        data: [12, 19, 3, 5, 2, 3, 10], // Y-axis data for the blue line
        borderColor: '#0000FF', // Blue color
        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Transparent blue fill
        fill: true, // Fill under the line
        tension: 0.4, // Curve the line to create a wave effect
      },
      {
        label: 'Purple Line',
        data: [5, 9, 13, 15, 22, 17, 25], // Y-axis data for the purple line
        borderColor: '#800080', // Purple color
        backgroundColor: 'rgba(128, 0, 128, 0.1)', // Transparent purple fill
        fill: true, // Fill under the line
        tension: 0.4, // Curve the line to create a wave effect
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis from 0
      },
    },
    plugins: {
      legend: {
        display:false,
         // Position the legend at the top
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WaveLineChart;
