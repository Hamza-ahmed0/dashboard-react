import React from 'react'
import { Box, Card, Typography, CardContent } from '@mui/material'
import SimpleLineChart from '../../Charts/SparkLine'

export default function Chartcard2() {
  return (
    <Card sx={{ width: '90%', height: '280px', boxShadow: '4px 4px 10px grey' ,padding:'5px'}}>
      <CardContent sx={{width:'90%', height:'100%'}}>
        <Box sx={{ padding: '5px', }}>
          <Typography sx={{fontWeight:'bold', mb:'10px', fontFamily:'arial'}}>Hospital Survey</Typography>
        </Box>
        <Box sx={{ height:'auto', width:'80%', mr:'10%' }}>
          <SimpleLineChart />
        </Box>

      </CardContent>

    </Card>
  )
}
