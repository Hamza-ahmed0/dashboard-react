import React from 'react';

import ChartCArd1 from './ChartComponent/ChartCArd1';
import Chartcard2 from './ChartComponent/Chartcard2';
import { Chart } from 'chart.js';
import '../DashboardComponents/Layout.css'
import PieChartComponent from '../Charts/Pie';
import BarIcon from './ChartIcon/BarIcon';
import FillLineIcon from './ChartIcon/FillLineIcon';
import LineIcon from './ChartIcon/LineIcon';


export default function Layout1() {
    return (
        <div className="layout1">
            <div className='container1'>
                <div className='side-container'>
                  <ChartCArd1 title="New Patient" chartIcon={<PieChartComponent/>} val="125" color="purple"/>
                  <ChartCArd1 title="Opd Patient" chartIcon={<BarIcon/>} val="218" color="pink"/>

                </div>
                <div className='side-container'>
                  <ChartCArd1 title="Today's Operation" chartIcon={<FillLineIcon/>} val="25" color="Green"/>
                  <ChartCArd1 title="Visitors" chartIcon={<LineIcon/>} val="2,497" color="orange"/>
                </div>
              
            </div>
            <div className='conatiner2'>
                <Chartcard2/>
            </div>
           
        </div>
    )
}
