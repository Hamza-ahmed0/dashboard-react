import React from 'react';
import { Box } from '@mui/material';
import ChartCard3 from './ChartComponent/ChartCard3';
import BarChart from '../Charts/Bar';
import WaveLineChart from '../Charts/Wave';
import EdgeLineChart from '../Charts/EdgeLine';

export default function Layout2() {
  return (
    <div className="layout2">
        <div className="content-container">
            <ChartCard3 title="New Patient" chart={<WaveLineChart/>}/>
            <ChartCard3 title="Heart Surgeries" chart={<BarChart/>}/>
            <ChartCard3 title="Medical Treatment" chart={<EdgeLineChart/>}/> 
        </div>
    </div>
  );
}
