import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import Images from '../assets/images.jpg'
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import AirplayIcon from '@mui/icons-material/Airplay';
import { ChevronRight, ExpandMore , Email, CalendarViewDay, Face, CalendarMonth, BookOnline, } from '@mui/icons-material'




const NavList = ({title , icon}) =>{
  const [isOpen, SetIsopen] = useState(false)


  const toogle = () =>{
    SetIsopen(!isOpen)
  }
  return(
    <List sx={{width:'100%'}}>
            <ListItemButton 
              component='a' 
              href='#' 
              onClick={toogle}
              sx={{ 
                color: isOpen ? 'blue' : 'inherit', 
                justifyContent: 'space-between' 
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', }}>
                {icon}
                <ListItemText primary={title} />
              </Box>
              <ListItemIcon sx={{ color: isOpen ? 'blue' : 'inherit', fontSize:'small', position:'absolute', right:'0%', left:'80%' }}>
                {isOpen ? <ExpandMore /> : <ChevronRight />}
              </ListItemIcon>
            </ListItemButton>
          </List>

  )
}

export default function Sidebar() {
 
  return (
    
    <Box sx={{w:'100%', height:'100vh'}}>
    <Box sx={{display:'flex', backgroundColor:'blue', justifyContent:'center',padding:'10px', alignItems:'center', height:'7.5%', boxShadow:' 0 2px 4px 0 #fff'}}>
      <FontAwesomeIcon icon={faStethoscope} style={{fontWeight:'bold', fontSize:'18pt', color:'white'}}/>
      <Typography variant='h1' sx={{fontWeight:'bold', fontSize:'18pt', color:'white',ml:'10px'}}>
        Medical
      </Typography>
    </Box>
    <Box sx={{boxShadow: '1px solid black', padding:'5px'}} >

      <Box sx={{ height:'10%', padding:'20px' ,display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={Images} alt="doctor image" width='70' height='70' style={{boxShadow:'0 1px 1px 0 gray', borderRadius:'10px'}}  />
        <Typography variant='body1' sx={{fontWeight:'bold', fontFamily:'arial', mt:'0 10px'}}>Dr. Kiran Patel</Typography>
        <Typography variant='body2'>Administrator</Typography>
      </Box>


      <Box sx={{width:'100%', overflowY:'scroll', overflowX:'hidden'}}>
          <NavList title="Dashboard" icon={<AirplayIcon/>} />
          <NavList title="Email" icon={<Email/>} />
          <NavList title="Calendar" icon={<CalendarMonth/>} />
          <NavList title="Appointment" icon={<BookOnline/>} />
          <NavList title="Doctors" icon={<AirplayIcon/>} />
          <NavList title="OtherStaf" icon={<AirplayIcon/>} />
          <NavList title="Patient" icon={<Face/>} />
          <NavList title="Room Allotment" icon={<AirplayIcon/>} />
          <NavList title="Payments" icon={<AirplayIcon/>} />
          <NavList title="Widgets" icon={<AirplayIcon/>} />
          <NavList title="Ui Elements" icon={<AirplayIcon/>} />
          <NavList title="Material Elements" icon={<AirplayIcon/>} />

      </Box>

    </Box>

</Box>
  )
}
