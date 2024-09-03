import React from 'react'
import { Card, CardContent, Box, Typography, LinearProgress } from '@mui/material'
import Pie from '../../Charts/Pie'
import PieChartComponent from '../../Charts/Pie'
export default function ChartCArd1() {
    return (
    
        <Card sx={{width:'100%', height:'180px',boxShadow:'2px 2px 10px lightblue', marginLeft:{md:'4px', sm:'0px'}, marginTop:'4px'}} >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', padding:'10px'}}>
                <Typography component='p'>New Patient</Typography>
                <Box sx={{display:{md:'flex', sm:'block'}, justifyContent:'space-between'}} >
                    <Typography component='p'>126</Typography>
                     <PieChartComponent/>
                </Box>
                <LinearProgress variant="determinate" value={50} />
            </CardContent>
        </Card>
    
    )
}
