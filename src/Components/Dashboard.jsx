import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Dashboardscreen from './DashboardComponents/Dashboardscreen'
import { useState } from 'react'

export default function Dashboard() {
  const [isSidebaropen, setSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setSideBarOpen(!isSidebaropen)
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        backgroundColor: 'rgba(135, 206, 250, 0.3)', 
        overflow:'auto',
    
      }}
    >
      <Box 
        sx={{ 
          display: isSidebaropen ? 'block' : 'none', 
          width: { md: isSidebaropen ? '18%' : '0%', xs :isSidebaropen ? '70%' :'0%' }, 
          transition: 'width 0.3s', 
          height: '100vh', 
          overflow: 'auto' ,
          position:{xs:'absolute', md:'relative'},
          zIndex: {xs: 10}
        }}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </Box>
      <Box 
        sx={{ 
          flex: 1, 
          width: isSidebaropen ? '82%' : '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%' 
        }}
      >
        <TopBar toggleSidebar={toggleSidebar} />
        <Box 
          sx={{ 
            flexGrow: 1, 
            overflow: 'auto' ,
            marginTop:'5px',
          }}
        >
          <Dashboardscreen />
        </Box>
      </Box>
    </Box>
  )
}
