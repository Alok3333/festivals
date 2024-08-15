import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chakra from "../assets/Ashoka_Chakra.svg.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function IndependenceDay() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ paddingTop: "0px", width: "300px" }}>
        <Grid item xs={12}>
          <Item sx={{ padding: "35px 0px", backgroundColor: "#FF671F" }}></Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ padding: "10px 0px", backgroundColor: "#fff" }}>
            <img src={chakra} width="50" height="50" alt="chakra-image" />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ padding: "35px 0px", backgroundColor: "#046A38" }}></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
