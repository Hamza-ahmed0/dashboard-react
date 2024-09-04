import React from 'react';
import { Box, Typography } from '@mui/material';
import { Home, ChevronRight } from '@mui/icons-material';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';

export default function Dashboardscreen() {
  return (
    <Box sx={{ 
      padding: '10px 20px', 
      height: '100vh', 
      // display: 'flex', 
      // flexDirection: 'column',  
      mb:'20px'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '10px' 
      }}>
        <Typography variant='h6' sx={{ fontFamily: 'arial', color: 'black' }}>
          Dashboard
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          padding: '0px 10px', 
          color: 'grey', 
          fontSize: 'medium', 
          backgroundColor: 'lightgray', 
          borderRadius: '40px' 
        }}>
          <Home />
          <Typography variant='body2' sx={{ color: 'grey' }}>Home</Typography>
          <ChevronRight />
          <Typography variant='body2' sx={{ color: 'black' }}>Dashboard</Typography>
        </Box>
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1 ,
        minHeight:'70vh',
        justifyContent:'space-between',
        pb:'20px'
      }}>
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'stretch', 
          marginBottom: '10px' ,
          
        }}>
          <Layout1 sx={{flex:1}} />
        </Box>
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'stretch', 
          marginBottom: '10px',
          height:'30%'
        }}>
          <Layout2 sx={{ flex: 1 }} />
        </Box>
        <Box sx={{ 
          flex: 2, 
          display: 'flex', 
          alignItems: 'stretch' ,
          marginTop:'10px',
          height:'40%'
        }}>
          <Layout3 sx={{ flex: 1 }} />
        </Box>
      </Box>
    </Box>
  );
}
