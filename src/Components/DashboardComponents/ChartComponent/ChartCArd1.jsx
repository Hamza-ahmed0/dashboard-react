import React from 'react'
import { Card, CardContent, Box, Typography, LinearProgress } from '@mui/material'
import Pie from '../../Charts/Pie'
import PieChartComponent from '../../Charts/Pie'
export default function ChartCArd1({title , chartIcon, val, color}) {
    return (

        <Card sx={{ width: '90%', height: {md:'140px', sm:'auto'}, boxShadow: '4px 4px 10px grey' , marginTop:'5px'}} >
            <CardContent sx={{ width: '90%', padding: '5px' }}>
                <Typography component='p' sx={{ fontWeight: 'bold', color: 'black' }}>{title}</Typography>
                <Box sx={{ display: { md: 'flex', sm: 'block' }, justifyContent: 'space-between', alignItems: 'center', padding: '10px', mt: '2px' }} >
                    <Typography component='p' sx={{ color: 'green', fontWeight: 'bold' }}>{val}</Typography>
                    <Box sx={{ width: '70px', height: '70px' }}>
                        {chartIcon}
                    </Box>

                </Box>
                <Box>
                    <LinearProgress variant="determinate" value={50} sx={{
                         borderRadius: '20px', bgcolor: 'lightgrey', 
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: color, // Color of the progress indicator
                        },
                    }} />
                </Box>

            </CardContent>
        </Card>

    )
}
