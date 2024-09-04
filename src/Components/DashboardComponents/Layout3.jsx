import React from "react";
import { Grid2 , Box} from "@mui/material";
import PatientTable from "./ChartComponent/Patienttable";

export default function Layout3() {
  return (
    <Box sx={{width:'100%'}}>
      <PatientTable/>

    </Box>
  );
}