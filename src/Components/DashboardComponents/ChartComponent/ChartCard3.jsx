import React from 'react';
import { Box, Card, Typography, CardContent } from '@mui/material';
import SimpleLineChart from '../../Charts/SparkLine';
import { ArrowUpwardSharp } from '@mui/icons-material'


export default function ChartCard3({title, chart}) {
  return (
      <Card sx={{ 
        flex: 1, 
        padding: '15px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100%', 
        Width: '80%' ,
        gap:'10px',
        marginLeft:'10px',
        boxShadow: '4px 4px 10px grey'
                
        }}>
          <CardContent>

          
        <Box sx={{ padding: '10px', marginTop:'5px',display:'flex', justifyContent:'space-between', alignItem:'center' }}>
          <Typography component="p">{title}</Typography>
          <Typography variant='body2'><ArrowUpwardSharp/>25% High then Last month</Typography>

        </Box>
        <Box sx={{ padding: '10px', marginTop:'10px' ,width:{xs:'40%', md:'80%'}}}>
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
          {chart}
        </Box>
        </CardContent>
      </Card>
  );
}
