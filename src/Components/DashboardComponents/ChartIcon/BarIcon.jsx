import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarIcon = () => {
  // Define the data for the chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'], 
    datasets: [
      {
        label: '',
        data: [3, 5, 2, 8, 4], // Data points for each bar
        backgroundColor: 'lightblue', 
        borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  };

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        display: false, 
      },
    },
  };

  return (
    <div > 
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarIcon;
