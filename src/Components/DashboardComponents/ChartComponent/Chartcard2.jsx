import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import SimpleLineChart from '../../Charts/SparkLine'

export default function Chartcard2() {
  return (
    <Card  sx={{ height:'auto' ,boxShadow:'2px 2px 10px lightblue', padding:'10px', display:'flex', flexDirection:'column'}} >
       <Box sx={{padding:'10px', }}>
        <Typography>Hospital Survey</Typography>
       </Box>
       <Box sx={{ padding: '10px', flex:1, }}>
          <SimpleLineChart />
        </Box>
    </Card>
  )
}
