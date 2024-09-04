import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

const FillLineIcon = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Filled Line Chart',
        data: [1, 2, 3, 4, 5],
        fill: true, // Enable filling under the line
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // Light blue fill
        borderColor: 'blue',
        borderWidth: 2,
        tension:0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Hide tooltips
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
  };

  return (
    <div > {/* Adjust size as needed */}
      <Line data={data} options={options} />
    </div>
  );
};

export default FillLineIcon;
