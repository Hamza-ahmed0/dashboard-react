import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EdgeLineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    datasets: [
      {
        label: 'Line with More Dots',
        data: [12, 19, 3, 5, 2, 3, 10], // Y-axis data
        borderColor: '#0000FF', // Blue color
        backgroundColor: '#2E8B57', // Transparent blue fill
        fill: false,
        tension: 0, // Smooth curve (wave-like) // Larger dots
        pointHoverRadius: 8,
        borderDash: [5, 5] 
      },
      {
        label: 'Line with Small Dots',
        data: [5, 9, 13, 15, 22, 17, 25], // Y-axis data
        borderColor: '#800080', // Purple color
        backgroundColor: '#FFA500', // Transparent purple fill
        fill: false,
        tension: 0, // Smooth curve (wave-like)
        pointRadius: 3, // Smaller dots
        pointHoverRadius: 5, // Smaller hover effect
      },
      {
        label: 'Mountain-like Line',
        data: [10, 15, 10, 15, 10, 15, 10], // Y-axis data
        borderColor: '#FF4500', // Orange-red color
        backgroundColor: '#0000FF', // Transparent fill
        fill: false,
        tension: 0, // No curve, sharp edges
        stepped: true, // Creates the mountain-like effect
        pointRadius: 0, // No dots
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
        display:false, // Position the legend at the top
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default EdgeLineChart;
