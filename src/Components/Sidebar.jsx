import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import Images from '../assets/images.jpg'
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import AirplayIcon from '@mui/icons-material/Airplay';
import { ChevronRight, ExpandMore , Email, CalendarViewDay, Face, CalendarMonth, BookOnline,Person, PeopleAlt, SentimentSatisfied, AttachMoney, Redeem, NoteAddOutlined ,Layers, CheckBox, CheckBoxOutlineBlank} from '@mui/icons-material'




const NavList = ({title , icon}) =>{
  const [isOpen, SetIsopen] = useState(false)


  const toogle = () =>{
    SetIsopen(!isOpen)
  }
  return(
    <List sx={{width:'100%', fontSize:'12pt',}}>
            <ListItemButton 
              component='a' 
              href='#' 
              onClick={toogle}
              sx={{ 
                color: isOpen ? 'blue' : 'grey', 
                justifyContent: 'space-between' 
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px',fontWeight:'normal' }}>
                {icon}
                <ListItemText primary={title} />
              </Box>
              <ListItemIcon sx={{ color: isOpen ? 'blue' : 'inherit', fontSize:'6pt', position:'absolute', right:'0%', left:'90%' }}>
                {isOpen ? <ExpandMore /> : <ChevronRight />}
              </ListItemIcon>
            </ListItemButton>
          </List>

  )
}

export default function Sidebar() {
 
  return (
    
    <Box sx={{w:'100%', height:'100%', boxShadow:'2px 4px 10px grey'}}>
    <Box sx={{display:'flex', backgroundColor:'blue', justifyContent:'center',padding:'10px', alignItems:'center', height:'50px', boxShadow:' 0 2px 4px 0 #fff'}}>
      <FontAwesomeIcon icon={faStethoscope} style={{fontWeight:'bold', fontSize:'18pt', color:'white'}}/>
      <Typography variant='h1' sx={{fontWeight:'bold', fontSize:'18pt', color:'white',ml:'10px'}}>
        Medical
      </Typography>
    </Box>
    <Box sx={{boxShadow: '1px solid black', padding:'5px', backgroundColor:'white',}} >

      <Box sx={{ height:'10%', padding:'20px' ,display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={Images} alt="doctor image" width='70' height='70' style={{boxShadow:'0 1px 1px 0 gray', borderRadius:'10px'}}  />
        <Typography variant='body1' sx={{fontWeight:'bold', fontFamily:'arial', mt:'0 10px'}}>Dr. Kiran Patel</Typography>
        <Typography variant='body2'>Administrator</Typography>
      </Box>


      <Box sx={{ flexGrow: 1, overflowY: 'scroll', overflowX: 'hidden', display: 'flex',height:'70%', flexDirection: 'column', padding: '5px' , marginTop:'10px'}}>
          <NavList title="Dashboard" icon={<AirplayIcon/>} />
          <NavList title="Email" icon={<Email/>} />
          <NavList title="Calendar" icon={<CalendarMonth/>} />
          <NavList title="Appointment" icon={<BookOnline/>} />
          <NavList title="Doctors" icon={<Person/>} />
          <NavList title="OtherStaf" icon={<PeopleAlt/>} />
          <NavList title="Patient" icon={<SentimentSatisfied/>} />
          <NavList title="Room Allotment" icon={<NoteAddOutlined/>} />
          <NavList title="Payments" icon={<AttachMoney/>} />
          <NavList title="Widgets" icon={<Redeem/>} />
          <NavList title="Ui Elements" icon={<CheckBoxOutlineBlank/>} />
          <NavList title="Material Elements" icon={<Layers/>} />

      </Box>

    </Box>

</Box>
  )
}
