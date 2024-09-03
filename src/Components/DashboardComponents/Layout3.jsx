import React from "react";
import { Grid2 } from "@mui/material";
import PatientTable from "./ChartComponent/Patienttable";

export default function Layout3() {
  return (
    <Grid2 container justifyContent="center" sx={{padding:0, margin:0, width:'100%'}} >
      <Grid2 item xs={12} md={10}>
        <PatientTable />
      </Grid2>
    </Grid2>
  );
}