import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Dashboardscreen from './DashboardComponents/Dashboardscreen'
import { useState } from 'react'

export default function Dashboard() {
  const [isSidebaropen, setSideBarOpen] = useState(false)

  const toggleSidebar = () =>{
    setSideBarOpen(!isSidebaropen)
  }
  return (
    <Box sx={{display: 'flex', height:'100vh', alignItems:'flex-start'}}>
     <Box sx={{display: isSidebaropen ? 'block' : 'none', width: { md: isSidebaropen ? '18%' : 'none', sm: '100%' }, transition: 'width 0.3s'}}>
        <Sidebar />
     </Box>
     <Box sx={{width: isSidebaropen ? '82%' : '100%'}}>
        <TopBar toggleSidebar ={toggleSidebar}/>
        <Dashboardscreen/>
     </Box>
     <Box component='footer' sx={{height:'40px', backgroundColor:'blue'}}>
     </Box>
    </Box>
  )
}
