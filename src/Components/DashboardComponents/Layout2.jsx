import React from 'react';
import { Box } from '@mui/material';
import ChartCard3 from './ChartComponent/ChartCard3';

export default function Layout2() {
  return (
    <div className="layout2">
        <div className="content-container">
            <ChartCard3/>
            <ChartCard3/>
            <ChartCard3/>
        </div>
    </div>
  );
}
