import React from 'react';

import ChartCArd1 from './ChartComponent/ChartCArd1';
import Chartcard2 from './ChartComponent/Chartcard2';
import { Chart } from 'chart.js';
import '../DashboardComponents/Layout.css'

export default function Layout1() {
    return (
        <div className="layout1">
            <div className='containers'>
            <div className="small-container">
                <ChartCArd1 />
                <ChartCArd1 />
            </div>
            <div className="small-container">
                <ChartCArd1 />
                <ChartCArd1 />
            </div>
            </div>


            <div className="largecontainer">
                <Chartcard2/>
            </div>
           
        </div>
    )
}
