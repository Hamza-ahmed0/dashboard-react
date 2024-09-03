import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button ,
  Box
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';

const patientData = [
  {
    id: 1,
    name: 'Jens Brincker',
    doctor: 'Dr.Kenny Josh',
    admitDate: '27/05/2016',
    disease: 'INFLUENZA',
    room: 101,
  },
  {
    id: 2,
    name: 'Mark Hay',
    doctor: 'Dr. Mark',
    admitDate: '26/05/2017',
    disease: 'CHOLERA',
    room: 105,
  },
  {
    id: 2,
    name: 'Mark Hay',
    doctor: 'Dr. Mark',
    admitDate: '26/05/2017',
    disease: 'CHOLERA',
    room: 105,
  },
  {
    id: 2,
    name: 'Mark Hay',
    doctor: 'Dr. Mark',
    admitDate: '26/05/2017',
    disease: 'CHOLERA',
    room: 105,
  },
  {
    id: 2,
    name: 'Mark Hay',
    doctor: 'Dr. Mark',
    admitDate: '26/05/2017',
    disease: 'CHOLERA',
    room: 105,
  },
  {
    id: 2,
    name: 'Mark Hay',
    doctor: 'Dr. Mark',
    admitDate: '26/05/2017',
    disease: 'CHOLERA',
    room: 105,
  },

  // Add the rest of your data here...
];

export default function PatientTable() {
  return (
    <Box sx={{width: '100%',      boxShadow:'2px 2px 10px lightblue'    }}>
     <TableContainer component={Paper} sx={{width:'100%'}}>
      <Table sx={{ width:'100%' }} aria-label="patient table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Assigned Doctor</TableCell>
            <TableCell>Date of Admit</TableCell>
            <TableCell>Diseases</TableCell>
            <TableCell>Room No</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.doctor}</TableCell>
              <TableCell>{row.admitDate}</TableCell>
              <TableCell>
                <span 
                  style={{ 
                    padding: '5px 10px', 
                    borderRadius: '15px', 
                    backgroundColor: getDiseaseColor(row.disease), 
                    color: '#fff' 
                  }}
                >
                  {row.disease}
                </span>
              </TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" startIcon={<Edit />} sx={{width:'20px'}}>
                </Button>
                <Button variant="outlined" color="error" startIcon={<Delete />} style={{ marginLeft: '10px' }}>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}

function getDiseaseColor(disease) {
  switch (disease.toUpperCase()) {
    case 'INFLUENZA':
      return '#03a9f4';
    case 'CHOLERA':
      return '#ff9800';
    case 'AMEBIASIS':
      return '#4caf50';
    case 'JAUNDICE':
      return '#ff5722';
    case 'LEPTOSPIROSIS':
      return '#00bcd4';
    case 'HEPATITIS':
      return '#ffeb3b';
    case 'TYPHOID':
      return '#673ab7';
    case 'MALARIA':
      return '#f44336';
    default:
      return '#9e9e9e';
  }
}