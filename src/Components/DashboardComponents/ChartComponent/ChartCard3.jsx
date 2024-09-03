import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import SimpleLineChart from '../../Charts/SparkLine';
import { ArrowUpwardSharp } from '@mui/icons-material'


export default function ChartCard3() {
  return (
    <Box sx={{ 
      flex: 1, 
      padding: '15px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      height: '100%', 
      maxWidth: '100%' ,
      boxShadow:'2px 2px 10px lightblue'
    }}>
      <Card sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%' 
      }}>
        <Box sx={{ padding: '10px', marginTop:'5px',display:'flex', justifyContent:'space-evenly' }}>
          <Typography component="p">New Patient</Typography>
          <Typography variant='body2'><ArrowUpwardSharp/>25% High then Last month</Typography>

        </Box>
        <Box sx={{ padding: '10px', marginTop:'10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td>Overall Growth</td>
                <td>Monthly</td>
                <td>Day</td>
              </tr>
              <tr style={{fontWeight:'bold'}}>
                <td>35.80%</td>
                <td>45.20%</td>
                <td>5.50%</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box sx={{ padding: '10px', flex: 1 , marginTop:'10px' }}>
          <SimpleLineChart />
        </Box>
      </Card>
    </Box>
  );
}
